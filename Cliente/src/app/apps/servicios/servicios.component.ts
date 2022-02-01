import { Component } from '@angular/core';
import { ServiceblogService } from '../blog/blog-service.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  

  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;
    
  }

}
