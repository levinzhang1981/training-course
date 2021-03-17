import {AfterContentInit, Component, ElementRef, OnInit} from '@angular/core';
import {debounceTime, filter, first, map, tap} from 'rxjs/operators';

import {AccountService} from '../_services';
import {combineLatest, fromEvent, Subject} from "rxjs";

@Component({templateUrl: 'list.component.html'})
export class ListComponent implements OnInit, AfterContentInit {
    users = null;
    total: number = 0;

    nameFilterValue: string;
    ageFilterValue: number;

    nameFilterChangeSubject = new Subject<string>();
    ageFilterChangeSubject = new Subject<number>();

    constructor(private accountService: AccountService,
                private elementRef: ElementRef) {
        // 1.Raw Output
        // this.filterChangeSubject
        //     .subscribe((value) => {
        //         console.log(`Raw event output: ${value}`)
        //         this.accountService.getAll(value)
        //             .pipe(first())
        //             .subscribe(users => this.users = users);
        //     });

        // 2.Debounced Output
        // this.filterChangeSubject
        //     .pipe(debounceTime(500))
        //     .subscribe((value) => {
        //         console.log(`Debounced event output: ${value}`)
        //         this.accountService.getAll(value)
        //             .pipe(first())
        //             .subscribe(users => this.users = users);
        //     });

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


        // 5.Multiple subscriber
        // this.filterChangeSubject
        //     .pipe(
        //         debounceTime(500),
        //         map(filter => filter != null ? filter.toLowerCase() : filter))
        //     .subscribe((value) => {
        //         console.log(`Debounced event output: ${value}`)
        //         this.accountService.getAll(value)
        //             .pipe(first())
        //             .subscribe(users => this.users = users);
        //     });
        //
        // this.filterChangeSubject
        //     .pipe(
        //         debounceTime(500),
        //         map(filter => filter != null ? filter.toLowerCase() : filter))
        //     .subscribe((value) => {
        //         console.log(`Debounced event output: ${value}`)
        //         this.accountService.getAll(value)
        //             .pipe(first())
        //             .subscribe(users => this.users = users);
        //     });

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
    }

    ngAfterContentInit(): void {
        // 4.Create event by fromEvent()
        // fromEvent(this.elementRef.nativeElement.children[2], 'change')
        //     .subscribe((value) => {
        //         console.log(`Debounced event output: ${value}`, value)
        //         this.accountService.getAll(this.filterValue)
        //             .pipe(first())
        //             .subscribe(users => this.users = users);
        //     });
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

    onAgeFilterChange($event: any) {
        this.ageFilterChangeSubject.next(this.ageFilterValue)
    }
}