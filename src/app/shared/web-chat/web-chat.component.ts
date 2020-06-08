import { Component, OnInit, Input } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { map, mergeAll } from 'rxjs/operators';
import { ChatService } from './chat.service';
import { UserService } from '../../services/services.index';
import { User } from '../../models/User';
import { IMessage } from '../../models/Message';

import * as moment from 'moment';
import { Process } from '../../models/Process';

@Component({
  selector: 'ngx-web-chat',
  templateUrl: 'web-chat.component.html',
  styles: [`
  nb-card{
    height: 100%;
  }
  `],
})
export class WebChatComponent implements OnInit {

  @Input('process') process: string;
  user: User;
  spinner:boolean = false;

  listMessages$: Observable<IMessage[]> = this._chatService.listMessages$;

  constructor( private _userService: UserService, private _chatService: ChatService) {
    this.user = this._userService.user;
   }

  ngOnInit() {
    this.loadMessages();
  }


  loadMessages(){
    this._chatService.loadProcess(this.process);
  }

  sendMessage(e: any) {
    let data = {
      process:this.process,
      user:this.user._id,
      message:e.message,
    }

    this._chatService.setMessage(data).subscribe(
      (response) => {
        console.log(response);
        this.loadMessages()
      },
      (err) =>  console.log('Hubo un error en la creacion del mensaje', err)
    )


  }

}
