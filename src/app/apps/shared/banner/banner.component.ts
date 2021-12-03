import { KeyValuePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Directive, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() {

   }


  ngOnInit(): void {


  }

  onSubmit_Login(user: string, password: string) {
    var users = ["user1", "user2", "user3", "user4", "admin"];
    var passs = ["12345678", "12345678", "12345678", "12345678", "password"];
    if(user == "" && password == ""){
      alert("Complete todos los campos");
    }else{
      for(var i = 0; i < users.length ; i++){
        if(users[i]==user){
          if(passs[i] != password){
            alert("Contrasena incorrecta");
            break;
          }else{
            alert("Seion iniciada");
            break;
          }
        }
      }
    }
  }



}
