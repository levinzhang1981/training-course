import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

import {User} from '../_models';
import {AccountService} from '../_services';

@Component({
    templateUrl: 'another-home.component.html',
    styleUrls: ['another-home.component.css']
})
export class AnotherHomeComponent implements AfterViewInit {

    user: User;

    constructor(private accountService: AccountService,
                private elementRef: ElementRef) {
        this.user = this.accountService.userValue;
    }

    ngAfterViewInit(): void {
        this.elementRef.nativeElement.onclick = () => {
            this.elementRef.nativeElement.classList.add('wavy');
            setTimeout(() => {
                this.elementRef.nativeElement.classList.remove('wavy')
            }, 5000);
        }
    }
}