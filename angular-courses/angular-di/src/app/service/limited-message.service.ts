import {Injectable} from '@angular/core';
import {MessageService} from "./message.service";
import {MessageStoreService} from "./message-store.service";

@Injectable()
export class LimitedMessageService implements MessageService {

    constructor(private readonly limitation: number = Number.MAX_VALUE,
                private readonly messageStore: MessageStoreService) {
    }

    putMessage(message: string) {
        if (this.messageStore.messages.length >= this.limitation) {
            alert("Message Store is Full.")
            return;
        }
        this.messageStore.push(`[${new Date().toLocaleTimeString()}] - ${message}`)
    }
}
