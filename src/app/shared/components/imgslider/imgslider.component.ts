import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-imgslider',
  templateUrl: './imgslider.component.html',
  styleUrls: ['./imgslider.component.scss']
})
export class ImgsliderComponent implements OnInit {

left = false;
right = false;

  @Input() chapter;
  
  constructor(private ServiceService: ServiceService) { }

  ngOnInit() {
  }

moveLeft() {
    console.log('left');
    this.left=true;
  }

  moveRight() {
    console.log('right');
    this.right=true;
  }
}
