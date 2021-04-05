import {Component, Inject, OnInit} from '@angular/core';
import {MessageService, MessageServiceInjectionToken} from "../service/message.service";
import {MessageStoreService} from "../service/message-store.service";
import {LimitedMessageService} from "../service/limited-message.service";
import {FormattedMessageService} from "../service/formatted-message.service";

@Component({
    selector: 'app-isolated-home',
    templateUrl: './isolated-home.component.html',
    styleUrls: ['./isolated-home.component.css'],
    providers: [
        // MessageStoreService,
        // {
        //     provide: MessageStoreService,
        //     useValue: new MessageStoreService()
        // },
        // {
        //     provide: MessageServiceInjectionToken,
        //     useFactory: (messageStoreService) => new LimitedMessageService(2, messageStoreService),
        //     deps: [MessageStoreService]
        // },
        {
            provide: MessageServiceInjectionToken,
            useClass: FormattedMessageService
        }
    ]
})
export class IsolatedHomeComponent implements OnInit {

    constructor(@Inject(MessageServiceInjectionToken) private readonly messageService: MessageService) {
    }

    ngOnInit(): void {
    }

    onCreateClicked($event: MouseEvent) {
        this.messageService.putMessage("Clicked in Isolate Home Component!");
    }
}
