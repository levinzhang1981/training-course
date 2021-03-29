import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-shadow-dom-ve',
    template: `
        <p>
            shadow-dom-ve works!
        </p>
    `,
    styles: [`
        p {
            color: orange;
            border: orange 2px solid;
        }
    `],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowDomVeComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
