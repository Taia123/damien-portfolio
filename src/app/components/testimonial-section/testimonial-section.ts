import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-testimonial-section',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './testimonial-section.html',
  styleUrls: ['./testimonial-section.scss']
})
export class TestimonialSectionComponent {
  totalReviews = 323; 
 testimonials = [
    {
      name: 'Emily Johnson',
      location: 'USA, California',
      stars: 5,
      text: `Damien’s photography doesn’t just capture moments; it captures emotions. His work is simply mesmerizing.`,
    },
    {
      name: 'John Smith',
      location: 'USA, California',
      stars: 5,
      text: `Damien has an incredible talent for making every event feel effortless, and the results speak for themselves.`,
    },
    {
      name: 'Samantha Davis',
      location: 'USA, California',
      stars: 5,
      text: `I was blown away by Damien’s ability to capture the essence of our wedding day. His photographs are our cherished memories.`,
    }
  ];}
