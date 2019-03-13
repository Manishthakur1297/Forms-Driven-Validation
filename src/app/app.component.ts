import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  form;

  ngOnInit(){
    this.form = new FormGroup
    (
      {
        // fname: new FormControl("",Validators.required),
        fname: new FormControl("", Validators.compose
        (
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(10),
            Validators.pattern('[\\w\\-\\s\\/]+')
          ]
        )),

        lname: new FormControl("",this.textValidator),
        language: new FormControl("")
      });
  }


  textValidator(control)
  {
      if(control.value.length<6)
      {
        return {"lname":""};
      }
  }

  clickSubmit(userForm)
  {
    console.log(userForm);
    console.log(userForm.fname);
    console.log(userForm.lname);
    console.log(userForm.language);
  }

}
