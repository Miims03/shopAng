import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import * as validator from 'validator'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginField: string = '';
  password: string = '';
  error: string | null = null;
  loading: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  async handleSubmit(event: Event): Promise<void> {
    event.preventDefault();
    this.loading = true;
    this.error = null;

    const isEmail = validator.isEmail(this.loginField);

    try {
      const data = await this.userService.loginUser({
        email: isEmail ? this.loginField : null,
        username: isEmail ? null : this.loginField,
        password: this.password
      });

      localStorage.setItem('token', data.token);
      this.error = 'Login successful!';
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 3000);
    } catch (err: any) {
      this.error = err.response?.data || 'An error occurred.';
    } finally {
      this.loading = false;
    }
  }
}
