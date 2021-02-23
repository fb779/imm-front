import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ThemeModule } from "../../@theme/theme.module";
import {
  NbIconModule,
  NbCardModule,
  NbButtonModule,
  NbSpinnerModule,
} from "@nebular/theme";

import { DocumentsComponent } from "./documents.component";
import { SharedModule } from "../../shared/shared.module";

const nebular = [
  ThemeModule,
  NbIconModule,
  NbCardModule,
  NbButtonModule,
  NbSpinnerModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...nebular,
    SharedModule,
  ],
  declarations: [DocumentsComponent],
  exports: [DocumentsComponent],
})
export class DocumentsModule {}
