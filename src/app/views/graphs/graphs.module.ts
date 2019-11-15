import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartsModule } from "ng2-charts";
import { GraphsRoutingModule } from "./graphs-routing.module";
import { BarChartComponent } from "./bar-chart/bar-chart.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule, GraphsRoutingModule, ChartsModule],
  declarations: [BarChartComponent]
})
export class GraphsModule {}
