import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { NavbarComponent } from '../../components/navbar/navbar';
import { SERVICES_SECTIONS, ServiceSection } from '../../services/services-data';
import { FaqSectionComponent } from '../../components/faq-section/faq-section';
import { FooterSectionComponent } from '../../components/footer-section/footer-section';

@Component({
  standalone: true,
  selector: 'app-services-page',
  imports: [CommonModule, RouterModule, NavbarComponent, FaqSectionComponent, FooterSectionComponent], 
  templateUrl: './services-page.html',
  styleUrls: ['./services-page.scss'],
})
export class ServicesPageComponent implements OnInit {
  public sections: ServiceSection[] = [];

  ngOnInit(): void {
    this.sections = SERVICES_SECTIONS;
  }
}
