import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgxSelectModule } from 'ngx-select-ex';

import { APP_ROUTING } from './app.routing';

import { NgxselectexComponent } from './route/ngxselectex/ngxselectex.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        NgxSelectModule,
        APP_ROUTING
    ],
    declarations: [
        AppComponent,
        NgxselectexComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}