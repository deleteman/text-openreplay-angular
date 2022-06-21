import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MakeUpProductsComponent } from './make-up-products/make-up-products.component';

@NgModule({
  declarations: [
    AppComponent,
    MakeUpProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
