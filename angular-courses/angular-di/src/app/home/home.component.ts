import {Component, Inject, OnInit} from '@angular/core';
import {MessageService, MessageServiceInjectionToken} from "../service/message.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(@Inject(MessageServiceInjectionToken) private readonly messageService: MessageService) {
    }

    ngOnInit(): void {
    }

    onCreateClicked($event: MouseEvent) {
        this.messageService.putMessage("Clicked in Home Component!");
    }
}
