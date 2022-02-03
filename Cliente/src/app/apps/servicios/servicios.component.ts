import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from '../blog/blog-service.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  

  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;
    
  }

  ngOnInit(): void {
    
  }

  asignarbuton(){
    const btnEnvio = document.getElementById("enviarFormulario");
    btnEnvio?.addEventListener("click",(e) => {
      e.preventDefault();
      const nombre = document.getElementsByName("inputNombre");
      const correo = document.getElementsByName("inputCorreo");
      const empresa = document.getElementsByName("inputEmpresa");
      const telefono = document.getElementsByName("inputTelefono");
      window.location.href=`mailto:tyrerodr@espol.edu.ec?
      subject=envioDesdeFormulario&
      body=Nombre%3A%20${nombre}%0AEmpresa%3A%20${empresa}%0ATelefono%3A%20${telefono}%0Acorreo%3A%20${correo}`

    });
  
  }

}
