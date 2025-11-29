import { Routes } from '@angular/router';
import { HomePage } from './pages/home.page'; 
import { AboutPage } from './pages/about-page/about-page'; 
import { PortfolioPageComponent } from './pages/portfoliopage/portfolio-page';
import { ServicesPageComponent } from './pages/services-page/services-page';




export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
   { path: 'about', component: AboutPage },
   {
  path: 'portfolio',
  component: PortfolioPageComponent
},
  { path: 'services', 
    component: ServicesPageComponent }, 

  
];
