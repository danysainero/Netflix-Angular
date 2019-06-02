import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

 public clicked : boolean;
  constructor() {
    this.clicked = true;
   }

  ngOnInit() {
    this.clicked = true;
  }

}
