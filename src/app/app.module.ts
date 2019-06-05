import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './shared/components/video/video.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { MediaComponent } from './shared/components/media/media.component';
import { ServiceService } from './shared/services/service.service';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    CarouselComponent,
    MediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
  ],
  providers: [
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
