import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeLeftSideComponent } from './home-left-side/home-left-side.component';
import { HomeRightSideComponent } from './home-right-side/home-right-side.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomeComponent, HomeHeaderComponent, HomeLeftSideComponent, HomeRightSideComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
