import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from '../blog/blog-service.service';


declare var require: any;
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent {
  

  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;
    
  }
  ngOnInit(): void {
     
    const nombreValue = document.getElementById('inputNombre') as HTMLFormElement;
    const empresaValue = document.getElementById('inputEmpresa') as HTMLFormElement;
    const telefonoValue = document.getElementById('inputTelefono') as HTMLFormElement;
    const correoValue = document.getElementById('inputCorreo') as HTMLFormElement;
    const servicioValue = document.getElementById('inputServicio') as HTMLFormElement;
    const descripcionValue = document.getElementById('inputDescripcion') as HTMLFormElement;
    const ubicacionValue = document.getElementById('inputUbicacion') as HTMLFormElement;
    const correoButton = document.getElementById('enviarFormulario');
    
    correoButton!.addEventListener('click', () => {
      fetch("http://localhost:3001/hola",{
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json'
      
        },

        
        body: JSON.stringify({
          nombre: nombreValue.value,
          empresa: empresaValue.value,
          telefono: telefonoValue.value,
          correo: correoValue.value,
          servicio: servicioValue.value,
          descripcion: descripcionValue.value,
          ubicacion: ubicacionValue.value
        })
      })
      .then(res=> res.json())
      .then(() => location.reload());

      

    });


}
}
