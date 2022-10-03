import { LineChartComponent } from './Charts/line-chart/line-chart.component';
import { BarChartComponent } from './Charts/bar-chart/bar-chart.component';
import { AreaChartComponent } from './Charts/area-chart/area-chart.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { ProductService } from './service/product.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExcelModule, GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './Charts/charts.component';
import { IconsModule } from '@progress/kendo-angular-icons';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating.component';
import { HttpClientModule } from '@angular/common/http';
import { MenusModule } from '@progress/kendo-angular-menu';
import { FormsModule } from '@angular/forms';

import "hammerjs";


@NgModule({
  declarations: [
    AppComponent,
    KendoGridComponent,
    HomeComponent,
    ChartsComponent,
    AreaChartComponent,
    BarChartComponent,
    LineChartComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    DateInputsModule,
    BrowserAnimationsModule,
    GridModule,
    DropDownsModule,
    LayoutModule,
    IndicatorsModule,
    MenusModule,
    IconsModule,
    InputsModule,
    NavigationModule,
    ButtonsModule,
    PDFModule,
    ExcelModule,
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
