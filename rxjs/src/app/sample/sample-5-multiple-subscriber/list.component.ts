import {Component, OnInit} from '@angular/core';
import {debounceTime, first, map} from 'rxjs/operators';

import {AccountService, AlertService} from '../../_services';
import {Subject} from "rxjs";

@Component({templateUrl: 'list.component.html'})
export class ListComponent implements OnInit {
    users = null;
    total: number = 0;

    nameFilterValue: string;

    nameFilterChangeSubject = new Subject<string>();

    constructor(private accountService: AccountService,
                private alertService: AlertService) {

        // 5.Multiple subscriber
        const obs = this.nameFilterChangeSubject
            .pipe(
                debounceTime(500),
                map(filter => filter != null ? filter.toLowerCase() : filter));


        obs.subscribe((value) => {
            console.log(`Debounced event output: ${value}`)
            this.accountService.getAll(value)
                .pipe(first())
                .subscribe(users => this.users = users);
        });

        obs.subscribe((value) => {
            this.alertService.warn('Loading...', {autoClose: true});
        });
    }

    ngOnInit() {
        this.nameFilterChangeSubject.next();
    }

    deleteUser(id: string) {
        const user = this.users.find(x => x.id === id);
        user.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.users = this.users.filter(x => x.id !== id)
            });
    }

    generateUser() {
        this.accountService.generateUser().subscribe((users) => {
            this.users = users;
        });
    }

    onNameFilterChange($event: any) {
        this.nameFilterChangeSubject.next(this.nameFilterValue)
    }
}