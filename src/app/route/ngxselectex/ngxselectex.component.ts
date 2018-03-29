import { Component } from "@angular/core";
import { FormControl } from '@angular/forms';


@Component({
    selector: "test-ngxselectex",
    templateUrl: './ngxselectex.component.html',
    styleUrls: [ "./ngxselectex.component.scss" ]
})
export class NgxselectexComponent {
 
    constructor() {
      this.ngxControl.valueChanges.subscribe(value => console.log('value change',value));
    }
 
    public items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
    'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
    'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
    'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
    'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
    'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
    'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
    'Zagreb', 'Zaragoza', 'Łódź'];

    public ngxControl = new FormControl();
    public doNgxDefault(): any {
        // return this._ngxDefault;
    }
 
    public inputTyped(source: string, text: string) {
        console.log('SingleDemoComponent.inputTyped', source, text);
    }
 
    public doFocus() {
        console.log('SingleDemoComponent.doFocus');
    }
 
    public doBlur() {
        console.log('SingleDemoComponent.doBlur');
    }
 
    public doOpen() {
        console.log('SingleDemoComponent.doOpen');
    }
 
    public doClose() {
        console.log('SingleDemoComponent.doClose');
    }
 
    public doSelect(value: any) {
        console.log('SingleDemoComponent.doSelect', value);
    }
 
    public doRemove(value: any) {
        console.log('SingleDemoComponent.doRemove', value);
    }
}