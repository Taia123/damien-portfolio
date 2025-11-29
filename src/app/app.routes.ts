import { Routes } from '@angular/router';
import { HomePage } from './pages/home.page'; 
import { AboutPage } from './pages/about-page/about-page'; // ✅ Add this

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
   { path: 'about', component: AboutPage },
  
];
