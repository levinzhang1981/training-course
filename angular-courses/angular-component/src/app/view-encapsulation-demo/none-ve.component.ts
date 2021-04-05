import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-none-ve',
    template: `
        <div class="code-block">
            <![CDATA[
            p {
            color: blue;
            border: blue 2px solid;
            }
            ]]>
        </div>
        <p>
            none-ve works!
        </p>
    `,
    styles: [`
        p {
            color: blue;
            border: blue 2px solid;
        }
    `],
    encapsulation: ViewEncapsulation.None
})
export class NoneVeComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
