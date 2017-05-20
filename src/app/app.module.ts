import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CodekulComponent } from './codekul/codekul.component';
import { AndroidComponent } from './android/android.component';
import { AngComponent } from './codekul/ang/ang.component';
import { ThingsComponent } from './android/things.component';

@NgModule({
  declarations: [
    AppComponent,
    CodekulComponent,
    AndroidComponent,
    AngComponent,
    ThingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
