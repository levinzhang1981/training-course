import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-comp-communication-demo',
    template: `
        <div id="parent-to-child-local-var">
            <app-countdown-parent-lv></app-countdown-parent-lv>
        </div>
        <div id="parent-to-view-child">
            <app-countdown-parent-vc></app-countdown-parent-vc>
        </div>
        <div id="parent-to-child-service">
            <app-countdown-parent-sv></app-countdown-parent-sv>
        </div>

    `,
    styles: []
})
export class CompCommunicationDemoComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
