import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";

import { AppComponent }   from './app.component';
import { Ng2OverlayModule }  from 'ng2-overlay';

@NgModule({
  imports: [BrowserModule, FormsModule, Ng2OverlayModule],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }