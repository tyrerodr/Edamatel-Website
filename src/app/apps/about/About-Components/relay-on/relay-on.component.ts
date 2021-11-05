import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on',
  templateUrl: './relay-on.component.html',
  styleUrls: ['./relay-on.component.css']
})
export class RelayOnComponent implements OnInit {

  relayOn = [
    {
      icon: 'sl-icon-target text-info-gradiant',
      field: '¿Quienes somos?',
      fieldText: 'La descripcion de una campaña es la introduccion a tu negocio. Ademas de comunicar los productos y servicios que vendes, debe transmitir la razon por la cual los vendes y los valores de tu empresa.'
    },
    {
      icon: 'sl-icon-mouse text-info-gradiant',
      field: 'Ofrecemos',
    },
    {
      icon: 'sl-icon-earphones-alt text-info-gradiant',
      field: 'Marcas',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
