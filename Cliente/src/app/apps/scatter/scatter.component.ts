import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.css']
})
export class ScatterComponent implements OnInit {
  private data = [
    {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
    {"Framework": "React", "Stars": "150793", "Released": "2013"},
    {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
    {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
    {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
  ];
  private svg!: d3.Selection<SVGGElement, any, HTMLElement, any>;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.generarData();
  }

  private generarData(){
    fetch('http://localhost:3002/lista')
    .then(texto => texto.json())
    .then(solicitudes => {
      
      console.log(solicitudes)


      var file ={};
      var data:any = [];
      let listaSolicitudes:any = [];
      for(let solicitud of solicitudes) {
        listaSolicitudes.push(solicitud.servicio)
        var hora = solicitud.horario_solicitado.substring(0,2)
        console.log(hora)
        file = {servicio: solicitud.servicio, cantidadServicio: 1, fechaServicio: hora};
        data.push(file);
      }

    
      console.log(listaSolicitudes)
      const miCarritoSinDuplicados = data.reduce((acumulador: { servicio: any; cantidadServicio: any; }[], valorActual: { servicio: any; cantidadServicio: any; }) => {
        const elementoYaExiste = acumulador.find((elemento: { servicio: any; }) => elemento.servicio === valorActual.servicio);
        if (elementoYaExiste) {
          return acumulador.map((elemento: { servicio: any; cantidadServicio: any; }) => {
            if (elemento.servicio === valorActual.servicio) {
              return {
                ...elemento,
                cantidadServicio: elemento.cantidadServicio + valorActual.cantidadServicio
              }
            }
            return elemento;
          });
        }
        return [...acumulador, valorActual];
      }, []);
      
      console.log(miCarritoSinDuplicados);
      data = miCarritoSinDuplicados;

      this.drawPlot(data); 
  });
  }

  private createSvg(): void {
    this.svg = d3.select("figure#scatter")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}

private drawPlot(data: any[]): void{
 


  // Add X axis

  const x = d3.scaleTime()
    .domain([1, 24])
    .range([ 0, this.width ]);
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

  
  // Add Y axis
  const y = d3.scaleLinear()
  .domain([0, 5])
  .range([ this.height, 0]);
  this.svg.append("g")
  .call(d3.axisLeft(y));

  // Add dots
  const dots = this.svg.append('g');
  dots.selectAll("dot")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", d => x(d.fechaServicio))
  .attr("cy", d => y(d.cantidadServicio))
  .attr("r", 7)
  .style("opacity", .5)
  .style("fill", "#69b3a2");

  // Add labels
  dots.selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .text(d => d.servicio)
  .attr("x", d => x(d.fechaServicio))
  .attr("y", d => y(d.cantidadServicio))

 
}

}
