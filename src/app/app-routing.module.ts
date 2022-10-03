import { KendoGridComponent } from './kendo-grid/kendo-grid.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './Charts/charts.component';
import { AreaChartComponent } from './Charts/area-chart/area-chart.component';
import { BarChartComponent } from './Charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './Charts/line-chart/line-chart.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'tables', component:KendoGridComponent},
  {path:'charts', component:ChartsComponent},
  {path:'area-chart', component:AreaChartComponent,pathMatch:'full'},
  {path:'bar-chart', component:BarChartComponent,pathMatch:'full'},
  {path:'line-chart', component:LineChartComponent,pathMatch:'full'},
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
