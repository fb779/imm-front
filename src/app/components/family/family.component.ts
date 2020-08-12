import { Component, OnInit, Input } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { Process } from "../../models/Process";
import { FormFamilyMembersComponent } from "./form-family-members/form-family-members.component";
import { DeleteFamilyMemberComponent } from "./delete-family-member/delete-family-member.component";
import { FamilyService, ToastrService } from "../../services/services.index";
import { status } from "../../config/config";

@Component({
  selector: "ngx-family",
  templateUrl: "./family.component.html",
  styleUrls: ["./family.component.scss"],
})
export class FamilyComponent implements OnInit {
  @Input() process: Process;
  @Input() url: string[];

  visible: boolean = true; // define la visibilidad de los botones de editar y eliminar

  listFamilyMembers$ = this._familyServices.listFamilyMembers$;
  numberFamilyMembers: number;

  constructor(
    private _toastr: ToastrService,
    private dialogService: NbDialogService,
    private _familyServices: FamilyService
  ) {}

  ngOnInit() {
    this._familyServices.chageProcess(this.process._id);
    this._familyServices.numberFamilyMembers$.subscribe((response) => {
      this.numberFamilyMembers = response;
      this.isVisible();
    });
  }

  // isVisible( url: string[], process: Process, NumberFamily: number  ){
  isVisible() {
    this.visible = false;

    if (this.url[0] === "pages") {
      // console.log("miembros de la familia cargados", this.numberFamilyMembers);
      // console.log("acompañantes permitidos", this.process.companion);
      if (
        this.process.status === status.active
        // && this.numberFamilyMembers < parseInt(this.process.companion + 1)
      ) {
        this.visible = true;
        console.log("entramos al caso de verdad", this.visible);
      }
    } else {
      if (this.process.status !== status.form) {
        this.visible = true;
      }
    }
  }

  openDialog() {
    if (parseInt(this.process.companion + 1) <= this.numberFamilyMembers) {
      this._toastr.toastrGenericMessage(
        "Limit of family members",
        "Family Members",
        "warning"
      );
      return;
    }

    this.dialogService.open(FormFamilyMembersComponent, {
      context: {
        process: this.process,
        url: this.url,
      },
    });
  }

  updateClient(ev) {
    // console.log('actualizar cliente',ev);
    this.dialogService.open(FormFamilyMembersComponent, {
      context: {
        process: this.process,
        url: this.url,
        client: ev,
      },
    });
  }

  deleteClient(ev) {
    // console.log('eliminar cliente',ev);
    this.dialogService
      .open(DeleteFamilyMemberComponent, {
        context: { client: ev },
      })
      .onClose.subscribe((res) => {
        if (res) {
          this._familyServices
            .removeFamiliMember(this.process, ev)
            .subscribe(() => {
              this._toastr.toastrGenericMessage(
                "Remove family member",
                "Family members",
                "success"
              );
            });
        }
      });
  }
}
