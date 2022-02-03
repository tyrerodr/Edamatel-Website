import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from '../blog/blog-service.service';


declare var require: any;
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
  

  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;
    
  }
  ngOnInit(): void {
     
    const horarioValue = document.getElementById('horario') as HTMLFormElement;
    const servicioValue = document.getElementById('servicio') as HTMLFormElement;
    const descripcionValue = document.getElementById('descripcion') as HTMLFormElement;

    const correoButton = document.getElementById('enviarFormulario');
    
    correoButton!.addEventListener('click', () => {
      var num=this.getCookie("identificador");
      if(num!="1"){
      fetch("http://localhost:3001/api/usuarios/"+num)
    .then(texto => texto.json())
    .then(usuario => {
      console.log(usuario[0]);
      fetch("http://localhost:3001/hola",{
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json'
      
        },
       
        
        body: JSON.stringify({
          nombre: usuario[0].nombre,
          apellido: usuario[0].apellido,
          telefono:usuario[0].telefono,
          horario: horarioValue.value,
          servicio: servicioValue.value,
          descripción: descripcionValue.value,
          
        })
      })
      .then(res=> res.json())
      
      .then(() => {
        fetch("http://localhost:3002/crearsolicitud",{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
      
        },

        
        body: JSON.stringify({
          horario_solicitado: horarioValue.value,
          servicio: servicioValue.value,
          descripción: descripcionValue.value,
          id_cliente: parseInt(num)

        })
      }).catch(err=>console.log(err))
        
        
        location.reload()});

      

    });
  
  }
  }

)


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
