import { Component, Input, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  public isScrolled = false;
  menu: string[] = ['Inicio', 'Series TV', 'Películas', 'Añadido recientemente', 'Mi lista'];
  // bell:


  //constructor(@Inject(DOCUMENT) private document: any) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
      const number = window.scrollY;
      if (number > 9) {
          this.isScrolled = true;
      } else if (this.isScrolled && number < 10) {
          this.isScrolled = false;
      }
  }


}


