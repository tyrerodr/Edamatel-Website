import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from '../blog/blog-service.service';

@Component({
  selector: 'app-computo',
  templateUrl: './computo.component.html',
  styleUrls: ['./computo.component.css']
})
export class ComputoComponent implements OnInit {


  constructor(public service: ServiceblogService) {
    this.service.showEdit = false;

  }

  ngOnInit(): void {
    const url = "http://localhost:3001/api/articulos";
    const listaproductos = document.getElementById('productos');
    const listacarrito = document.getElementById('productosCarrito');


    listaproductos!.innerHTML = "";
    const carritoButton = document.getElementById('carritoButton');
    this.cargarArticulos(url, listaproductos!);
    console.log(this.getCookie("id"));
    carritoButton!.addEventListener('click', () => {
      this.cargarCarrito("http://localhost:3001/api/carrito", listacarrito!, this.getCookie("id"));

    });





  }

  cargarArticulos = (url: string, listaproductos: HTMLElement) => {
    fetch(url)
      .then(texto => texto.json())
      .then(articulos => {
        for (let articulo of articulos) {

          let plantilla = `

    <div class="card" style="width: 18rem;" >
    <img class="card-img-top" src="${articulo.link}" alt="Card image cap"  height=200px>
    <div class="card-body">
      <h5 class="card-title">${articulo.nombre}</h5>
      <p class="card-text">marca: ${articulo.marca}.</p>
      <p class="card-text" id="stock-${articulo.id_articulo}" data-id=${articulo.stock}>stock: ${articulo.stock}</p>
      <p>cantidad al carrito:<input type="text" id="cantidad-${articulo.id_articulo}" data-id=${articulo.id_articulo}"></p>
      <a  class="btn btn-primary" id="articulo-${articulo.id_articulo}" data-id=${articulo.id_articulo} data-toggle="modal" ><i class="fa fa-shopping-cart"></i>Añadir al carro</a>
    </div>
  </div>


        `


          listaproductos.innerHTML += plantilla;

          const boton = document.getElementById('articulo-' + articulo.id_articulo);
          const cantidad = document.getElementById('cantidad-' + articulo.id_articulo) as HTMLInputElement;
          const stock = document.getElementById('stock-' + articulo.id_articulo);
          
          boton!.addEventListener('click', (e) => {
            const target = e.target as HTMLDListElement;
            console.log(target.dataset.id);
            console.log(cantidad.value);
            console.log(stock!.dataset.id);
            console.log(this.getCookie("id"));
            document.getElementById('productosCarrito');
            if (parseInt(cantidad.value) <= parseInt(stock!.dataset.id!)) {


              fetch("http://localhost:3001/api/carrito", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'

                },

                body: JSON.stringify({
                  cantidad: parseInt(cantidad.value),
                  descuento: 0,
                  id_articulo: articulo.id_articulo,
                  id_usuario: parseInt(this.getCookie("id"))
                })

              }).then(res => {
                console.log("res"+res.ok)
                if (res.ok == false) {
                  alert("Producto ya en el carro")
                }
              });


              console.log("es menor o igual")

            };

          });


          console.log("xd");

        }

      })


  }


  cargarCarrito = (url: string, listacarrito: HTMLElement, usuario: string) => {
    listacarrito.innerHTML = "";
    fetch(url + '/' + usuario)
      .then(texto => texto.json())
      .then(articulos => {
        for (let carritoarticulo of articulos) {
          ;


          fetch('http://localhost:3001/api/articulo/' + carritoarticulo.id_articulo)
            .then(texto => texto.json())
            .then(articulo => {
              console.log(carritoarticulo);

              let plantilla = `
          <tr>        
                    <td class="text-nowrap align-middle"><span class="nom">${articulo[0].nombre}</span></td>
                    <td class="text-nowrap align-middle"><img class="link" src=${articulo[0].link} alt="HTML5 Icon" width="128" height="128"></td>
                    <td class="text-nowrap align-middle"><span class="prec">${articulo[0].precio}</span></td>
                    <td class="text-nowrap align-middle"><span class="stock">${carritoarticulo.cantidad}</span></td>
                    <td class="text-center align-middle">
                      <div class="btn-group align-top" data-id=${articulo[0].id_articulo}>
                        <button class="btn btn-sm btn-outline-secondary badge" id="borrar" type="button" ><i class="fa fa-trash" id="borrar2"></i></button>
                      </div>
                    </td>
                  </tr>
        `

              listacarrito.innerHTML += plantilla;
              //borrar y actualizar
              listacarrito!.addEventListener('click', (e) => {
                let target = e.target as HTMLTableElement

                let botonBorrar = target.id == 'borrar';
                let botonBorrar2 = target.id == 'borrar2';
                let id = "";
                if (botonBorrar) {
                  id = target.parentElement!.dataset.id!;
                  fetch(`${url}/${id}/${usuario}`, {
                    method: 'DELETE',
                  })
                    .then(res => res.json())
                    .then(() => location.reload());
                }
                if (botonBorrar2) {
                  id = target.parentElement!.parentElement!.dataset.id!;
                  fetch(`${url}/${id}/${usuario}`, {
                    method: 'DELETE',
                  })
                    .then(res => res.json())
                    .then(() => location.reload());
                }



              })


            })

        }

      })


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
