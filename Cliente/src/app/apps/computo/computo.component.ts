import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from '../blog/blog-service.service';

@Component({
  selector: 'app-computo',
  templateUrl: './computo.component.html',
  styleUrls: ['./computo.component.css']
})
export class ComputoComponent implements OnInit  {
  

  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;
    
  }

  ngOnInit(): void {
    const url="http://localhost:3001/api/articulos";
    const listaproductos = document.getElementById('productos') ;
    listaproductos!.innerHTML = "";
    this.cargarArticulos(url,listaproductos!);
    
  }

  cargarArticulos = (url:string,listaproductos:HTMLElement) => {
    fetch(url)
    .then(texto => texto.json())
    .then(articulos => {
      for(let articulo of articulos) {
    
        let plantilla = `

    <div class="card" style="width: 18rem;" >
    <img class="card-img-top" src="${articulo.link}" alt="Card image cap"  height=200px>
    <div class="card-body">
      <h5 class="card-title">${articulo.nombre}</h5>
      <p class="card-text">marca: ${articulo.marca}.</p>
      <p class="card-text">stock: ${articulo.stock}</p>
      <p>cantidad al carrito:<input type="text" id="cantidad-${articulo.id_articulo} data-id=${articulo.id_articulo}" ></p>
      <a href="#" class="btn btn-primary" data-id=${articulo.id_articulo} data-toggle="modal" onclick="document.getElementById('carrito').style.display='block'"><i class="fa fa-shopping-cart"></i>Añadir al carro</a>
    </div>
  </div>


        `
        
        listaproductos.innerHTML += plantilla;
        console.log("xd");
  
      }
   
    })
    
  
  }

}
