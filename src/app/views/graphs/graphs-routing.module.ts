import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BarChartComponent } from "./bar-chart/bar-chart.component";
const routes: Routes = [
  {
    path: "",
    component: BarChartComponent,
    data: {
      title: "Graphs"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphsRoutingModule {}
