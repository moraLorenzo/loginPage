import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

//Import HTTP Module
import { HttpClientModule } from '@angular/common/http';

//PrimeNG Components
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { HomeComponent } from './pages/home/home.component';
import { AvatarModule } from 'primeng/avatar';
// import {AvatarGroupModule} from 'primeng/avatargroup';

//Syncfusion
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';

// import the GridModule for the Grid component
import { GridModule, PagerModule, PageService, EditService, ToolbarService, SortService } from '@syncfusion/ej2-angular-grids';

// Ignite UI
import { IgxActionStripModule, IgxGridModule, IgxFocusModule, IgxButtonModule, IgxIconModule, IgxInputGroupModule, IgxRippleModule, IgxChipsModule } from "igniteui-angular";
import {IgxItemLegendModule, IgxPieChartModule, IgxLegendModule, IgxDataChartCoreModule, IgxDataChartCategoryCoreModule, IgxDataChartCategoryModule, IgxDataChartInteractivityModule, IgxDataChartVerticalCategoryModule, IgxDataChartAnnotationModule } from 'igniteui-angular-charts';


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
    AccumulationChartModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PagerModule,
    CommonModule,
    InputTextModule,
    ButtonModule,
    MessagesModule,
    AvatarModule,
    MessageModule,
    CardModule,
    IgxGridModule,
    IgxFocusModule,
    IgxActionStripModule,
    IgxButtonModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxRippleModule,
    IgxChipsModule,
    IgxLegendModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartInteractivityModule,
    IgxDataChartVerticalCategoryModule,
    IgxDataChartAnnotationModule,
    IgxItemLegendModule, IgxPieChartModule
  ],
  providers: [EditService, ToolbarService, SortService, PageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
