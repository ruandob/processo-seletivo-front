import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

import {InputComponent} from "./input/input.component";
import {NotifyComponent} from "./notify/notify.component";
import {BreadcrumbsComponent} from './breadcrumb/breadcrumb.component';
import {SidebarToggleDirectives} from './sidebar/sidebar.directive';
import {NavDropwnDirectives} from './nav-dropdown/nav-dropdown.directive';

@NgModule({
    declarations: [
        InputComponent,
        NotifyComponent,
        BreadcrumbsComponent,
        SidebarToggleDirectives,
        NavDropwnDirectives
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        InputComponent,
        NotifyComponent,
        BreadcrumbsComponent,
        SidebarToggleDirectives,
        NavDropwnDirectives
    ]
    
})
export class SharedModule { }