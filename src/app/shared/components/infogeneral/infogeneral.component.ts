import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-infogeneral',
  templateUrl: './infogeneral.component.html',
  styleUrls: ['./infogeneral.component.scss']
})
export class InfogeneralComponent implements OnInit {

  constructor(private ServiceService: ServiceService) { }

  public chapters = this.ServiceService.getChapters();
  public chapter = this.chapters[0];

  ngOnInit() {
     /* document.getElementById("video").volume = 0;   */
  }

}
