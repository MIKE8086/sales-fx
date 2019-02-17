import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCmpTest01Component } from './components/ng-cmp-test01.component';

@NgModule({
  declarations: [
    AppComponent,
    NgCmpTest01Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NgCmpTest01Component],
  entryComponents: [NgCmpTest01Component]
})
export class AppModule { }
