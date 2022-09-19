import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AccumulationChart, PieSeries, AccumulationDataLabel, Category, AccumulationLegend } from '@syncfusion/ej2-charts';
import { EmitType } from '@syncfusion/ej2-base';
import { firstValueFrom } from 'rxjs';
import { Employee } from 'src/app/interfaces/employee';
import { DataService } from 'src/app/services/data.service';
import { Visible } from 'src/app/interfaces/products';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  
  public piedata!: Object[];
  public legendSettings!: Visible;
  public datalabel!: Object;

  employee: Employee[] = [];

  constructor(private _detector: ChangeDetectorRef, private _ds: DataService) { }

  ngOnInit() {
    this.getData();
    // this.piedata = [
    //   { x: 'Jan', y: 3, text: 'Jan: 3' }, 
    //   { x: 'Feb', y: 3.5, text: 'Feb: 3.5' },
    //   { x: 'Mar', y: 7, text: 'Mar: 7' }, 
    //   { x: 'Apr', y: 13.5, text: 'Apr: 13.5' },
    //   { x: 'May', y: 19, text: 'May: 19' }, { x: 'Jun', y: 23.5, text: 'Jun: 23.5' },
    //   { x: 'Jul', y: 26, text: 'Jul: 26' }, { x: 'Aug', y: 25, text: 'Aug: 25' },
    //   { x: 'Sep', y: 21, text: 'Sep: 21' }, { x: 'Oct', y: 15, text: 'Oct: 15' },
    //   { x: 'Nov', y: 9, text: 'Nov: 9' }, { x: 'Dec', y: 3.5, text: 'Dec: 3.5' }];

      this.legendSettings = {
        visible: true
      };

      this.datalabel = { visible: true, name: 'text', position: 'Outside' };
  }

  async getData(): Promise<void> {
    await firstValueFrom(this._ds.getEmployee()).then((res: Employee[]) => (this.employee = res), console.error);
    console.log(this.employee);

    this.piedata = this.employee;
  }

}
