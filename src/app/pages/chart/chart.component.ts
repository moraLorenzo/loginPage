import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Employee } from 'src/app/interfaces/employee';
import { DataService } from 'src/app/services/data.service';
import { Visible } from 'src/app/interfaces/products';

/**
 * Setup the decorator and set selector templateURl and styleURLs
 */
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  /**
   * Instantiate piedata of type Object
   */
  public piedata!: Object[];

  /**
   * Instantiate legendSettings of type Visible
   */
  public legendSettings!: Visible;

  /**
   * Instantiate datalabel of type Object
   */
  public datalabel!: Object;

  /**
   * Instantiate employee of type Employee
   */
  employee: Employee[] = [];

  /**
   * 
   * @param _ds Inject Dataservice
   * Initialize the dependecies
   */
  constructor( private _ds: DataService) { }

  /**
   * Call getData function, set legend visibility to true and update datalabel settings
   */
  ngOnInit() {
    this.getData();

      this.legendSettings = {
        visible: true
      };

      this.datalabel = { visible: true, name: 'text', position: 'Outside' };
  }


  /**
   * Send request to get all employees
   */
  async getData(): Promise<void> {
    await firstValueFrom(this._ds.getEmployee()).then((res: Employee[]) => (this.employee = res), console.error);

    this.piedata = this.employee;
  }

}
