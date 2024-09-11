import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
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
export class LoginComponent implements OnInit {
  loginField: string = '';
  password: string = '';
  error: string | null = null;
  loading: boolean = false;
  confirmationMessage: string | null = null;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {}
 
  async ngOnInit(): Promise<void> {
    this.route.queryParams.subscribe(params => {
      this.confirmationMessage = params['message'] || null;
    });
    if(this.confirmationMessage){
      setTimeout(() => {
        this.confirmationMessage = null;
      }, 5000); 
    }
  }

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
      if (err.response?.data.message){
        this.error = err.response?.data.message;
      }else{
        this.error = err.response?.data;
      }
      
    } finally {
      this.loading = false;
    }
  }
}
