import {InjectionToken} from '@angular/core';

export const MessageServiceInjectionToken = new InjectionToken<MessageService>("Service Injection Token of Message Service");

export interface MessageService {

    putMessage(message: string);

}
