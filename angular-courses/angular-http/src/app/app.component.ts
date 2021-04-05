import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({selector: "app", templateUrl: "app.component.html"})
export class AppComponent implements OnInit {
    cases: any[] = [];
    countryFilter: string = 'US';

    loading: boolean = false;

    constructor(private readonly _httpClient: HttpClient) {
    }

    ngOnInit() {
        this.loadCases(this.countryFilter);
    }

    onFilterChanged(countryFilter: string) {
        this.loadCases(countryFilter);
    }

    loadCases(countryFilter: string) {
        this.loading = true;
        this._httpClient.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${countryFilter}`).subscribe(result => {
            this.cases = [];

            for (let stateKey in result) {
                const stateData = result[stateKey];
                this.cases.push({
                    state: stateKey,
                    confirmed: stateData.confirmed,
                    recovered: stateData.recovered,
                    deaths: stateData.deaths,
                    deathsRate: (stateData.deaths / stateData.confirmed),
                    updated: stateData.updated
                })
            }
            this.loading = false;
        })
    }
}
