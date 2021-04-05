import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-shadow-dom-ve',
    template: `
        <div class="code-block">
            <![CDATA[
            p {
            color: orange;
            border: orange 2px solid;
            }
            ]]>
        </div>
        <p>
            shadow-dom-ve works!
        </p>
    `,
    styles: [`
        p {
            color: orange;
            border: orange 2px solid;
        }
    `,
        `
            div.code-block {
                background: grey;
                color: white;
                padding: 6px;
                border: black 2px solid;
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
