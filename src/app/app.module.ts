import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './shared/components/video/video.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { MediaComponent } from './shared/components/media/media.component';
import { ServiceService } from './shared/services/service.service';
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceService } from './shared/services/service.service';


>>>>>>> details

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
<<<<<<< HEAD
    NgImageSliderModule,
  ],
  providers: [
    ServiceService
  ],
=======
  ],
  providers: [ServiceService],
>>>>>>> details
  bootstrap: [AppComponent]
})
export class AppModule { }
