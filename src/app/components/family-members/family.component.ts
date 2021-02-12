import { Component, OnInit, Input } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { Process } from "../../models/Process";

import { WrapperComponent } from "./wrapper/wrapper.component";

import { FamilyService, ToastrService } from "../../services/services.index";
import { status } from "../../config/config";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-family",
  templateUrl: "./family.component.html",
  styleUrls: ["./family.component.scss"],
})
export class FamilyComponent implements OnInit {
  @Input() process: Process;
  url: string[];

  visible: boolean = true; // define la visibilidad de los botones de editar y eliminar

  listFamilyMembers$ = this._familyServices.listFamilyMembers$;
  numberFamilyMembers: number;

  constructor(
    private _router: Router,
    private _toastr: ToastrService,
    private dialogService: NbDialogService,
    private _familyServices: FamilyService
  ) {}

  ngOnInit() {
    this.url = this._router.url.split("/").filter((x) => x.trim() !== "");
    this._familyServices.chageProcess(this.process._id);
    this._familyServices.numberFamilyMembers$.subscribe((response) => {
      this.numberFamilyMembers = response;
      this.isVisible();
    });
  }

  isVisible() {
    this.visible = false;

    if (this.url[0] === "pages") {
      if (this.process.status === status.active) {
        this.visible = true;
      }
    } else {
      if (this.process.status !== status.form) {
        this.visible = true;
      }
    }
  }

  openDialog() {
    // if (parseInt(this.process.companion + 1) <= this.numberFamilyMembers) {
    //   this._toastr.toastrGenericMessage(
    //     "Limit of family members",
    //     "Family Members",
    //     "warning"
    //   );
    //   return;
    // }

    this.dialogService.open(WrapperComponent, {
      context: {
        process: this.process,
      },
    });

    // this.dialogService.open(FormFamilyMembersComponent, {
    //   context: {
    //     process: this.process,
    //     url: this.url,
    //   },
    // });
  }

  // updateClient(ev) {
  //   this.dialogService.open(FormFamilyMembersComponent, {
  //     context: {
  //       process: this.process,
  //       url: this.url,
  //       client: ev,
  //     },
  //   });
  // }

  // deleteClient(ev) {
  //   this.dialogService
  //     .open(DeleteFamilyMemberComponent, {
  //       context: { client: ev },
  //     })
  //     .onClose.subscribe((res) => {
  //       if (res) {
  //         this._familyServices
  //           .removeFamiliMember(this.process, ev)
  //           .subscribe(() => {
  //             this._toastr.toastrGenericMessage(
  //               "Remove family member",
  //               "Family members",
  //               "success"
  //             );
  //           });
  //       }
  //     });
  // }
}
