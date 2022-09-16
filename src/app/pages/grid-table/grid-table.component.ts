import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Account } from '../../interfaces/index';

import * as _ from 'lodash';

import { IRowDataEventArgs, IGridEditDoneEventArgs } from 'igniteui-angular';
import { IgxGridComponent } from 'igniteui-angular';

import { Product } from 'src/app/interfaces/products';
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
    console.log(this.usersTable);

    // console.log(this.usersTable);
  }


  async rowAdded(event: IRowDataEventArgs): Promise<void> {
    await firstValueFrom(this._ds.addUsers(event.data)).then((res: UserTable[]) => console.log, console.error);
  }

  public clearSearch(): void {
    this.searchText = '';
    this.grid.clearSearch();
  }

  public searchKeyDown(ev: KeyboardEvent): void {

    if (!_.indexOf(['Enter', 'ArrowDown', 'ArrowRight'], ev.key)) {
      ev.preventDefault();
      this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    } else if (!_.indexOf(['ArrowUp', 'ArrowLeft'], ev.key)) {
      ev.preventDefault();
      this.grid.findPrev(this.searchText, this.caseSensitive, this.exactMatch);
    }
  }

  public updateSearch(): void {
    this.caseSensitive = !this.caseSensitive;
    this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
  }

  public updateExactSearch(): void {
    this.exactMatch = !this.exactMatch;
    this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
  }

  async rowDeleted(event: IRowDataEventArgs): Promise<void> {
    await firstValueFrom(this._ds.deleteUsers(event.data.id)).then((res: UserTable[]) => console.log, console.error);
  }

  async rowEditDone(event: IGridEditDoneEventArgs): Promise<void> {
    await firstValueFrom(this._ds.putUsers(event.rowID, event.newValue)).then((res: UserTable[]) => this.getData(), console.error);
  }

}