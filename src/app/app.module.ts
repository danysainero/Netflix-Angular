import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './shared/components/video/video.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { MediaComponent } from './shared/components/media/media.component';
import { ServiceService } from './shared/services/service.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { UserComponent } from './shared/components/usernav/usernav.component';
import { InfogeneralComponent } from './shared/components/infogeneral/infogeneral.component';
import { DetailsComponent } from './shared/components/details/details.component';
import { ChapterMenuComponent } from './shared/components/chapter-menu/chapter-menu.component';
import { ChapterCardComponent } from './shared/components/chapters-card/chapter-card.component';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { ImgsliderComponent } from './shared/components/imgslider/imgslider.component';
import { InfomainComponent } from './shared/components/infomain/infomain.component';



@NgModule({
  declarations: [
    AppComponent,
   VideoComponent,/* 
    CarouselComponent, */
    MediaComponent,
    NavbarComponent,
    UserComponent,
    InfogeneralComponent,
    DetailsComponent,
    ChapterMenuComponent,
    ChapterCardComponent,
    BreadcrumbComponent,
    ImgsliderComponent,
    InfomainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
