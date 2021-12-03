let peticion = () => {
      fetch("src\app\apps\marcas\marcas.json")
        .then(response => response.json())
        .then(data => {
  
        for(let item of data){
            console.log(item)
            let nombre = item.nombre;
            let image = item.image;
    
            let plantilla = `
            <div class="col-lg-2 col-md-2 col-sm-3 col-xs-6  js_brand_pms thumbnail">
            <div class="brands ">
            <img alt="{{nombre}}" class="{{image}}">
            </div>
            <div class="text-center text-brand text-black">{{nombre}}</div>
            <span style="color: white;height: 30px;display: flex;"></span>
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
  

    