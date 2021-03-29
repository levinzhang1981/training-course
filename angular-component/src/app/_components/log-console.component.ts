import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-log-console',
    template: `
        <p style="color: chocolate;margin-top: 36px;">{{componentName}} Log Console</p>
        <div class="dummy-console">
            <p *ngFor="let log of logs">{{log}}</p>
        </div>
    `,
    styles: [
        `div.dummy-console {
            border-top-style: outset;
        }`
    ]
})
export class LogConsoleComponent implements OnInit,
    OnChanges,
    OnDestroy,
    DoCheck,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked {

    @Input() componentName: string;
    logs: string[] = ['Console Log Started...'];

    constructor() {
        this.logs.push(`Execute constructor method.`);
        console.log(`Execute constructor method.`);
    }

    /**
     * A lifecycle hook that is called when any data-bound property of a directive changes.
     * Define an ngOnChanges() method to handle the changes.
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void {
        this.logs.push(`Execute ngOnChanges method. Param: ${changes}`);
        console.log(`Execute ngOnChanges method. Param: ${changes}`);
    }

    /**
     * A lifecycle hook that is called after Angular
     *      has initialized all data-bound properties of a directive.
     * Define an ngOnInit() method to handle any additional initialization tasks.
     */
    ngOnInit(): void {
        this.logs.push(`Execute ngOnInit method.`);
        console.log(`Execute ngOnInit method.`);
    }

    /**
     * A lifecycle hook that invokes a custom change-detection function for a directive,
     * in addition to the check performed by the default change-detector.
     */
    ngDoCheck(): void {
        this.logs.push(`Execute ngDoCheck method.`);
        console.log(`Execute ngDoCheck method.`);
    }

    /**
     * A lifecycle hook that is called after Angular
     *      has fully initialized all content of a directive.
     * Define an ngAfterContentInit() method to handle any additional initialization tasks.
     */
    ngAfterContentInit(): void {
        this.logs.push(`Execute ngAfterContentInit method.`);
        console.log(`Execute ngAfterContentInit method.`);
    }

    /**
     * A lifecycle hook that is called after the default change detector
     *      has completed checking all content of a directive.
     */
    ngAfterContentChecked(): void {
        this.logs.push(`Execute ngAfterContentChecked method.`);
        console.log(`Execute ngAfterContentChecked method.`);
    }

    /**
     * A lifecycle hook that is called after Angular has fully initialized a component's view.
     * Define an ngAfterViewInit() method to handle any additional initialization tasks.
     */
    ngAfterViewInit(): void {
        this.logs.push(`Execute ngAfterViewInit method.`);
        console.log(`Execute ngAfterViewInit method.`);
    }

    /**
     * A lifecycle hook that is called after the default change detector
     *      has completed checking a component's view for changes.
     */
    ngAfterViewChecked(): void {
        this.logs.push(`Execute ngAfterViewChecked method.`);
        console.log(`Execute ngAfterViewChecked method.`);
    }

    /**
     * A lifecycle hook that is called when a directive, pipe, or service is destroyed.
     * Use for any custom cleanup that needs to occur when the instance is destroyed.
     */
    ngOnDestroy(): void {
        this.logs.push(`Execute ngOnDestroy method.`);
        console.log(`Execute ngOnDestroy method.`);
    }
}
