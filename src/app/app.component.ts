import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'botflix';

  infoShow: boolean;
  infoShow2: boolean;

  OnInfoShow(event){
this.infoShow = !this.infoShow;  
  }

  OnInfoShow2(event){
    this.infoShow2 = !this.infoShow2;  
}
OnClose(event){
  this.infoShow = !this.infoShow;     
}
OnClose2(event){
  this.infoShow2 = !this.infoShow2;  
}
 
}
