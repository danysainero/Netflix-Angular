import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-menu',
  templateUrl: './chapter-menu.component.html',
  styleUrls: ['./chapter-menu.component.scss']
})
export class ChapterMenuComponent implements OnInit {

  public dropDownclicked: boolean;


  constructor() { }

  ngOnInit() {
  }
  public open() {
   

    this.dropDownclicked = !this.dropDownclicked;
    console.log(this.dropDownclicked);
    
  }

}
