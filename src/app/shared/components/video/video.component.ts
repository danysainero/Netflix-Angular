import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor() { }
  check: boolean;
  video = document.getElementsByClassName;
infoshow = false;

  ngOnInit() {

  }

  checkTrue($event) {
    this.check = true;
    //console.log($event.target);
    //console.log(this.check);
    //let video = <HTMLVideoElement> document.getElementById('1');
    //video.play();
    //console.log('entraste');
  }
  checkFalse($event) {
    this.check = false;

    //console.log($event);
    //console.log(this.check);
    //console.log('saliste');

    let video = <HTMLVideoElement> document.getElementById('1');
    video.pause();
    video.currentTime=0;
  }


  play($event, check) {

    if (this.check) {
      $event.target.play();
      $event.target.loop = true;
    }

    //console.log($event.target);
    //$event.target.play();
    //$event.target.loop = true;
  }
  pause($event, check) {
    if (!this.check) {
      //console.log($event.target);
      $event.target.pause();
      $event.target.currentTime = 0

    }
  }

  fullScreen($event) {
  }

  showInfo(){
    this.infoshow = !this.infoshow;
  }

}
