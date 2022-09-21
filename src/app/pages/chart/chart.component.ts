import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

      this.legendSettings = {
        visible: true
      };

      this.datalabel = { visible: true, name: 'text', position: 'Outside' };
  }

  async getData(): Promise<void> {
    await firstValueFrom(this._ds.getEmployee()).then((res: Employee[]) => (this.employee = res), console.error);

    this.piedata = this.employee;
  }

}
