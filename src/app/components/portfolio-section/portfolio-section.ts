import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: 
  [CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './portfolio-section.html',
  styleUrl: './portfolio-section.scss',
})
export class PortfolioSectionComponent {

}
