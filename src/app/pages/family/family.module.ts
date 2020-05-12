import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { FamilyComponent } from './family.component';
import { SharedModule } from '../../shared/shared.module';
import {
  NbIconModule,
  NbCardModule,
  NbTabsetModule,
  NbInputModule,
  NbButtonModule,
  NbRadioModule,
} from '@nebular/theme';

const family_nebular = [
  ThemeModule,
  NbCardModule,
  NbIconModule,
  NbTabsetModule
];

@NgModule({
  declarations: [
    FamilyComponent
  ],
  imports: [
    CommonModule,
    ...family_nebular,
    SharedModule,
  ]
})
export class FamilyModule { }
