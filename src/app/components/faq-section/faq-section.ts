import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule],
  templateUrl: './faq-section.html',
  styleUrls: ['./faq-section.scss']
})
export class FaqSectionComponent {

  faqs = [
    {
      question: 'WHAT TYPE OF PHOTOGRAPHY DO YOU SPECIALIZE IN?',
      answer: 'I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.'
    },
    {
      question: 'HOW CAN I BOOK A PHOTOGRAPHY SESSION WITH YOU?',
      answer: 'You can book via the contact form or by emailing me directly. I’ll respond within 24 hours.'
    },
    {
      question: 'WHAT EQUIPMENT DO YOU USE FOR YOUR PHOTOGRAPHY?',
      answer: 'I use professional-grade cameras and lenses (e.g., Canon R5, RF 24-70mm) to ensure top-tier image quality.'
    },
    {
      question: 'CAN I REQUEST A SPECIFIC LOCATION FOR A SHOOT?',
      answer: 'Absolutely! I’m open to traveling or shooting at any location meaningful to you.'
    },
    {
      question: 'WHAT IS YOUR EDITING PROCESS LIKE?',
      answer: 'Each photo is professionally color-graded and retouched to preserve natural tones and atmosphere.'
    },
    {
      question: 'ARE DIGITAL FILES INCLUDED IN YOUR PHOTOGRAPHY PACKAGES?',
      answer: 'Yes, all packages include high-resolution digital files delivered via private gallery.'
    },
    {
      question: 'DO YOU OFFER PRINTS OF YOUR PHOTOGRAPHS?',
      answer: 'Yes, prints are available for purchase. Explore the "Prints" section for more details on sizes and pricing.'
    },
    {
      question: 'HOW LONG DOES IT TAKE TO RECEIVE THE EDITED PHOTOS AFTER A SESSION?',
      answer: 'Standard delivery time is 5–7 business days. Express delivery is available upon request.'
    }
  ];

  faqsLeft = this.faqs.filter((_, i) => i % 2 === 0);
  faqsRight = this.faqs.filter((_, i) => i % 2 === 1);
}
