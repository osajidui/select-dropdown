import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { NgxselectexComponent } from './route/ngxselectex/ngxselectex.component';

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot([
    {
        path: 'ngxselectex',
        component: NgxselectexComponent
    }
]);