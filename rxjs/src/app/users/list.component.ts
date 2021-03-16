import {Component, OnInit} from '@angular/core';
import {debounceTime, first} from 'rxjs/operators';

import {AccountService} from '../_services';
import {Subject} from "rxjs";

@Component({templateUrl: 'list.component.html'})
export class ListComponent implements OnInit {
    users = null;
    filterValue: string;

    filterChangeSubject = new Subject<string>();

    constructor(private accountService: AccountService) {
        // 1.Raw Output
        // this.filterChangeSubject
        //     .subscribe((value) => {
        //         console.log(`Raw event output: ${value}`)
        //         this.accountService.getAll(value)
        //             .pipe(first())
        //             .subscribe(users => this.users = users);
        //     });

        // 2.Debounced Output
        this.filterChangeSubject
            .pipe(debounceTime(500))
            .subscribe((value) => {
                console.log(`Debounced event output: ${value}`)
                this.accountService.getAll(value)
                    .pipe(first())
                    .subscribe(users => this.users = users);
            });
    }

    ngOnInit() {
        this.accountService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
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

    filterChange($event: any) {
        this.filterChangeSubject.next(this.filterValue)
    }
}