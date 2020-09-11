import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  NbCardModule,
  NbButtonModule,
  NbListModule,
  NbIconModule,
  NbSpinnerModule,
  NbAlertModule,
  NbAccordionModule,
} from "@nebular/theme";

const nebular_faq = [
  NbIconModule,
  NbSpinnerModule,
  NbAlertModule,
  NbCardModule,
  NbButtonModule,
  NbListModule,
  NbAccordionModule,
];

import { FaqComponent } from "./faq.component";

@NgModule({
  declarations: [FaqComponent],
  imports: [CommonModule, ...nebular_faq],
  exports: [FaqComponent],
})
export class FaqModule {}
