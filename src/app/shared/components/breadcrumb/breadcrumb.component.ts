import { Component, OnInit, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @ViewChild("breadcrumb") myBreadcrumb: ElementRef

  arrBreadCrumb = [{
    text: 'Información general',
    component: 'infogeneral',
    active: false
  },{
    text: 'Episodios',
    component: 'chapters',
    active: false
  },{
    text: 'Tráileres y más',
    component: 'traileres',
    active: false
  },
  {
    text: 'Detalles',
    component: 'detalles',
    active: false
  }]


 public clicked : boolean;
  constructor() {
   }

  ngOnInit() {
    this.arrBreadCrumb[0].active=true;
  }


  @Output() breadCrumbItem = new EventEmitter();



  showBreadCrumb(item){          
    
    this.breadCrumbItem.emit(item.component);   

    this.arrBreadCrumb.forEach(elem => {
      elem.active = false;
    })   
    item.active = true;
  }

}
