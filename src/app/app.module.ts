import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {TalkWithDbServiceService}from './talk-with-db-service.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TalkWithDbServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
