import {Injectable} from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class MessageStoreService {

    private readonly _messages: string[] = []

    constructor() {
    }

    push(message: string) {
        this._messages.push(message);
    }

    get messages(): string[] {
        return this._messages;
    }
}
