import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
// import { BADFAMILY } from 'dns';
import { Comments } from './classes/comments';
import { Post } from './classes/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Welcome to Reminder and BMI App using Angular!';
  bmi = 0;
  def = '';

  constructor(private _freeApiService: freeApiService) {

  }
  lstcomments:Comments[] | undefined;

  ngOnInit(){
    this._freeApiService.getcomments()
    .subscribe
    (
      data=>
      {
        this.lstcomments = data;
      }

    );


    


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

      }
    );

    
   }
}
