import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar';
import { HeroSectionComponent } from '../components/hero-section/hero-section';
import { AboutSectionComponent } from '../components/about-section/about-section';
import { ServicesSectionComponent } from '../components/services-section/services-section';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {}
