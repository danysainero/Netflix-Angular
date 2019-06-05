import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  constructor() { }

  @Input() aviso: boolean;
  ngOnInit() {
  }
  play($event) {
    if (this.aviso) {
      //$event.target.play();
    }
    //$event.target.play();
    //$event.target.loop=true;

  }
  pause($event) {
    //$event.target.pause();
    //$event.target.currentTime = 0
  }

  fullScreen($event) {
  }

}
