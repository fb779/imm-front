import { Component, OnInit } from "@angular/core";
import { CheckList } from "../../models/CheckList";
import { AdminChecklistService } from "./admin-checklist.service";

@Component({
  selector: "ngx-admin-checklist",
  templateUrl: "./admin-checklist.component.html",
  styleUrls: ["./admin-checklist.component.scss"],
})
export class AdminChecklistComponent implements OnInit {
  list_checklist$ = this._adminChecklistService.getListChecklist();

  bk_list_checklist: CheckList[] = [];
  list_checklist: CheckList[] = [];

  constructor(private _adminChecklistService: AdminChecklistService) {}

  ngOnInit() {
    this.loadListChecklist();
  }

  loadListChecklist() {
    this.list_checklist$.subscribe((response) => {
      this.bk_list_checklist = response;
      this.list_checklist = response;
    });
  }

  search(key: string) {
    let value = key.toLowerCase();

    if (value.length === 0) {
      this.list_checklist = this.bk_list_checklist;
    } else {
      this.list_checklist = this.bk_list_checklist.filter((el) => {
        return (
          el.name.toLowerCase().includes(value) ||
          el.group.toLowerCase().includes(value)
        );
      });
    }
  }
}
