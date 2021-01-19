import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { Router } from "@angular/router";

import { Process } from "../../../models/Process";
import { status } from "../../../config/config";

@Component({
  selector: "ngx-form-express-entry",
  templateUrl: "./form-express-entry.component.html",
  styleUrls: ["./form-express-entry.component.scss"],
})
export class FormExpressEntryComponent implements OnInit {
  @Input("process") process: Process;

  id: string;
  submitted = false;
  cmStatus = status;
  url: string[];

  forma: FormGroup;

  // loadData = {
  //   p_marital_001: "1",
  //   p_marital_002: "1",
  //   p_marital_003: "2",
  // };

  constructor(private _router: Router, private _fb: FormBuilder) {
    this.url = this._router.url.split("/").filter((x) => x.trim() !== "");
  }

  ngOnInit() {
    this.forma = this._fb.group({
      _id: this._fb.control("new"),
      kind: this._fb.control(""),
    });
  }

  save() {
    console.log("validando formulario");
    this.submitted = true;

    if (this.forma.invalid) {
      // this._toastr.toastrGenericMessage(`Form is nvalid`, "Form", "warning");
      // console.log("errores", this.forma.errors);
      return;
    }

    console.log("Valores", this.forma.value);
  }
}
