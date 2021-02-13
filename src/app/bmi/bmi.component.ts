import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {

  title = '';
  bmi = 0;
  def = '';

  constructor() { }

  ngOnInit(): void {
  }

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
