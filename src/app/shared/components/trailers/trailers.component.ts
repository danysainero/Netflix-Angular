import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.scss']
})
export class TrailersComponent implements OnInit {

  constructor(private ServiceService: ServiceService) { }

  ngOnInit() {
  }

}
