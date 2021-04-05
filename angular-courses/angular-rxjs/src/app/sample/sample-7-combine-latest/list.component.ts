import {Component, OnInit} from '@angular/core';
import {debounceTime, first, map, tap} from 'rxjs/operators';

import {AccountService} from '../../_services';
import {combineLatest, Subject} from "rxjs";

@Component({templateUrl: 'list.component.html'})
export class ListComponent implements OnInit {
    users = null;
    total: number = 0;

    nameFilterValue: string;
    ageFilterValue: number;

    nameFilterChangeSubject = new Subject<string>();
    ageFilterChangeSubject = new Subject<number>();

    constructor(private accountService: AccountService) {

        // 7 Combine input and check box
        combineLatest([this.nameFilterChangeSubject.pipe(
            debounceTime(500),
            map(filter => filter != null ? filter.toLowerCase() : filter)),
            this.ageFilterChangeSubject.pipe(
                debounceTime(500))
        ]).subscribe(([name, age]) => {
            console.log(`Debounced event output: ${name},  ${age}`)
            this.accountService.getAll(name, age)
                .pipe(
                    first(),
                    // 6, Utility with Tap
                    tap(users => this.total = users.length))
                .subscribe(users => this.users = users);
        });
    }

    ngOnInit() {
        this.nameFilterChangeSubject.next();
        this.ageFilterChangeSubject.next();
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