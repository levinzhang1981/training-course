import {Component, ElementRef, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {AccountService} from '../../_services';
import {Subject} from "rxjs";

@Component({templateUrl: 'list.component.html'})
export class ListComponent implements OnInit {
    users = null;
    total: number = 0;

    nameFilterValue: string;
    ageFilterValue: number;

    nameFilterChangeSubject = new Subject<string>();
    ageFilterChangeSubject = new Subject<number>();

    constructor(private accountService: AccountService,
                private elementRef: ElementRef) {
        this.nameFilterChangeSubject
            .subscribe((value) => {
                console.log(`Raw event output: ${value}`)
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

    onAgeFilterChange($event: any) {
        this.ageFilterChangeSubject.next(this.ageFilterValue)
    }
}