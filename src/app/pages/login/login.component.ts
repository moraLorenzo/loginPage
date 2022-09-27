import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Message } from 'primeng/api';
import { Router } from '@angular/router';
import { Account } from '../../interfaces/index';
import { firstValueFrom } from 'rxjs';

import * as _ from 'lodash';

/**
 * Setup the decorator and set selector templateURl and styleURLs
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**
   * Prepare Form Group
   */
  loginForm!: FormGroup;

  /**
   * Initialize Account object
   */
  accounts: Account[] = [];

  /**
   * Initialize message object
   */
  msgs: Message[] = [];

  /**
   * Prepare Filtered Array Variable
   */
  filtered_array: Account[] = [];

  /**
   * 
   * @param _ds Data Service Injection
   * @param _fb Formbuilder Injection
   * @param _rt Router Injection
   */
  constructor(private _ds: DataService, private _fb: FormBuilder, private _rt: Router) { }

  /**
   * Initialize the login form and call the get accounts method
   */
  async ngOnInit(): Promise<void> {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
    await this.getAccounts();
  }

  /**
   * Retrieve all accounts
   */
  public async getAccounts() {
    await firstValueFrom(this._ds.processData('accounts'))?.then(res => {
      this.accounts = res;
    });
  }

  /**
   * @ignore
   * Check if entered email and password matches an account row
   */
  submit() {
    try {
      const { email, password } = this.loginForm.value;
      this.filtered_array = _.filter(this.accounts, {"email": email, "password": password});

      if (_.isArray(this.filtered_array) && _.size(this.filtered_array)) {
       
          
        this.addMessages();

        this._rt.navigate(['nav/home/'+ this.filtered_array[0].id]);
      } 
      else {
        throw new Error("Account not found");
      }
    } 
    catch (error: any) {
      alert(error.message);
    }

  }

  /**
   * Sample Comment
   */
  addMessages() {
    this.msgs = [
      { severity: 'success', summary: 'Success', detail: 'Successfully Logged In!' },
    ];
  }
}
