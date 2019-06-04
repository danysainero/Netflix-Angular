import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.scss']
})

export class UserComponent {
@Input() evento: any;
  list: any = [
    {
    name: 'Manolo',
    img: './assets/images/icons/user-icon_1.png'
  },{
    name: 'Gloria',
    img: './assets/images/icons/user-icon_2.png'
  },{
    name: 'Lucía',
    img: './assets/images/icons/user-icon_3.png'
  }];

// panelExpanded: boolean;
hidden: true;
expanded: boolean = false;

  onHover(evento){
    this.expanded = true;
    // user-block__link.style.aria-expanded="true"
  }
  onOut(evento){
    this.expanded = false;
  }

}
