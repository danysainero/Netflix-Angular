import { Component,Output, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ServiceService } from '../../services/service.service';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor() { }
 
  infoShow;
  check: boolean;
  video = document.getElementsByClassName;

playing;
  ngOnInit() {

  }

  checkTrue($event) {
    this.check = true;
  
  }
  checkFalse($event) {
    this.check = false;
    let video = <HTMLVideoElement> document.getElementById('1');
    video.pause();
    video.currentTime=0;
  }

  @ViewChild("myVideo") myVideo: ElementRef;
  play(event) {
    
     this.myVideo.nativeElement.play();

    console.log( this.myVideo);
    
     /*  $event.target.play(); */
      event.target.loop = true;
   
  }
  @ViewChild("myVideo") myVideo2: ElementRef;
  pause($event, check) {
    this.myVideo2.nativeElement.pause(); 
  }

  fullScreen($event) {
  }

  @Output() info = new EventEmitter();

  showInfo(event){
    this.infoShow = !this.infoShow
    this.info.emit(event);   
  }

}
