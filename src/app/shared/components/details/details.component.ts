import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})


export class DetailsComponent implements OnInit {

  constructor(private ServiceService: ServiceService) {
  }

  infogeneral;
  chapters;
  traileres;
  detalles;
  ngOnInit() {
  }

  @Output() close = new EventEmitter();
  closeInfo(event) {
    this.close.emit(event);
  }



  breadCrumbItemShow(event) {
    if (event === 'infogeneral') {
      this.infogeneral = false;
      this.chapters = false;
      this.traileres = false;
      this.detalles = false;
    }
    else if (event === 'chapters') {
      this.infogeneral = true;
      this.chapters = true;
      this.traileres = false;
      this.detalles = false;
    }
    else if (event === 'traileres') {
      this.traileres = true;
      this.infogeneral = true;
      this.chapters = false;
      this.detalles = false;
    }
    else if (event === 'detalles') {
      this.detalles = true;
      this.traileres = false;
      this.infogeneral = true;
      this.chapters = false;
    }
  }
}
