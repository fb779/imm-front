import { Component, OnInit, Input } from "@angular/core";
import { IMessage } from "../../../models/Message";
import { User } from "../../../models/User";

import * as moment from "moment";

@Component({
  selector: "ngx-list-chat",
  templateUrl: "./list-chat.component.html",
  styleUrls: ["./list-chat.component.scss"],
})
export class ListChatComponent implements OnInit {
  @Input() messages: IMessage[] = [];
  chatMessages: HTMLElement;

  constructor() {}

  ngOnInit() {}
}
