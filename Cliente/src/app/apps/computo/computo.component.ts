import { Component } from '@angular/core';
import { ServiceblogService } from '../blog/blog-service.service';

@Component({
  selector: 'app-computo',
  templateUrl: './computo.component.html',
  styleUrls: ['./computo.component.css']
})
export class ComputoComponent {
  

  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;
    
  }

}
