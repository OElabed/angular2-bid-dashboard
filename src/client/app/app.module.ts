import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from '@angular/material';

import { AccessModule } from './access/access.module';
import { ContentModule } from './content/content.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    AccessModule,
    ContentModule,
    SharedModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [{
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
