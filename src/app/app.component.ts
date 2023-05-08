import { Component } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){};
  title = 'formvalidation';
  topic:string='FORM VALIDATION';
  fullName!:string;
  email!:string;
  address!:string;

userArray:Array<any>=[];

  //addAUser(){
//this.userArray.push({
 // 'name':this.name,
//  'email':this.email,
 // 'address':this.address
//});
//  }

  deleteUser(index:any){
 this.userArray.splice(index,1);
  }


  onSubmit(f:NgForm){
console.log(f);
  }

  getValue(f:FormControl<any>){
    console.log(f);
  }
}
