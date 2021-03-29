import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-emulated-ve',
    template: `
        <p>
            emulated-ve works!
        </p>
    `,
    styles: [`
        p {
            color: black;
            border: black 2px solid;
        }
    `],
    encapsulation: ViewEncapsulation.Emulated
})
export class EmulatedVeComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
