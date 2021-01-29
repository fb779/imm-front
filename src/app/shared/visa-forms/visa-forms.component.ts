import { Component, Input, OnInit } from "@angular/core";
import { visaCategories } from "../../config/config";
import { Process } from "../../models/Process";

@Component({
  selector: "ngx-visa-forms",
  templateUrl: "./visa-forms.component.html",
  styleUrls: ["./visa-forms.component.scss"],
})
export class VisaFormsComponent implements OnInit {
  @Input("process") process: Process;
  visa: String;
  vsCategories = visaCategories;

  constructor() {}

  ngOnInit() {
    this.visa = this.process.visa_category.title || null;
  }
}
