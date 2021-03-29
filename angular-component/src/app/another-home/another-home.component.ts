import {Component} from '@angular/core';

import {User} from '../_models';
import {AccountService} from '../_services';

@Component({
    templateUrl: 'another-home.component.html'
})
export class AnotherHomeComponent {

    user: User;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
}