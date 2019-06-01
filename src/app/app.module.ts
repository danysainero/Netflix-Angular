import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './shared/components/details/details.component';
import { ChapterCardComponent } from './shared/components/chapters-card/chapter-card.component';
import { InfogeneralComponent } from './shared/components/infogeneral/infogeneral.component';
import { ServiceService } from './shared/services/service.service';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { ImgsliderComponent } from './shared/components/imgslider/imgslider.component';
import { ChapterMenuComponent } from './shared/components/chapter-menu/chapter-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    ChapterCardComponent,
    InfogeneralComponent,
    BreadcrumbComponent,
    ImgsliderComponent,
    ChapterMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
