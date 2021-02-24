import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { NbDialogRef, NbDialogService } from "@nebular/theme";
import { Process } from "../../../models/Process";
import { Observable, Subject } from "rxjs";

import { FamilyService, ToastrService } from "../../../services/services.index";
import { DeleteFamilyMemberComponent } from "../delete-family-member/delete-family-member.component";
import { takeUntil, tap } from "rxjs/operators";

@Component({
  selector: "ngx-wrapper",
  templateUrl: "./wrapper.component.html",
  styleUrls: ["./wrapper.component.scss"],
})
export class WrapperComponent implements OnInit, OnDestroy {
  @Input("process") process: Process;

  nFamilyMembers: number = 0;

  notifier$: Subject<any> = new Subject();
  listFamily$: Observable<any> = this._familyService.listFamilyUser$;
  listClienProcess$: Observable<any> = this._familyService.listFamilyMembers$;
  numberFamily: number;

  constructor(
    protected ref: NbDialogRef<WrapperComponent>,
    private dialogService: NbDialogService,
    private _familyService: FamilyService,
    private _toastr: ToastrService
  ) {}

  ngOnInit() {
    this._familyService.numberFamilyMembers$.subscribe((dt) => {
      this.numberFamily = dt;
    });
  }

  ngOnDestroy(): void {
    this._familyService.loadEditClient(null);
    this.notifier$.next();
    this.notifier$.complete();
  }

  saveForm(evClient) {
    const { _id: id } = evClient;

    if (!id) {
      this._familyService
        .newFamilyMember(this.process, evClient)
        .pipe(takeUntil(this.notifier$))
        .subscribe(
          (res) => {
            this._toastr.toastrGenericMessage(
              "Save new family member",
              "Family members",
              "success"
            );
            this._familyService.loadEditClient(null);
          },
          (err) =>
            this._toastr.toastrGenericMessage(
              "Error to save new family member",
              "Family members",
              "danger"
            )
        );
    } else {
      this._familyService
        .editFamilyMember(this.process, evClient)
        .pipe(takeUntil(this.notifier$))
        .subscribe(
          (res) => {
            this._toastr.toastrGenericMessage(
              "Save family member",
              "Family members",
              "success"
            );
            this._familyService.loadEditClient(null);
          },
          (err) =>
            this._toastr.toastrGenericMessage(
              "Error to save new family member",
              "Family members",
              "danger"
            )
        );
    }
  }

  updateClient(editClient) {
    this._familyService.loadEditClient(editClient);
  }

  deleteClient(deleteClient) {
    this.dialogService
      .open(DeleteFamilyMemberComponent, {
        context: { client: deleteClient },
      })
      .onClose.pipe(takeUntil(this.notifier$))
      .subscribe((res) => {
        if (res) {
          this._familyService
            .removeFamilyMember(this.process, deleteClient)
            .pipe(takeUntil(this.notifier$))
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

  setClientToProcess(client) {
    if (
      client.checked &&
      this.numberFamily >= parseInt(this.process.companion)
    ) {
      this._familyService.chageProcess(this.process._id);
      this._toastr.toastrGenericMessage(
        "You can't add more family members",
        "Family members",
        "warning"
      );
      return;
    }

    if (client.checked) {
      this._familyService
        .addClientProcess(this.process._id, client._id)
        .pipe(takeUntil(this.notifier$))
        .subscribe(() => {
          this._toastr.toastrGenericMessage(
            "Added family member successful",
            "Family members",
            "success"
          );
        });
    } else {
      this._familyService
        .removeClientProcess(this.process._id, client._id)
        .pipe(takeUntil(this.notifier$))
        .subscribe(() => {
          this._toastr.toastrGenericMessage(
            "Removed family member successful",
            "Family members",
            "success"
          );
        });
    }
  }
}
