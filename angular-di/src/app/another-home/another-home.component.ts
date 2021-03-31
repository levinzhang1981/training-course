import {Component, Inject, OnInit} from '@angular/core';
import {MessageService, MessageServiceInjectionToken} from "../service/message.service";
import {FormattedMessageService} from "../service/formatted-message.service";

@Component({
    selector: 'app-another-home',
    templateUrl: './another-home.component.html',
    styleUrls: ['./another-home.component.css'],
    providers: [
        {
            provide: MessageServiceInjectionToken,
            useClass: FormattedMessageService
        }
    ]
})
export class AnotherHomeComponent implements OnInit {

    constructor(@Inject(MessageServiceInjectionToken) private readonly messageService: MessageService) {
    }

    ngOnInit(): void {
    }

    onCreateClicked($event: MouseEvent) {
        this.messageService.putMessage("Clicked in Another Home Component!");
    }
}
