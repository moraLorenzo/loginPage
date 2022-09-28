import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Account } from '../../interfaces/index';

/**
 * Setup the decorator and set selector templateURl and styleURLs
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

/**
 * sample
 */
export class HomeComponent implements OnInit {

  /**
   * Setup name property to empty string
   */
  name: string = '';

  /**
   * Setup filtered_array of type Account
   */
  filtered_array: Account[] = [];

  /**
   * 
   * @param _ds Inject Dataservice
   * @param route Inject ActivatedRoute to determine the URL params
   * Inject all dependencies
   */
  constructor(private _ds: DataService, private route: ActivatedRoute) { 

  }

  /**
   * Get the id passed through URL
   */
  async ngOnInit(): Promise<void> {
    /**
     * initialize var id to 0
     */
    let id = 0;
    this.route.params.subscribe(params => {
      id = params['id'];
    });

    await this.getAccounts(id);
  }

  /**
   * 
   * @param id sample ID
   * Set account variable as entries of the res JSON data
   */
  public async getAccounts(id: number) {

    await firstValueFrom(this._ds.processData('accounts/'+ id))?.then((res:Account[]) => {
      this.filtered_array = res;
      let account = Object.entries(res);
      this.name = account[2][1].toString();
    });
  }

}
