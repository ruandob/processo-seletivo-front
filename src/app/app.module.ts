//ANGULAR
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

// NGX
import { BsDropdownModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';

// ERROR HANDLER
import { HttpInterceptor } from './httpInterceptor';
import { CustomErrorHandler } from "./customErrorHandler"

// APP
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';

// LAYOUT
// import { LayoutDefaultComponent } from './_layout/layout-default/layout-default.component';
// import { LayoutSingleComponent } from './_layout/layout-single/layout-single.component';

//SHARED
import { SharedModule } from "./shared/shared.module";
import { MenuComponent } from './_layout/menu/menu.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      onActivateTick: true,
    }),
    ModalModule.forRoot(),
    SharedModule,
    HttpModule,
    RouterModule

  ],
  providers: [
    HttpInterceptor,
    [{
      provide: ErrorHandler,
      useClass: CustomErrorHandler
    }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
