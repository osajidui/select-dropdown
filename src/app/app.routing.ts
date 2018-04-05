import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { NgxselectexComponent } from './route/ngxselectex/ngxselectex.component';
import { NgselectComponent } from './route/ngselect/ngselect.component';
import { IframeComponent } from './route/iframe/iframe.component';

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot([
    {
        path: 'ngxselectex',
        component: NgxselectexComponent
    },
    {
        path: 'ngselect',
        component: NgselectComponent
    },
    {
        path: 'iframe',
        component: IframeComponent
    }
]);