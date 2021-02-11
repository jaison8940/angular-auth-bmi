import { Component } from '@angular/core';
// import { BADFAMILY } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  bmi = 0;
  def = '';
  OnInput(value1: any, value2: any) {
    
    this.bmi = value2/((value1/100)*(value1/100));
    if(this.bmi < 18.5)
    {
      this.title = `Under weight: ${this.bmi}`;

      this.def = 'alert alert-danger';

    }
    else if(this.bmi >= 18.5 && this.bmi < 25)
    {
      this.title = `Normal ${this.bmi}`;  

      this.def = 'alert alert-success';
      
    }
    else if(this.bmi >= 25 && this.bmi < 30)
    {
      this.title = `Over weight: ${this.bmi}`;

      this.def = 'alert alert-danger';

    }
    else if(this.bmi >= 30)
    {
      this.title = `Obese: ${this.bmi}`;

      this.def = 'alert alert-danger';

    }
    else
    {
      this.def = 'alert alert-danger';
    }
    
   }
}
