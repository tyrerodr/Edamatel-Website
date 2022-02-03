import { KeyValuePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Directive, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createEnumDeclaration } from 'typescript';

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
    this.asignarLogin();
    if (document.cookie != "") {
      console.log(document.cookie);
      document.getElementById('botonesTipoCuenta')!.innerHTML = `<li class="nav-item ">
                  <a id= "perfilCliente" href="/${this.getCookie("tipo")}" class="btn-top btn-danger-gradiant font-14" >
                    ${this.getCookie("username")}
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
      document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "tipo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      location.reload();
    });
  }

  asignarLogin(){
    const correoValue = document.getElementById('correoValue') as HTMLFormElement;
    const usuarioValue = document.getElementById('usuarioValue') as HTMLFormElement;
    const contraseñaValue = document.getElementById('contraseñaValue') as HTMLFormElement;
    const contraseñaValidaValue = document.getElementById('contraseñaValidaValue') as HTMLFormElement;
    const nombreusuarioValue = document.getElementById('nombreusuarioValue') as HTMLFormElement;
    const apellidoValue = document.getElementById('apellidoValue') as HTMLFormElement;
    const fechaNacimientoValue = document.getElementById('fechaNacimientoValue') as HTMLFormElement;
    const cedulaValue = document.getElementById('cedulaValue') as HTMLFormElement;
    const telefonoValue = document.getElementById('telefonoValue') as HTMLFormElement;
    const ciudadValue = document.getElementById('ciudadValue') as HTMLFormElement;
    const direccionValue = document.getElementById('direccionValue') as HTMLFormElement;
    const url="http://localhost:3001/api/usuarios";

    document.getElementById('login_register')!.addEventListener('submit', event => {
    // submit event detected
    console.log("hola")
      if(direccionValue.value==''||ciudadValue.value==''||telefonoValue.value==''||cedulaValue.value==''||nombreusuarioValue.value==''||correoValue.value==''||usuarioValue.value==''||contraseñaValue.value==''
      ||contraseñaValidaValue.value==''||apellidoValue.value==''||fechaNacimientoValue.value==''){
        window.alert("Llenar todos los datos");
      }
      else if(contraseñaValue.value != contraseñaValidaValue.value){
        window.alert("Las contraseñas no son iguales");
      }
      else{
        event.preventDefault();
        
        fetch(url,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'

        },
        
        body: JSON.stringify({
          cedula: cedulaValue.value,
          nombre: nombreusuarioValue.value,
          apellido: apellidoValue.value,
          correo: correoValue.value,
          ciudad: ciudadValue.value,
          direccion: direccionValue.value,
          contraseña: contraseñaValidaValue.value,
          telefono: telefonoValue.value,
          usuario: usuarioValue.value,
          tipo: "cliente"
          
        })
      })
      .then(res => res.json()).then(() => location.reload());
      
  }
  });
  }


  onSubmit_Login(user: string, password: string) {
    fetch('http://localhost:3001/api/usuarios')
    .then(texto => texto.json())
    .then(datos => {
      for (let usuario of datos) {
        console.log(usuario)
        // If response comes hideloader() function is called
        // to hide that loader
        if (user == "" && password == "") {
          alert("Complete todos los campos");
        } else {
            if (usuario.usuario == user) {
              if (usuario.contraseña != password) {
                alert("Contrasena incorrecta");
                break;
              } else {
                document.getElementById("id_login")!.style.display = "none";   
                alert("Seion iniciada");
                document.cookie = "username=" + usuario.nombre;
                document.cookie = "tipo=" + usuario.tipo;
                document.cookie = "id=" + usuario.id_usuario;
                document.getElementById('botonesTipoCuenta')!.innerHTML = `<li class="nav-item ">
                  <a id= "perfilCliente" href="/admin" class="btn-top btn-danger-gradiant font-14" >
                    ${usuario.usuario}
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
