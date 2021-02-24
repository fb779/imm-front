import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FamilyService } from "../../../services/services.index";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: "ngx-family-list",
  templateUrl: "./family-list.component.html",
  styleUrls: ["./family-list.component.scss"],
})
export class FamilyListComponent implements OnInit {
  @Input("list") listFamilyMembers: any;
  @Input("visible") visible: boolean;
  @Output() update_client: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete_client: EventEmitter<any> = new EventEmitter<any>();
  @Output() setClientToProcess: EventEmitter<any> = new EventEmitter<any>();

  listClientsProcess$: Observable<any> = this._familyService.listFamilyMembers$;

  constructor(private _familyService: FamilyService) {}

  ngOnInit() {
    this.listClientsProcess$
      .pipe(
        tap((dt) => {
          dt.forEach((el) => {
            const index = this.listFamilyMembers.findIndex(
              (cl) => cl._id.toString() === el._id.toString()
            );

            if (index >= 0) this.listFamilyMembers[index].checked = true;
          });
        })
      )
      .subscribe();
  }
}
