import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {
  NbMenuModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbButtonModule,
  NbCheckboxModule,
  NbStepperModule,
  NbListModule,
  NbDatepickerModule,
  NbIconModule,
  NbAccordionModule,
  NbSpinnerModule,
  NbAlertModule,
  NbActionsModule,
  NbRadioModule,
  NbUserModule,
} from "@nebular/theme";

const nebular = [
  NbMenuModule,
  NbIconModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbButtonModule,
  NbStepperModule,
  NbListModule,
  NbAccordionModule,
  NbSpinnerModule,
  NbAlertModule
  // NbActionsModule,
  // NbRadioModule,
  // NbUserModule
];

import { VisitorComponent } from "./forms/visitor/visitor.component";
import { TuristComponent } from "./forms/turist/turist.component";
import { FamilyFormComponent } from "./forms/family-form/family-form.component";
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ClientDocumentsUploadComponent } from './client-documents-upload/client-documents-upload.component';
import { ListDocumentsComponent } from './client-documents-upload/list-documents/list-documents.component';
import { UploadDocumentComponent } from './client-documents-upload/upload-document/upload-document.component';
import { DialogChecklistComponent } from './dialog-checklist/dialog-checklist.component';
import { CheckListFormComponent } from './dialog-checklist/check-list-form/check-list-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...nebular
  ],
  declarations: [
    VisitorComponent,
    TuristComponent,
    FamilyFormComponent,
    UploadFileComponent,
    ClientDocumentsUploadComponent,
    ListDocumentsComponent,
    UploadDocumentComponent,
    DialogChecklistComponent,
    CheckListFormComponent,
  ],
  exports: [
    CommonModule,
    VisitorComponent,
    TuristComponent,
    UploadFileComponent,
    ClientDocumentsUploadComponent,
    DialogChecklistComponent,
  ],
  entryComponents: [
    CheckListFormComponent
  ],

})
export class SharedModule { }
