import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
  name: string = "";
  useremail: string = "";
  password: string = "";
  passwordType: string = 'password';


  constructor(private http: HttpClient, private _router: Router) { }

  changePassType() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text'
    } else {
      this.passwordType = 'password';
    }
  }

  navigateToLogin() {
    return this._router.navigateByUrl('/')
  }

  save() {
    const bodyData = {
      "name": this.name,
      "qsuser": {
        "useremail": this.useremail,
        "password": this.password
      }
    };
    this.http.post("http://localhost:8081/boot/add", bodyData)
      .subscribe((resultData: any) => {

        console.log();
        alert("Employee Registered Successfully");


      }, err => {
        console.log({ err });

      });



  }
}






