

let peticion = () => {
      fetch("./listamarcas.json")
        .then(response => response.json())
        .then(data => {
  
        for(let item of data){
            console.log(item)
            let nombre = item.nombre;
            let image = item.image;
    
            let plantilla = `
            <div class="single-products">
            <div class="productinfo text-center">
            <img class="h-25 w-25" src="{{image}}"  alt="" />
            <h2>{{nombre}}</h2>
            <p>{{nombre}}</p>
          </div>
        </div>`
    
            plantilla = plantilla.replaceAll("{{nombre}}",nombre); 
            plantilla = plantilla.replaceAll("{{image}}",image);

            document.getElementById('list').innerHTML += plantilla;
      }
      })
    
      .catch(console.error);
    }


document.addEventListener("DOMContentLoaded", function (event) {
      peticion();
    })
  