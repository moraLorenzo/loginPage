import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

//Import HTTP Module
import { HttpClientModule } from '@angular/common/http';

//PrimeNG Components
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { HomeComponent } from './pages/home/home.component';

// import the GridModule for the Grid component
import { GridModule, PagerModule, PageService, EditService, ToolbarService, SortService  } from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PagerModule,
    InputTextModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    CardModule
  ],
  providers: [EditService, ToolbarService, SortService, PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
