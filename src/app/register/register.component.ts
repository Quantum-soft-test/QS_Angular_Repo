import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {

  name: string = "";
  useremail: string = "";
  password: string = "";

  constructor(private http: HttpClient) {

  }
  save() {

    let bodyData = {
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






