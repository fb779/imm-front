import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ngx-show-family-members",
  templateUrl: "./show-family-members.component.html",
  styleUrls: ["./show-family-members.component.scss"],
})
export class ShowFamilyMembersComponent implements OnInit {
  @Input("list") listFamilyMembers;

  constructor() {}

  ngOnInit() {}
}
