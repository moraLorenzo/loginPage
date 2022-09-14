import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Account } from '../../interfaces/index';

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

      let shareInfoLen = Object.keys(this.accounts[0]).length;

      for (let i = 0; i < shareInfoLen; i++) {
        if (id == Number(this.accounts[i].id)) {
          this.avatar = this.accounts[i].avatar;
          this.email = this.accounts[i].email;
          this.createdAt = this.accounts[i].createdAt;
          this.name = this.accounts[i].name;
          break;
        }
      }

    }, err => {

      console.log(err);

    });
  }

}
