import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

import { WebComponentsAngularModule } from '@io/web-components-angular';
import { defineCustomElements } from '@io/web-components/loader'

defineCustomElements();

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, WebComponentsAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
