import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  disabled: boolean = true;

  value1: string = '';

  value2: string = '';

  value3: string = '';

  value4: string = '';

  value5: string = 'Disabled';

  constructor(private _ds: DataService) { }

  async ngOnInit(): Promise<void> {
    const form = new FormGroup({
      first: new FormControl(),
      last: new FormControl()
    });
    
    console.log(form.value);   // {first: null, last: null}
    
    form.setValue({first: 'Nancy', last: 'Drew'});
    console.log(form.value);   // {first: 'Nancy', last: 'Drew'}

    await this._ds
    .processData()
    .then(
      (dt: any) => {
        console.log(dt);
      },
      (er) => {
        console.log('Invalid Inputs');
      }
    );

  }

}
