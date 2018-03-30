import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { NgxselectexComponent } from './route/ngxselectex/ngxselectex.component';
import { NgselectComponent } from './route/ngselect/ngselect.component';

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot([
    {
        path: 'ngxselectex',
        component: NgxselectexComponent
    },
    {
        path: 'ngselect',
        component: NgselectComponent
    }
]);