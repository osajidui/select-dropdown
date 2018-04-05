import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgxSelectModule } from 'ngx-select-ex';
import { NgSelectModule } from '@ng-select/ng-select';

import { APP_ROUTING } from './app.routing';

import { NgxselectexComponent } from './route/ngxselectex/ngxselectex.component';
import { NgselectComponent } from './route/ngselect/ngselect.component';
import { IframeComponent } from './route/iframe/iframe.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        NgxSelectModule,
        NgSelectModule,
        APP_ROUTING
    ],
    declarations: [
        AppComponent,
        NgxselectexComponent,
        NgselectComponent,
        IframeComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}