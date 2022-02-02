import { Component } from '@angular/core';
import { ServiceblogService } from '../blog/blog-service.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;
    
  }

}
