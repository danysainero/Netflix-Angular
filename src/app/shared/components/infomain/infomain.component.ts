import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-infomain',
  templateUrl: './infomain.component.html',
  styleUrls: ['./infomain.component.scss']
})
export class InfomainComponent implements OnInit {

  constructor(private ServiceService: ServiceService) { }
  public chapters = this.ServiceService.getChapters();
  public chapter = this.chapters[0];
  ngOnInit() {
  }

}
