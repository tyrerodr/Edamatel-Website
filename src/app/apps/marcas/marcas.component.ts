import { Component } from '@angular/core';
import { ServiceblogService } from '../blog/blog-service.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent {
  

  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;
    
  }

}
