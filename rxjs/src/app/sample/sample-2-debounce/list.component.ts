import {Component, OnInit} from '@angular/core';
import {debounceTime, first} from 'rxjs/operators';

import {AccountService} from '../../_services';
import {Subject} from "rxjs";

@Component({templateUrl: 'list.component.html'})
export class ListComponent implements OnInit {
    users = null;
    total: number = 0;

    nameFilterValue: string;
    ageFilterValue: number;

    nameFilterChangeSubject = new Subject<string>();

    constructor(private accountService: AccountService) {

        // 2.Debounced Output
        this.nameFilterChangeSubject
            .pipe(debounceTime(500))
            .subscribe((value) => {
                console.log(`Debounced event output: ${value}`)
                this.accountService.getAll(value)
                    .pipe(first())
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