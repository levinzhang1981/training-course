import {AfterViewInit, Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {AccountService} from '../../_services';
import {fromEvent, Subject} from "rxjs";

@Component({templateUrl: 'list.component.html'})
export class ListComponent implements OnInit, AfterViewInit {
    users = null;
    total: number = 0;

    nameFilterValue: string;

    nameFilterChangeSubject = new Subject<string>();

    constructor(private accountService: AccountService) {
    }

    ngOnInit() {
        this.accountService.getAll(this.nameFilterValue)
            .pipe(first())
            .subscribe(users => this.users = users);
    }

    ngAfterViewInit(): void {
        // 4.Create event by fromEvent()
        fromEvent(document.getElementById('inputElement'), 'change')
            .subscribe((value) => {
                console.log(`Debounced event output: ${value}`, value)
                this.accountService.getAll(this.nameFilterValue)
                    .pipe(first())
                    .subscribe(users => this.users = users);
            });
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