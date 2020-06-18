import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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
  NbAlertModule,
];

import { VisitorComponent } from "./forms/visitor/visitor.component";
import { TuristComponent } from "./forms/turist/turist.component";
import { UploadFileComponent } from "./upload-file/upload-file.component";
import { ClientDocumentsUploadComponent } from "./client-documents-upload/client-documents-upload.component";
import { ListDocumentsComponent } from "./client-documents-upload/list-documents/list-documents.component";
import { UploadDocumentComponent } from "./client-documents-upload/upload-document/upload-document.component";
import { DialogChecklistComponent } from "./dialog-checklist/dialog-checklist.component";
import { CheckListFormComponent } from "./dialog-checklist/check-list-form/check-list-form.component";
import { FamilyModule } from "../components/family/family.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...nebular,
    FamilyModule,
  ],
  declarations: [
    VisitorComponent,
    TuristComponent,
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
  entryComponents: [CheckListFormComponent],
})
export class SharedModule {}
