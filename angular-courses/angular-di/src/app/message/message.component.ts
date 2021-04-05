import {Component, OnInit} from '@angular/core';
import {MessageStoreService} from "../service/message-store.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

    constructor(public messageStore: MessageStoreService) {
    }

    ngOnInit(): void {
    }

}
