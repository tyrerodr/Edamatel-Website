import { KeyValuePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Directive, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private http : HttpClient){
     
  }


  ngOnInit(): void {
    
  }

  onSubmit_Login(user: string, password: string) {
    this.http.get('https://run.mocky.io/v3/42ac4610-1565-4691-9fac-f4eae4cf32e8')
    .subscribe(Response => {
 
      // If response comes hideloader() function is called
      // to hide that loader
       
          var li=Object.entries(Response)
          var clientes= li[0][1];
      
          if(user == "" && password == ""){
            alert("Complete todos los campos");
          }else{
            for(let i in clientes){
              
              console.log(clientes[i]["name"]);
              if(clientes[i]["name"]==user){
                if(clientes[i]["pass"] != password){
                  alert("Contrasena incorrecta");
                  
                  break;
                }else{
                  alert("Seion iniciada");
                  break;
                }
              }
            }
          }
    });



  }



}
