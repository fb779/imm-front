import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbButtonModule,
  NbListModule,
  NbIconModule,
  NbSpinnerModule,
  NbAlertModule,
  NbCheckboxModule,
  NbRadioModule,
  NbActionsModule,
} from '@nebular/theme';

const nebular_web_chat = [
  NbIconModule,
  NbSpinnerModule,
  NbAlertModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbButtonModule,
  NbListModule,
  // NbActionsModule,
  // NbRadioModule,
];

import { WebChatComponent } from './web-chat.component';
import { ListChatComponent } from './list-chat/list-chat.component';
import { MessageChatComponent } from './message-chat/message-chat.component';



@NgModule({
  declarations: [
    WebChatComponent,
    ListChatComponent,
    MessageChatComponent,
  ],
  exports: [
    WebChatComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...nebular_web_chat,
  ],
})
export class WebChatModule { }
