import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { DateTimeVNPipe } from './date-time-vn.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DateTimeVNPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
