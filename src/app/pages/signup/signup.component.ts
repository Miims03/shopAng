import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router , RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule , FormsModule , RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  firstname = '';
  lastname = '';
  username = '';
  email = '';
  dob: string | null = null;
  password = '';
  confirmPassword = '';
  error: string | null = null;
  loading = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match.';
      return;
    }

    this.loading = true;
    this.error = null;

    const dobFormatted = this.dob ? new Date(this.dob).toISOString().split('T')[0] : '';

    this.userService.signupUser({
      username: this.username,
      email: this.email,
      password: this.password,
      dob: dobFormatted,
      firstname: this.firstname,
      lastname: this.lastname
    }).subscribe({
      next: (data) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.error = err.error.message || 'An error occurred.';
        console.error('Error details:', err);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}