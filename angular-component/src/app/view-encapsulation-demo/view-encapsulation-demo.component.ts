import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-view-encapsulation-demo',
    template: `
        <div class="col-md-6 offset-md-3 mt-5">
            <button routerLink="/view-encapsulation/emulated" routerLinkActive="btn-primary" class="btn">
                Emulated Encapsulation
            </button>
            <button routerLink="/view-encapsulation/shadow-dom" routerLinkActive="btn-primary" class="btn">
                ShadowDom Encapsulation
            </button>
            <button routerLink="/view-encapsulation/none" routerLinkActive="btn-primary" class="btn">
                None Encapsulation
            </button>
        </div>
        <div class="col-md-6 offset-md-3 mt-5 ">
        <p>Global Style:</p>
            <div class="code-block">
                <![CDATA[
                div.view-encapsulation-demo p {
                color: grey;
                border: grey 2px solid;
                font-size: 24px;
                font-weight: bold;
                margin-top: 24px;
                }
                ]]>
            </div>
        </div>
        <div class="col-md-6 offset-md-3 mt-5 view-encapsulation-demo">
            <p>Demo Start Here:</p>
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
        .view-encapsulation-demo p {
            color: red;
            border: red 2px solid;
        }
    `]
})
export class ViewEncapsulationDemoComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
