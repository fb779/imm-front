import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';
import {
  NbIconModule,
  NbCardModule,
  NbListModule,
  NbButtonModule
} from '@nebular/theme';

const nebular = [
  ThemeModule,
  NbIconModule,
  NbCardModule,
  NbListModule,
  NbButtonModule,
];

import { ClientMessagesRoutingModule } from './client-message-routing.module';
import { WebChatModule } from '../../shared/web-chat/web-chat.module';
import { ClientMessageComponent } from './client-message.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    ClientMessageComponent,
    HomeComponent,
    ChatComponent,
  ],
  imports: [
    CommonModule,
    ...nebular,
    WebChatModule,
    ClientMessagesRoutingModule
  ]
})
export class ClientMessageModule { }
