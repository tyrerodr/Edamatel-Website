
import { ServiceblogService } from '../blog/blog-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;
  }  


ngOnInit(): void { 
  const url="http://localhost:3001/api/usuarios";
  const perfillista = document.getElementById("perfil");
  this.cargarPerfil(url,perfillista!)
}


cargarPerfil = (url:string,listadatosPerfil:HTMLElement) => {
  fetch(url)
  .then(texto => texto.json())
  .then(usuarios => {
    for(let usuario of usuarios) {
      if(this.getCookie("identificador") == usuario.id_usuario){
      let plantilla = `
          <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"><span class="font-weight-bold">${usuario.usuario}</span><span class="text-black-50">${usuario.correo}</span><span> </span></div>
          </div>
          <div class="col-md-9 border-right">
          <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4 class="text-right">Configuración del Perfil</h4>
              </div>
              <div class="row mt-2">
                  <div class="col-md-6"><label class="labels">Nombre</label><input type="text" class="form-control" id="nombrep" value="${usuario.nombre}" ></div>
                  <div class="col-md-6"><label class="labels">Apellido</label><input type="text" class="form-control" id="apellidop" value="${usuario.apellido}"></div>
              </div>
              <div class="row mt-3">
                  <div class="col-md-12"><label class="labels">Cedula</label><input type="text" class="form-control" id="cedulap" value="${usuario.cedula}" ></div>
                  <div class="col-md-12"><label class="labels">Usuario</label><input type="text" class="form-control" id="usuariop" value="${usuario.usuario}" ></div>  
                  <div class="col-md-12"><label class="labels">Contraseña</label><input type="text" class="form-control" id="contrap" value="${usuario.contraseña}" ></div>                    
                  <div class="col-md-12"><label class="labels">Numero telefonico</label><input type="text" class="form-control" id="telefonop" value="${usuario.telefono}" ></div>
                  <div class="col-md-12"><label class="labels">Correo</label><input type="text" class="form-control" id="correop" value="${usuario.correo}" ></div>
              </div>
              <div class="row mt-3">
                  <div class="col-md-6"><label class="labels">Ciudad</label><input type="text" class="form-control" id="ciudadp" value="${usuario.ciudad}" ></div>
                  <div class="col-md-6"><label class="labels">Dirección</label><input type="text" class="form-control" id="direccionp" value="${usuario.direccion}"></div>
              </div>
              <div class="mt-5 text-center"><button id= "modificarPerfil" class="btn btn-primary profile-button" type="button">Guardar Perfil</button></div>
          </div>
          </div>
                  `
      
          listadatosPerfil.innerHTML += plantilla;
          this.actualizarPerfil(url)
      }
    }
    
  })
}

actualizarPerfil(url:string){
  let validado = true;
  document.getElementById("modificarPerfil")!.addEventListener('click',(e) =>{
    var elements = document.getElementsByClassName('form-control');
    for (var i = 0; i < elements.length; i++) {
      if((<HTMLInputElement>elements[i]).value == ''){
        window.alert("Falta un campo");
        validado = false;
      }
    }
    if(validado){

         fetch(`${url}/${this.getCookie("identificador")}`,{
         method: 'PUT',
         headers:{
           'Content-Type': 'application/json'
      
         },
         body: JSON.stringify({
           id_usuario: this.getCookie("identificador"),
           cedula: (<HTMLInputElement>document.getElementById("cedulap")!).value,
           nombre: (<HTMLInputElement>document.getElementById("nombrep")!).value,
           apellido: (<HTMLInputElement>document.getElementById("apellidop")!).value,
           correo: (<HTMLInputElement>document.getElementById("correop")!).value,
           ciudad: (<HTMLInputElement>document.getElementById("ciudadp")!).value,
           direccion: (<HTMLInputElement>document.getElementById("direccionp")!).value,
           contraseña: (<HTMLInputElement>document.getElementById("contrap")!).value,
           telefono: (<HTMLInputElement>document.getElementById("telefonop")!).value,
           usuario: (<HTMLInputElement>document.getElementById("usuariop")!).value,
           tipo: "cliente"       
         })
         
      })
      .then(res=> res.json())
      .then(() => location.reload());

      document.cookie = "username=" + (<HTMLInputElement>document.getElementById("nombrep")!).value;
      document.getElementById('botonesTipoCuenta')!.innerHTML = `<li class="nav-item ">
          <a id= "perfilCliente" href="/${this.getCookie("tipo")}" class="btn-top btn-danger-gradiant font-14" >
            ${(<HTMLInputElement>document.getElementById("nombrep")!).value}
          </a>
      </li>
      <li class="nav-item ">
          <a id= "logout" href="/" class="btn-top btn-danger-gradiant font-14" >
          logout
          </a>
      </li>`;

      alert("Datos Actualizados")
    }
  });

  
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