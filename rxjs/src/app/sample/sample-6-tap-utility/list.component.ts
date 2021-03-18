import {Component, OnInit} from '@angular/core';
import {debounceTime, first, map, tap} from 'rxjs/operators';

import {AccountService} from '../../_services';
import {Subject} from "rxjs";

@Component({templateUrl: 'list.component.html'})
export class ListComponent implements OnInit {
    users = null;
    total: number = 0;

    nameFilterValue: string;

    nameFilterChangeSubject = new Subject<string>();

    constructor(private accountService: AccountService) {

        // 3.Lower Case Filter Output
        this.nameFilterChangeSubject
            .pipe(
                debounceTime(500),
                map(filter => filter != null ? filter.toLowerCase() : filter))
            .subscribe((value) => {
                console.log(`Debounced event output: ${value}`)
                this.accountService.getAll(value)
                    .pipe(
                        first(),
                        // 6, Utility with Tap
                        tap(users => this.total = users.length))
                    .subscribe(users => this.users = users);
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
            .subscribe((users) => {
                this.users = users;
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