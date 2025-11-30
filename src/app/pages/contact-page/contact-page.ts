import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TestimonialSectionComponent } from '../../components/testimonial-section/testimonial-section';
import { FooterSectionComponent } from '../../components/footer-section/footer-section';

@Component({
  standalone: true,
  selector: 'app-contact-page',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    NavbarComponent,
    TestimonialSectionComponent,
    FooterSectionComponent
  ],
  templateUrl: './contact-page.html',
  styleUrls: ['./contact-page.scss'],
})
export class ContactPageComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar   
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-()\s]*$/)]],
      message: ['', [Validators.required, Validators.maxLength(300)]]
    });
  }

  onSubmit(): void {

    if (!this.contactForm.valid) {
      this.snackBar.open('Please fill in all required fields correctly.', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
      this.contactForm.markAllAsTouched();
      return;
    }

    const formData = this.contactForm.value;

    this.http.post('https://jsonplaceholder.typicode.com/posts', formData).subscribe({
      next: (response) => {
        console.log('Form submitted successfully:', response);

        this.snackBar.open('Message sent successfully! 🎉', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });

        this.contactForm.reset();
      },

      error: (error) => {
        console.error('Form submission failed', error);

        this.snackBar.open('Oops! Something went wrong. Try again.', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    });
  }
}
