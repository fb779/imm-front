import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

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

import { UploadFileComponent } from "./upload-file/upload-file.component";
import { ClientDocumentsUploadComponent } from "./client-documents-upload/client-documents-upload.component";
import { UploadDocumentComponent } from "./client-documents-upload/upload-document/upload-document.component";
import { DialogChecklistComponent } from "./dialog-checklist/dialog-checklist.component";
import { CheckListFormComponent } from "./dialog-checklist/check-list-form/check-list-form.component";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...nebular],
  declarations: [
    UploadFileComponent,
    ClientDocumentsUploadComponent,
    UploadDocumentComponent,
    DialogChecklistComponent,
    CheckListFormComponent,
  ],
  exports: [
    CommonModule,
    UploadFileComponent,
    ClientDocumentsUploadComponent,
    DialogChecklistComponent,
  ],
  entryComponents: [CheckListFormComponent],
})
export class SharedModule {}
