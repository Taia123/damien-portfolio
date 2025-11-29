import { Injectable } from '@angular/core';

export interface PortfolioImage {
  title: string;
  date: string;
  category: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  getImages(): PortfolioImage[] {
    return [
    { title: 'Faces of Resilience', date: 'March 2022', category: 'portraits', image: '/blue.png' },
    { title: 'Innocence Unveiled', date: 'January 2020', category: 'portraits', image: '/child.png' },
    { title: 'Blue Muse', date: 'December 2019', category: 'portraits', image: '/black.png' },

    { title: 'A Wedding Tale', date: 'September 2021', category: 'events', image: '/wedding.png' },
    { title: 'Corporate Excellence Summit', date: 'November 2019', category: 'events', image: '/cinema.png' },
    { title: 'Festival of Colors', date: 'March 2018', category: 'events', image: '/colors.png' },

    { title: 'Product Elegance', date: 'August 2020',  category: 'commercial',  image: '/bagg.png'},
    { title: 'Brand Storytelling', date: 'May 2019', category: 'commercial', image: '/glass.png'},
    { title: 'Culinary Delights', date: 'February 2017', category: 'commercial', image: '/knife.png'}

    ];
  }
}
