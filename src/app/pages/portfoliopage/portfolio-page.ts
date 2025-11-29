import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, PortfolioImage } from '../../services/portfolio';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FaqSectionComponent } from '../../components/faq-section/faq-section';
import { TestimonialSectionComponent } from '../../components/testimonial-section/testimonial-section';
import { FooterSectionComponent } from '../../components/footer-section/footer-section';
@Component({
  standalone: true,
  selector: 'app-portfolio-page',
  imports: [CommonModule, NavbarComponent, FaqSectionComponent, TestimonialSectionComponent, FooterSectionComponent ],
  templateUrl: './portfolio-page.html',
  styleUrls: ['./portfolio-page.scss'],
})
export class PortfolioPageComponent implements OnInit {
  public images: PortfolioImage[] = [];
  public portraits: PortfolioImage[] = [];
  public events: PortfolioImage[] = [];
  public commercial: PortfolioImage[] = [];


  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.images = this.portfolioService.getImages();
    this.portraits = this.images.filter(i => i.category === 'portraits');
    this.events = this.images.filter(i => i.category === 'events');
    this.commercial = this.images.filter(i => i.category === 'commercial');

    
  }
}

