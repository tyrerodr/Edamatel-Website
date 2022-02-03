import { Component, OnInit } from '@angular/core';
import * as d3 from "d3"; 

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  private data = [
    {"Framework": "Guayaquil", "Stars": "166443", "Released": "2014"},
    {"Framework": "Quito", "Stars": "150793", "Released": "2013"},
  ];

  private svg!: d3.Selection<SVGGElement, unknown, HTMLElement, any>;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);



  constructor() { }

  ngOnInit(): void {
    this.generarData();
    this.createSvg();
    
  }

  private generarData(){
    fetch('http://localhost:3001/api/usuarios')
    .then(texto => texto.json())
    .then(usuarios => {
      var file ={};
      var data: {}[] = [];

      let listaCiudades:any = [];
      let listaCiudadesCount: any ={};
      for(let usuario of usuarios) {
        listaCiudades.push(usuario.ciudad)
      }

      listaCiudades.forEach(function(numero: string){
        listaCiudadesCount[numero] = (listaCiudadesCount[numero] || 0) + 1;
        });
      
      for(let c of listaCiudades){
        file = {ciudad: c, cantidadUsuarios: listaCiudadesCount[c]};
        data.push(file);
      }
      this.drawBars(data);    
  });
  }

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
    .range([0, this.width])
    .domain(data.map(d => d.ciudad))
    .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
    .domain([0, 10])
    .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => x(d.ciudad))
    .attr("y", d => y(d.cantidadUsuarios))
    .attr("width", x.bandwidth())
    .attr("height", (d) => this.height - y(d.cantidadUsuarios))
    .attr("fill", "#d04a35");
}

}
