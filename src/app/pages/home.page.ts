import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar';
import { HeroSectionComponent } from '../components/hero-section/hero-section';
import { AboutSectionComponent } from '../components/about-section/about-section';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroSectionComponent,
    AboutSectionComponent
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {}
