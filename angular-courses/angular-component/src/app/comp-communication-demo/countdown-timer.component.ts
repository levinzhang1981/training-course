import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject} from "rxjs";

@Component({
    selector: 'app-countdown-timer',
    template: '<p>{{message}}</p>'
})
export class CountdownTimerComponent implements OnInit, OnDestroy {

    intervalId = 0;
    message = '';
    seconds = 11;

    constructor(private timerService: CountdownTimerService) {
        timerService.seconds = this.seconds;
        timerService.countdownTimerSubject.subscribe(start => {
            if (start) {
                this.start()
            } else {
                this.stop()
            }
        })
    }

    clearTimer() {
        clearInterval(this.intervalId);
    }

    ngOnInit() {
        this.start();
    }

    ngOnDestroy() {
        this.clearTimer();
    }

    start() {
        this.countDown();
    }

    stop() {
        this.clearTimer();
        this.message = `Holding at T-${this.seconds} seconds`;
    }

    private countDown() {
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
            this.seconds -= 1;
            if (this.seconds === 0) {
                this.message = 'Blast off!';
            } else {
                if (this.seconds < 0) {
                    this.seconds = 10;
                } // reset
                this.message = `T-${this.seconds} seconds and counting`;
            }
            this.timerService.seconds = this.seconds;
        }, 1000);
    }
}

export class CountdownTimerService {
    countdownTimerSubject = new Subject<boolean>();
    seconds: number;
}

//// Local variable, #timer, version
@Component({
    selector: 'app-countdown-parent-lv',
    template: `
        <h3>Countdown to Liftoff (via local variable)</h3>
        <button (click)="timer.start()">Start</button>
        <button (click)="timer.stop()">Stop</button>
        <div class="seconds">{{timer.seconds}}</div>
        <app-countdown-timer #timer></app-countdown-timer>
    `,
    styles: [
        `
            .seconds {
                background-color: black;
                color: red;
                font-size: 3em;
                margin: 0.3em 0;
                text-align: center;
                width: 1.5em;
            }
        `
    ]
})
export class CountdownLocalVarParentComponent {
}

//// View Child version
@Component({
    selector: 'app-countdown-parent-vc',
    template: `
        <h3>Countdown to Liftoff (via ViewChild)</h3>
        <button (click)="start()">Start</button>
        <button (click)="stop()">Stop</button>
        <div class="seconds">{{ seconds() }}</div>
        <app-countdown-timer></app-countdown-timer>
    `,
    styles: [
        `
            .seconds {
                background-color: black;
                color: red;
                font-size: 3em;
                margin: 0.3em 0;
                text-align: center;
                width: 1.5em;
            }
        `
    ]
})
export class CountdownViewChildParentComponent implements AfterViewInit {

    @ViewChild(CountdownTimerComponent)
    private timerComponent: CountdownTimerComponent;

    seconds() {
        return 0;
    }

    ngAfterViewInit() {
        setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
    }

    start() {
        this.timerComponent.start();
    }

    stop() {
        this.timerComponent.stop();
    }
}

//// Via Service
@Component({
    selector: 'app-countdown-parent-sv',
    template: `
        <h3>Countdown to Liftoff (via global service)</h3>
        <button (click)="countdownSubject.next(true)">Start</button>
        <button (click)="countdownSubject.next(false)">Stop</button>
        <div class="seconds">{{countdownService.seconds}}</div>
        <app-countdown-timer #timer></app-countdown-timer>
    `,
    styles: [
        `
            .seconds {
                background-color: black;
                color: red;
                font-size: 3em;
                margin: 0.3em 0;
                text-align: center;
                width: 1.5em;
            }
        `
    ]
})
export class CountdownServiceParentComponent {

    countdownSubject: Subject<boolean>;

    constructor(public countdownService: CountdownTimerService) {
        this.countdownSubject = countdownService.countdownTimerSubject;
    }
}
