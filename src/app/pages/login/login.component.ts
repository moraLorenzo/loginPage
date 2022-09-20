import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Message, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Account } from '../../interfaces/index';
import { firstValueFrom } from 'rxjs';

import * as _ from 'lodash';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  accounts: Account[] = [];
  msgs: Message[] = [];

  filtered_array: any = [];

  constructor(private _ds: DataService, private _fb: FormBuilder, private _rt: Router) { }

  async ngOnInit(): Promise<void> {

    //Initialize the formgroup
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })

    //receive the Accounts data for reference from MockAPI
    await this.getAccounts();


  }

  public async getAccounts() {
    await firstValueFrom(this._ds.processData('accounts'))?.then(res => {
      this.accounts = res;
    });
  }

  submit() {
    try {
      const { email, password } = this.loginForm.value;
      this.filtered_array = _.filter(this.accounts, {"email": email, "password": password});

        console.log(this.filtered_array);

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

  addMessages() {
    this.msgs = [
      { severity: 'success', summary: 'Success', detail: 'Successfully Logged In!' },
    ];
  }

}
