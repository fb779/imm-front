import { Component, OnInit, Input, Output } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { Observable } from "rxjs";
import {
  AssessmentFormService,
  FamilyService,
  ToastrService,
} from "../../../services/services.index";
import { status, relationships } from "../../../config/config";
import { Title } from "../../../models/Titlel";
import { Country } from "../../../models/Country";
import { Client } from "../../../models/Client";
import { Process } from "../../../models/Process";

@Component({
  selector: "ngx-family-form",
  templateUrl: "./family-form.component.html",
  styleUrls: ["./family-form.component.scss"],
})
export class FamilyFormComponent implements OnInit {
  @Input("process") process: Process;
  @Input("url") url: string[];
  @Input("members") members: number;

  status = status;

  visibleClient: boolean = false;
  visibleConsultan: boolean = false;

  clientForm: FormGroup;
  submitted = false;

  listFamiliMembers$: Observable<Client[]> = this._familyServices.listFamilyMembers$;

  optAges = [];
  optRelationships = [];
  optTitles: Title[] = [];
  optSex = [];
  optCountries: Country[] = [];
  optStatus = [];

  constructor(
    private formBuilder: FormBuilder,
    private _asf: AssessmentFormService,
    private _familyServices: FamilyService,
    private _toastr: ToastrService
  ) {
    this._asf.getAges().subscribe((data) => {
      this.optAges = data;
    });

    this._asf.getRelationships().subscribe((data) => {
      this.optRelationships = data;
    });

    this._asf.getTitles().subscribe((data) => {
      this.optTitles = data;
    });

    this._asf.getSex().subscribe((data) => {
      this.optSex = data;
    });

    this._asf.getCountries().subscribe((data) => {
      this.optCountries = data;
    });

    this._asf.getStatus().subscribe((data) => {
      this.optStatus = data;
    });
  }

  ngOnInit() {
    this.buildForm();
    this._familyServices.chageProcess(this.process);
    // this.loadMembers();
    this.visibleClient = this.process && this.process.status === status.active;
    this.visibleConsultan =
      this.process &&
      this.process.status !== status.active &&
      this.url[0] !== "pages";
  }

  get f() {
    return this.clientForm.controls;
  }

  /**
   * Metodo para la construccion del formlario
   */
  private buildForm() {
    this.clientForm = this.formBuilder.group({
      _id: new FormControl(""),
      first_name: new FormControl("", [Validators.required]),
      last_name: new FormControl("", [Validators.required]),
      relationship: new FormControl("", [Validators.required]),
      title: new FormControl("", [Validators.required]),
      sex: new FormControl("", [Validators.required]),
      country_citizenship: new FormControl("", [Validators.required]),
      other_citizenship: new FormControl("", []),
      country_residence: new FormControl("", [Validators.required]),
      status_residence: new FormControl("", [Validators.required]),
      status_residence_other: new FormControl({ value: "", disabled: true }, [
        Validators.required,
      ]),
      age: new FormControl({ value: "", disabled: true }, [
        Validators.required,
      ]),
    });

    // this.clientForm.get('status_residence_other').disable();
    this.clientForm.controls["relationship"].valueChanges.subscribe(
      (value: any) => {
        if (value === relationships.child) {
          this.clientForm.get("age").enable();
        } else {
          this.clientForm.get("age").disable();
          this.clientForm.get("age").reset();
        }
      }
    );

    this.clientForm.controls["status_residence"].valueChanges.subscribe(
      (value: any) => {
        if (value == 5) {
          this.clientForm.get("status_residence_other").enable();
        } else {
          this.clientForm.get("status_residence_other").disable();
          this.clientForm.get("status_residence_other").reset();
        }
      }
    );
  }

  addMember() {
    if (this.clientForm.invalid) {
      this.submitted = true;
      // alert('formulario invalido');
      return;
    }

    this._familyServices
      .newFamilyMember(this.process, this.clientForm.value)
      .subscribe(
        (res) => {
          this._toastr.toastrGenericMessage('Save new family member', 'Family members', 'success');
          this.clientForm.reset();
          this.submitted = false;
        },
        (err) => this._toastr.toastrGenericMessage('Error to save new family member', 'Family members', 'danger')
      );
  }

  loadToEditMember(client: Client) {
    this.clientForm.setValue(client);
  }

  updateMember() {
    if (this.clientForm.invalid) {
      this.submitted = true;
      this._toastr.toastrGenericMessage('Form to family member is invalid', 'Family members', 'warning');
      // alert('formulario invalido');
      return;
    }

    this._familyServices
      .editFamilyMember(this.process, this.clientForm.value)
      .subscribe((res) => {
        if (res.ok) {
          this._toastr.toastrGenericMessage('Edit family member', 'Family members', 'success');
          // this.loadMembers();
          // this._familyServices.chageProcess(this.process);
          this.clientForm.reset();
          this.submitted = false;
        }
      });
  }

  removeMenber(client: Client) {
    this._familyServices
      .removeFamiliMember(this.process, client)
      .subscribe(() => {
        // this.loadMembers();
        this._toastr.toastrGenericMessage('Remove family member', 'Family members', 'success');
        this.clientForm.reset();
        this.submitted = false;
      });
  }
}
