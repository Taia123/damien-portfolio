import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar';
import { HeroSectionComponent } from '../components/hero-section/hero-section';
import { AboutSectionComponent } from '../components/about-section/about-section';
import { ServicesSectionComponent } from '../components/services-section/services-section';
import { PortfolioSectionComponent } from '../components/portfolio-section/portfolio-section';
import { FaqSectionComponent } from '../components/faq-section/faq-section';
import { TestimonialSectionComponent } from '../components/testimonial-section/testimonial-section';




@Component({
  selector: 'app-home', // ✅ fixed here
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    PortfolioSectionComponent,
    FaqSectionComponent,
    TestimonialSectionComponent
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {}
