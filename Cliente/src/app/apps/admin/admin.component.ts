import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from '../blog/blog-service.service';
import { HttpClient } from '@angular/common/http';
import * as d3 from "d3";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    const listaproductos = document.getElementById('productos') ;
    const contenido = document.getElementById('reporteoproducto') ;
    var listatipos = document.getElementById('tipos');
    const addClientes = document.querySelector('.form');
    const nombreValue = document.getElementById('nombreValue') as HTMLFormElement;
    const precioValue = document.getElementById('precioValue') as HTMLFormElement;
    const stockValue = document.getElementById('stockValue') as HTMLFormElement;
    const linkValue = document.getElementById('linkValue') as HTMLFormElement;
    const marcaValue = document.getElementById('marcaValue') as HTMLFormElement;
    const categoriaValue = document.getElementById('categoriaValue') as HTMLFormElement;
    const checkValue = document.getElementById('estadoValue');
    const botonAct = document.querySelector('.btn.btn-primary');
    const botonAdd = document.querySelector('.btn.btn-success.btn-block');
    const cambiarTitulo = document.getElementById('addoact');
    const cambiarBoton = document.getElementById('addoactb');
    const url="http://localhost:3001/api/articulos";


    this.cargarArticulos(url,listaproductos!);
    listatipos!.addEventListener('click', (e) => {
      
      const target = e.target as HTMLDListElement;

      console.log(target.id);
      
      if (target.id == "1") {
        
        
        contenido!.innerHTML = `          <div class="container"  >
        <div class="row flex-lg-nowrap">
          <div class="col">
            <div class="row flex-lg-nowrap">
              <div class="col mb-3">
                <div class="e-panel card">
                  <div class="card-body">
                    <div class="card-title">
                      <h6 class="mr-2"><span>Clientes</span></h6>
                    </div>
                    <div class="e-table">
                      <div class="table-responsive table-lg mt-3">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                             
                              <th class="max-width">Nombre</th>
                              <th class="sortable">Precio</th>
                              <th>Stock </th>
                              <th>link </th>
                              <th>Categoria </th>
                              <th>Marca</th>
                              <th>Acciones</th>
                            </tr>
                          </thead>
                          <tbody id="productos">
                            
                            
                            
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-3 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="text-center px-xl-3">
                      <button class="btn btn-success btn-block" type="button" data-toggle="modal" onclick="document.getElementById('user-form-modal').style.display='block'">Nuevo producto</button>
                    </div>
                    <hr class="my-3">
                    <div class="e-navlist e-navlist--active-bold">
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <!-- User Form Modal -->
            <div class="modal" role="dialog" tabindex="-1" id="user-form-modal">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="addoact">a</h5>
                    <button type="button" class="close" onclick="document.getElementById('user-form-modal').style.display='none'">
                    <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="py-1">
                      <form class="form" novalidate="">
                        <div class="row">
                          <div class="col">
                            
                            <!-- Nombre y Apellido -->
                            <div class="row">
                              <div class="col">
                                <div class="form-group">
                                  <label>Nombre</label>
                                  <input class="form-control" id="nombreValue" type="text" name="name" >
                                </div>
                              </div>
                              <div class="col">
                                <div class="form-group">
                                  <label>Categoria</label>
                                  <input class="form-control" id="categoriaValue" type="text" name="lastname" >
                                </div>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            
                            <!-- Fecha de nacimiento y estado -->
                            <div class="row">
                              <div class="col">
                                <div class="form-group">
                                  <label>Stock</label>
                                  <input class="form-control" id="stockValue" type="text" name="lastname" >
                                </div>
                              </div>
                              
                              <!-- -->
                              <div class="col">
                                <div class="form-group">
                                  <label>Link de la imagen</label>
                                  <input class="form-control" id="linkValue" type="text" name="lastname" >
                                </div>
                              </div>
                              <!-- -->
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            
                              <div class="row">
                                  <div class="col">
                                    <div class="form-group">
                                      <label>Precio</label>
                                      <input class="form-control" id="precioValue" type="text" name="lastname" >
                                    </div>
                                    
                                  </div>
                                  <div class="col">
                                      <div class="form-group">
                                        <label>Marca</label>
                                        <input class="form-control" id="marcaValue" type="text" name="lastname" >
                                      </div>
                                    </div>
                                </div>
                            <div class="col d-flex justify-content-end">
                              <button class="btn btn-primary" type="submit" id="addoactb">a</button></div>
                            </div>
                          </div>
                        
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>`
      this.cargarArticulos(url,listaproductos!);
      location.reload();
      }
      if (target.id == "2") {
        console.log("tabla");
        contenido!.innerHTML = `
                      <div class="row mt-2 text-center">
                      <div class="col-sm-3">
                          <div class="input-group mt-3">
                            <div class="input-group-prepend">
                              <label class="input-group-text" for="inputGroupSelect01">Clientes</label>
                            </div>
                            <select class="custom-select-md-4" id="inputGroupSelect01">
                              <option value="0">Seleccione el articulo</option>
                              
                            </select>
                          </div>
                      </div>
                  </div>
                  <div class="table-responsive">
                      <div class="table-wrapper">
                          <div class="table-title">
                              <div class="row">
                                  <div class="col-sm-5">
                                      <h2>Facturas antiguas</h2>
                                  </div>
                              </div>
                          </div>
                          <table id="ordenes" class="table table-striped table-hover">
                              <thead>
                                  <tr>
                                      <th>Telefono</th>
                                      <th>Horario</th>
                                      <th>Servicio</th>
                                      <th>Descripcion</th>

                                  </tr>
                              </thead>
                              <tbody id="ordenes_tablas">
                                  
                              </tbody>
                          </table>
                          
                      </div>
                  </div>  
        `

        const listita = document.getElementById('inputGroupSelect01');
        fetch("http://localhost:3001/api/usuarios")
    .then(texto => texto.json())
    .then(usuarios => {
      for(let usuario of usuarios) {
        if (usuario.usuario!="admin"){
        let plantilla = `<option id="usuario-${usuario.id_usuario}" class=${usuario.telefono} value=${usuario.id_usuario}  >${usuario.nombre} ${usuario.apellido}</option>
             
        `
        
        listita!.innerHTML += plantilla;
        


        console.log("xd")
        ;}
  
      }
   
    })

    var selector=document.getElementById("inputGroupSelect01") as HTMLSelectElement;
    selector!.addEventListener('click',(e)=>{
      
      if(selector.value!="0"){
      document.getElementById("ordenes_tablas")!.innerHTML = "";
           let target= e.target as HTMLOptionElement;
      
       fetch("http://localhost:3002/solicitudes/"+selector.value)
       .then(texto => texto.json())
       .then(solicitudes => {
         for(let solicitud of solicitudes) {
       
           let plantilla = `
             <tr>        
                       <td class="text-nowrap align-middle"><span class="num">${selector.options[selector.selectedIndex].className}</span></td>
                       <td class="text-nowrap align-middle"><span class="hor">${solicitud.horario_solicitado}</span></td>         
                       <td class="text-nowrap align-middle"><span class="serv">${solicitud.servicio}</span></td>
                       <td class="text-nowrap align-middle"><span class="desc">${solicitud.descripción}</span></td>


                     </tr>
           `
           
           document.getElementById("ordenes_tablas")!.innerHTML += plantilla;
           console.log("xd");
     
         }
      
       }) 
       selector.value="0";
      }
      })

    

      }
    });


 //añadir
 botonAdd!.addEventListener('click',()=>{
  cambiarTitulo!.textContent='Crear Producto';
  cambiarBoton!.textContent='Guardar';
  nombreValue.value='';
  precioValue.value='';
  stockValue.value='';
  linkValue.value='';
  marcaValue.value='';
  categoriaValue.value='';
  })
  addClientes!.addEventListener('submit',(e)=>{
    if(cambiarBoton!.textContent=='Guardar'){
      if(nombreValue.value==''||precioValue.value==''||stockValue.value==''||categoriaValue.value==''||linkValue.value==''||marcaValue.value==''){
        window.alert("nosepuede");
      }
      else{
        e.preventDefault();
        fetch(url,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'

        },
        
        body: JSON.stringify({
          nombre: nombreValue.value,
          precio: precioValue.value,
          stock: stockValue.value,
          categoria: categoriaValue.value,
          link: linkValue.value,
          marca: marcaValue.value,
          id_administrador: 1
        })
        
      })
      .then(res => res.json()).then(() => location.reload());
      /*.then(document.getElementById('clientes').innerHTML =null)
      .then(() => location.reload());history.replaceState({}, null, "");*/
  }}
  })



    //borrar y actualizar
    listaproductos!.addEventListener('click',(e)=>{
      let target= e.target as HTMLTableElement
	let botonEditar =target.id == 'editar';
	let botonBorrar = target.id == 'borrar';
	let botonBorrar2 = target.id == 'borrar2';
	let id="";
	if(botonBorrar ){
		id=target.parentElement!.dataset.id!;
		fetch(`${url}/${id}`,{
			method: 'DELETE',
		})
		.then(res=> res.json())
		.then(() => location.reload());
	}
	if( botonBorrar2){
		id=target.parentElement!.parentElement!.dataset.id!;
		fetch(`${url}/${id}`,{
			method: 'DELETE',
		})
		.then(res=> res.json())
		.then(() => location.reload());
	}

	if( botonEditar){
		console.log(cambiarTitulo!.textContent);
		cambiarTitulo!.textContent='Actualizar Producto';
		cambiarBoton!.textContent='Actualizar';
		


    id=target.parentElement!.dataset.id!;
    console.log("id actualizar");
    console.log(id);
		const parent = target.parentElement!.parentElement!.parentElement;
		
		let nom = parent!.querySelector('.nom')!.textContent;
		let prec = parent!.querySelector('.prec')!.textContent;
		let stock = parent!.querySelector('.stock')!.textContent;
		let link = parent!.querySelector('.link')! as HTMLImageElement;
    let cat = parent!.querySelector('.cat')!.textContent;
    let marc = parent!.querySelector('.marc')!.textContent;
	 
		nombreValue.value = nom;
		precioValue.value = prec;
		stockValue.value = stock;
		categoriaValue.value = cat;
    linkValue.value = link.src;
    marcaValue.value = marc;

	}
	botonAct!.addEventListener('click',() =>{
		if(cambiarBoton!.textContent=='Actualizar'){
			if(nombreValue.value==''||precioValue.value==''||stockValue.value==''||categoriaValue.value==''||linkValue.value==''||marcaValue.value==''){
				window.alert("nosepuede");
			}
			else{
				fetch(`${url}/${id}`,{
					method: 'PUT',
					headers:{
						'Content-Type': 'application/json'
				
					},

					
					body: JSON.stringify({
						nombre: nombreValue.value,
						precio: precioValue.value,
						stock: stockValue.value,
            categoria: categoriaValue.value,
            link: linkValue.value,
            marca: marcaValue.value,
            id_administrador: 1
					})
				})
				.then(res=> res.json())
				.then(() => location.reload());
			}
		}
	})


})
   

  }


  cargarArticulos = (url:string,listaproductos:HTMLElement) => {
    fetch(url)
    .then(texto => texto.json())
    .then(articulos => {
      for(let articulo of articulos) {
    
        let plantilla = `
          <tr>        
                    <td class="text-nowrap align-middle"><span class="nom">${articulo.nombre}</span></td>
                    <td class="text-nowrap align-middle"><span class="prec">${articulo.precio}</span></td>
                    <td class="text-nowrap align-middle"><span class="stock">${articulo.stock}</span></td>
                    <td class="text-nowrap align-middle"><img class="link" src=${articulo.link} alt="HTML5 Icon" width="128" height="128"></td>
                    <td class="text-nowrap align-middle"><span class="cat">${articulo.categoria}</span></td>
                    <td class="text-nowrap align-middle"><span class="marc">${articulo.marca}</span></td>
                    <td class="text-center align-middle">
                      <div class="btn-group align-top" data-id=${articulo.id_articulo}>
                        <button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal" id="editar" onclick="document.getElementById('user-form-modal').style.display='block'">Edit</button>
                        <button class="btn btn-sm btn-outline-secondary badge" id="borrar" type="button" ><i class="fa fa-trash" id="borrar2"></i></button>
                      </div>
                    </td>
                  </tr>
        `
        
        listaproductos.innerHTML += plantilla;
        console.log("xd");
  
      }
   
    })
    
  
  }
}
