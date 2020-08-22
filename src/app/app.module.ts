import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllComponent } from './all/all.component';
import { BestComponent } from './best/best.component';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AllComponent, BestComponent, TopComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
