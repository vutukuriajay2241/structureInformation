import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatDialogModule} from '@angular/material/dialog';
import {DialogDataDialogComponent} from './dialog-data-dialog/dialog-data-dialog.component'
import { StoreModule } from '@ngrx/store';
import { StrucComponent} from './struc/struc.component'
import { counterReducer } from './struc.reducer';
@NgModule({
  declarations: [
    AppComponent,
    StrucComponent,
    DialogDataDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
