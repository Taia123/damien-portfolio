import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar'; 
import { TestimonialSectionComponent } from '../../components/testimonial-section/testimonial-section';
import { FooterSectionComponent } from '../../components/footer-section/footer-section';



@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, TestimonialSectionComponent, FooterSectionComponent],
  templateUrl: './about-page.html',
  styleUrls: ['./about-page.scss'],
})
export class AboutPage {}
