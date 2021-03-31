import {Injectable} from '@angular/core';
import {MessageService} from "./message.service";
import {MessageStoreService} from "./message-store.service";

@Injectable()
export class FormattedMessageService implements MessageService {

    constructor(private readonly messageStore: MessageStoreService) {
    }

    putMessage(message: string) {
        this.messageStore.push(`[${new Date().toLocaleTimeString()}] - ${message}`)
    }
}
