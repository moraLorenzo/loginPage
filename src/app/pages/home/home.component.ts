import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Account } from '../../interfaces/index';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import * as _ from 'lodash';

import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { Product } from 'src/app/interfaces/products';

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

  
  // public editSettings: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  public pageSettings!: PageSettingsModel;
  public pageSizes: number[] = [5, 10, 15]; 

  public editSettings!: Object;
  public toolbar!: string[];
  public orderidrules!: Object;
  public customeridrules!: Object;
  public freightrules!: Object;
  public editparams!: Object;

  accounts: Account[] = [];
  products: Product[] = [];

  constructor(private _ds: DataService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {

    // this.data = orderData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
        this.toolbar = ['Add', 'Delete', 'Update', 'Cancel'];
        this.orderidrules = { required: true, number: true };
        this.customeridrules = { required: true };
        this.freightrules =  { required: true };
        this.editparams = { params: { popupHeight: '300px' }};
    this.pageSettings = { pageCount: 10, pageSize: 10, pageSizes: this.pageSizes }; 

    let id = 0;
    let sub = this.route.params.subscribe(params => {
      id = params['id'];
    });

    await this.getAccounts(id);
    await this.getProducts();

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

  clickHandler(args: ClickEventArgs): void {
      console.log(args);


    // if (args.item.id === 'Batchgrid_add') { // Grid_Collapse is control id + '_' + toolbar value.
    //   console.log(args.item.id);
    // }

    // if (args.item.id === 'Batchgrid_delete') {
    //   console.log(args.item.id);
    // }

    // if (args.item.id === 'Batchgrid_update') {
    //   console.log(args.item.id);
    // }
}

  public async getProducts() {
    await firstValueFrom(this._ds.getProduct())?.then((res: Product[]) => {

      this.products = res;
      console.log(res);

    });
  }

}
