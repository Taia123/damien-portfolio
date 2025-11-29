import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar'; 


@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './about-page.html',
  styleUrls: ['./about-page.scss'],
})
export class AboutPage {}
