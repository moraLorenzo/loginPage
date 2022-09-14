import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Message,MessageService} from 'primeng/api';
import { Router } from '@angular/router';
import { Account } from '../../interfaces/index';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  accounts: Account[] = [];
  msgs: Message[] = [];

  constructor(private _ds: DataService,private _fb: FormBuilder,private _rt: Router) { }

  async ngOnInit(): Promise<void> {

    //Initialize the formgroup
    this.loginForm = this._fb.group({
      email: ['', [Validators.required,Validators.pattern("^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([A-Za-z]{2,6}(?:\\.[A-Za-z]{2,6})?)$")]],
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
   //Get the number if JSON objects
    let shareInfoLen = Object.keys(this.accounts[0]).length;

    for(let i = 0; i < shareInfoLen; i++){
      if(this.loginForm.controls['email'].value == this.accounts[i].email && this.loginForm.controls['password'].value == this.accounts[i].password){
        this.addMessages();
        
        setTimeout(() => {
           this._rt.navigate(['nav/home/' + this.accounts[i].id]);
        }, 2000);
       
        break;
      }
    }
   }

   addMessages() {
    this.msgs = [
        {severity:'success', summary:'Success', detail:'Successfully Logged In!'},
    ];
}

}
