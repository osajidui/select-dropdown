import { Component } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: "test-iframe",
    templateUrl: './iframe.component.html',
    styleUrls: [ "./iframe.component.scss" ]
})
export class IframeComponent {
 
    constructor(private sanitizer: DomSanitizer) {
    
    }

    public url = this.sanitizer.bypassSecurityTrustResourceUrl('/ngxselectex');
}