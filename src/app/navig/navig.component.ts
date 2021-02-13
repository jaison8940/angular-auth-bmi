import { Component, OnInit } from '@angular/core';
import { freeApiService } from '../services/freeapi.service';
import { Post } from '../classes/post';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navig',
  templateUrl: './navig.component.html',
  styleUrls: ['./navig.component.css']
})
export class NavigComponent implements OnInit {
  g = '';
  title = '';

  bmi = 0;
  def = '';
  constructor(private _freeApiService: freeApiService) {

  }

  ngOnInit(): void {
    // AppComponent.message = '';
    this.g = 'welcome';
  }

  OnInput(value1: any, value2: any,value3: any, value4: any,value5: any, value6: any,value7: any, value8: any,value9: any, value10: any) {
    
   

    var opost = new Post();
    opost.name = 'insert';
    opost.emp_id = parseInt(value1);
    opost.emp_name = value2.toString();
    opost.email = value3.toString();
    opost.csp = value4.toString();
    opost.cert_level = value5.toString();
    opost.cert_name = value6.toString();
    opost.cert_id = value7.toString();
    opost.doc = value8.toString();
    opost.ed = value9.toString();
    opost.validity = parseInt(value10);

    this._freeApiService.ypost(opost)
    .subscribe
    (
      data=>
      {
        console.log(data);
        this.title = data.body;
      }
    );
  }

}
