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

import { IgxLegendComponent, IgxDataChartComponent, IgxCategoryYAxisComponent, IgxNumericXAxisComponent, IgxCategoryHighlightLayerComponent, IgxBarSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';

import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './data';
import { IgxItemLegendComponent, IgxPieChartComponent } from 'igniteui-angular-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  avatar: string = '';
  email: string = '';
  createdAt: string = '';
  name: string = '';

  accounts: Account[] = [];
  products: Product[] = [];

  public searchText: string = '';
  public caseSensitive: boolean = false;
  public exactMatch: boolean = false;
  usersTable: UserTable[] = [];
  @ViewChild('grid1', { static: true }) public grid!: IgxGridComponent;

  
  public piedata!: Object[];
  public legendSettings!: Object;

  constructor(private _ds: DataService, private route: ActivatedRoute, private _detector: ChangeDetectorRef) { 

  }

  async ngOnInit(): Promise<void> {
   

    let id = 0;
    let sub = this.route.params.subscribe(params => {
      id = params['id'];
    });

    await this.getAccounts(id);
    await this.getData();

        this.piedata = [
      { x: 'Jan', y: 3, text: 'Jan: 3' }, { x: 'Feb', y: 3.5, text: 'Feb: 3.5' },
      { x: 'Mar', y: 7, text: 'Mar: 7' }, { x: 'Apr', y: 13.5, text: 'Apr: 13.5' },
      { x: 'May', y: 19, text: 'May: 19' }, { x: 'Jun', y: 23.5, text: 'Jun: 23.5' },
      { x: 'Jul', y: 26, text: 'Jul: 26' }, { x: 'Aug', y: 25, text: 'Aug: 25' },
      { x: 'Sep', y: 21, text: 'Sep: 21' }, { x: 'Oct', y: 15, text: 'Oct: 15' },
      { x: 'Nov', y: 9, text: 'Nov: 9' }, { x: 'Dec', y: 3.5, text: 'Dec: 3.5' }];

      this.legendSettings = {
        visible: false
      };

  }


  

  async getData(): Promise<void> {
    await firstValueFrom(this._ds.getUsers()).then((res: UserTable[]) => (this.usersTable = res), console.error);
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


  public async getAccounts(id: number) {
    await firstValueFrom(this._ds.processData('accounts'))?.then((res: Account[]) => {

      this.accounts = res;

      for (let i = 0; i < _.keys(this.accounts).length; i++) {
        if (id == Number(this.accounts[i].id)) {
          this.avatar = this.accounts[i].avatar;
          this.email = this.accounts[i].email;
          this.createdAt = this.accounts[i].createdAt;
          this.name = this.accounts[i].name;
          break;
        }
      }

      //toFix
      // _.mapValues(this.accounts, function(o) { console.log(o); });

    });
  }

  // public async getProducts() {
  //   await firstValueFrom(this._ds.getProduct())?.then((res: Product[]) => {

  //     this.products = res;
  //     console.log(res);

  //   });
  // }
}
