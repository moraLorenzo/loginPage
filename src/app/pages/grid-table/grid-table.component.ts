import { Component, OnInit, ViewChild} from '@angular/core';
import { firstValueFrom} from 'rxjs';
import { DataService } from 'src/app/services/data.service';

import { IRowDataEventArgs,IGridEditDoneEventArgs, IgxGridComponent } from 'igniteui-angular';
import { UserTable } from 'src/app/interfaces/users';


/**
 * Setup the decorator and set selector templateURl and styleURLs
 */
@Component({
  selector: 'app-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.scss']
})

/**
 * Initialize the class
 */
export class GridTableComponent implements OnInit {

  /**
   * Initialize search text value as empty string
   */
  public searchText: string = '';

  /**
   * set case sensitivity option to false
   */
  public caseSensitive: boolean = false;

  /**
   * set exact match option to false
   */
  public exactMatch: boolean = false;

  /**
   * set gridcomponent property
   */
  @ViewChild('grid1', { static: true }) public grid!: IgxGridComponent;

  /**
   * Initialize the usertable data
   */
  usersTable: UserTable[] = [];

  /**
   * 
   * @param _ds Inject Dataservice
   * Initialize the service
   */
  constructor(private _ds: DataService) { }

  /**
   * Call the getData method to get all the data to be populated
   */
  async ngOnInit(): Promise<void> {
    await this.getData();
  }

  /**
   * Get all user and assign to userTable variable to populate table
   */
  async getData(): Promise<void> {
    await firstValueFrom(this._ds.getUsers()).then((res: UserTable[]) => (this.usersTable = res), console.error);
  }

  /**
   * 
   * @param event whole row data
   * It will get the whole data row and can be access thru event.data
   */
  async rowAdded(event: IRowDataEventArgs): Promise<void> {
   await firstValueFrom(this._ds.addUsers(event.data)).then((_res: UserTable[]) => console.log, console.error);
  }

  /**
   * Reassign searchText variable as empty string
   */
  public clearSearch(): void {
    this.searchText = '';
  }

  /**
   * Disable OR Enable the case sensitivity option
   */
  public updateSearch(): void {
    this.caseSensitive = !this.caseSensitive;
  }

  /**
   * Disable OR Enable the exact search option
   */
  public updateExactSearch(): void {
    this.exactMatch = !this.exactMatch;
  }

   /**
    * 
    * @param event whole row data
    * It will require ID parameter which can be accessed thru event.data.id
    */
  async rowDeleted(event: IRowDataEventArgs): Promise<void> {
    await firstValueFrom(this._ds.deleteUsers(event.data.id)).then((_res: UserTable[]) => console.log, console.error);
  }

  /**
   * 
   * @param event whole row data
   * It will require 2 parameters rowID and newValue which can be accessed thru event.rowID and event.newValue
   */
  async rowEditDone(event: IGridEditDoneEventArgs): Promise<void> {
    await firstValueFrom(this._ds.putUsers(event.rowID, event.newValue)).then((_res: UserTable[]) => this.getData(), console.error);
  }

}
