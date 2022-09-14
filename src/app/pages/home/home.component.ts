import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Account } from '../../interfaces/index';

import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  avatar: string = '';
  email: string = '';
  createdAt: string = '';
  name: string = '';
  

  accounts: Account[] = [];

  constructor(private _ds: DataService, private route: ActivatedRoute) { }

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

}
