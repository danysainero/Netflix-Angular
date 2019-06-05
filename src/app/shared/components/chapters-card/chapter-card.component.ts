import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-chapter-card',
  templateUrl: './chapter-card.component.html',
  styleUrls: ['./chapter-card.component.scss']
})  
export class ChapterCardComponent implements OnInit {

  @Input() chapter;
  
  constructor() { }

  ngOnInit() {
  }

}
