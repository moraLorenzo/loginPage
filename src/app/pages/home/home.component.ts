import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Account } from '../../interfaces/index';

import * as _ from 'lodash';

import { Product } from 'src/app/interfaces/products';

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

  filtered_array: any = [];

  constructor(private _ds: DataService, private route: ActivatedRoute, private _detector: ChangeDetectorRef) { 

  }

  async ngOnInit(): Promise<void> {
    let id = 0;
    let sub = this.route.params.subscribe(params => {
      id = params['id'];
    });

    await this.getAccounts(id);
  }


  public async getAccounts(id: number) {
    await firstValueFrom(this._ds.processData('accounts'))?.then((res: Account[]) => {

      this.accounts = res;

      try {
        this.filtered_array = _.filter(this.accounts, (o:any) =>(o.id === id));
  
        if (_.isArray(this.filtered_array) && _.size(this.filtered_array)) {
          this.name = this.filtered_array[0]['name'];
          this.avatar = this.filtered_array[0]['avatar'];
          this.createdAt = this.filtered_array[0]['createdAt'];
          this.email = this.filtered_array[0]['email'];
        } else {
          throw new Error("Account not found");
        } 
      }catch (error: any) {
        alert(error.message);
      }
    });
  }

}
