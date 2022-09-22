import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom} from 'rxjs';
import { DataService } from 'src/app/services/data.service';

import { IRowDataEventArgs, IgxGridComponent } from 'igniteui-angular';
import { UserTable } from 'src/app/interfaces/users';

@Component({
  selector: 'app-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.scss']
})
export class GridTableComponent implements OnInit {

  public searchText: string = '';
  public caseSensitive: boolean = false;
  public exactMatch: boolean = false;

  @ViewChild('grid1', { static: true }) public grid!: IgxGridComponent;
  usersTable: UserTable[] = [];


  constructor(private _ds: DataService, private route: ActivatedRoute, private _detector: ChangeDetectorRef) { }

  async ngOnInit(): Promise<void> {
    await this.getData();
  }

  async getData(): Promise<void> {
    await firstValueFrom(this._ds.getUsers()).then((res: UserTable[]) => (this.usersTable = res), console.error);
  }


  async rowAdded(event: IRowDataEventArgs): Promise<void> {
    await firstValueFrom(this._ds.addUsers(event.data)).then((res: UserTable[]) => console.log, console.error);
  }

  public clearSearch(): void {
    this.searchText = '';
  }

  public updateSearch(): void {
    this.caseSensitive = !this.caseSensitive;
  }

  public updateExactSearch(): void {
    this.exactMatch = !this.exactMatch;
  }

  async rowDeleted(event: IRowDataEventArgs): Promise<void> {
    await firstValueFrom(this._ds.deleteUsers(event.data.id)).then((res: UserTable[]) => console.log, console.error);
  }

}
