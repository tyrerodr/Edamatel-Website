import { KeyValuePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Directive, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private http: HttpClient) {

  }


  ngOnInit(): void {
    
    console.log(document.cookie);

    if (document.cookie != "") {
      console.log(document.cookie);
      document.getElementById('botonesTipoCuenta')!.innerHTML = `<li class="nav-item ">
                  <a id= "perfilCliente" href="/admin" class="btn-top btn-danger-gradiant font-14" >
                    ${ this.getCookie("username")}
                  </a>
              </li>
              <li class="nav-item ">
                  <a id= "logout" href="/" class="btn-top btn-danger-gradiant font-14" >
                   logout
                  </a>
              </li>`;
              this.asignarLogout();

    };
  }

  asignarLogout(){
    
    document.getElementById('logout')!.addEventListener('click', function () {
      console.log("xd");
      document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      location.reload();
    });
  }

  onSubmit_Login(user: string, password: string) {
    this.http.get('https://run.mocky.io/v3/42ac4610-1565-4691-9fac-f4eae4cf32e8')
      .subscribe(Response => {

        // If response comes hideloader() function is called
        // to hide that loader

        var li = Object.entries(Response)
        var clientes = li[0][1];

        if (user == "" && password == "") {
          alert("Complete todos los campos");
        } else {
          for (let i in clientes) {

            console.log(clientes[i]["name"]);
            if (clientes[i]["name"] == user) {
              if (clientes[i]["pass"] != password) {
                alert("Contrasena incorrecta");

                break;
              } else {
                document.getElementById("id_login")!.style.display = "none";   
                alert("Seion iniciada");
                document.cookie = "username=" + clientes[i]["name"];
                document.getElementById('botonesTipoCuenta')!.innerHTML = `<li class="nav-item ">
                  <a id= "perfilCliente" href="/perfil" class="btn-top btn-danger-gradiant font-14" >
                    ${clientes[i]["name"]}
                  </a>
              </li>
              <li class="nav-item ">
                  <a id= "logout" href="/" class="btn-top btn-danger-gradiant font-14" >
                   logout
                  </a>
              </li>`;
              this.asignarLogout();
                break;
              }
            }
          }
        }
      }
      
      );

  }

  getCookie(cname: String) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

}
