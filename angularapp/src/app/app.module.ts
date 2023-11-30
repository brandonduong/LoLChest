import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component'
import { ItemsComponent } from './items/items.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ItemComponent, ItemsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
