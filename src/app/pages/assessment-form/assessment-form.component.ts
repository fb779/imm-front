import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Process } from "../../models/Process";
import { UserProcessService } from "../../services/services.index";

@Component({
  selector: "ngx-assessment-form",
  template: `<router-outlet></router-outlet>`,
  // templateUrl: './assessment-form.component.html',
  styleUrls: ["./assessment-form.component.scss"],
})
export class AssessmentFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
