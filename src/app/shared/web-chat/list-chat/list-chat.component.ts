import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { IMessage } from "../../../models/Message";

@Component({
  selector: "ngx-list-chat",
  templateUrl: "./list-chat.component.html",
  styleUrls: ["./list-chat.component.scss"],
})
export class ListChatComponent implements OnInit, OnChanges {
  @Input() messages: IMessage[] = [];
  // chatMessages: HTMLElement;
  @ViewChild("chatMessages", { static: false, read: ElementRef })
  chatMessages: ElementRef<any>;

  constructor() {}

  ngOnChanges(): void {
    this.refreshScroll();
  }

  ngOnInit() {
    // this.refreshScroll();
  }

  refreshScroll() {
    setTimeout(() => {
      this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
    }, 0);
  }
}
