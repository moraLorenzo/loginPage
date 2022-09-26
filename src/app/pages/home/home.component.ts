import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Account } from '../../interfaces/index';

import { Product } from 'src/app/interfaces/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  avatar: string = '';
  name: string = '';

  filtered_array: Account[] = [];

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
    await firstValueFrom(this._ds.processData('accounts/'+ id))?.then((res:Account[]) => {
      this.filtered_array = res;
      let account = Object.entries(res);
      this.name = account[2][1].toString();
    });
  }

}
