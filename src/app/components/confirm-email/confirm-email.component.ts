// confirm-email.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';   

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    this.route.queryParams.subscribe(async params => {
      const token = params['token'];
      if (token) {
        try {
          const conf = await this.userService.confirm(token);
          console.log('Confirmation successful:', conf);
          this.router.navigate(['/login'], { queryParams: { message: 'Email confirmed successfully! Please log in.' } });
        } catch (error) {
          console.error('Error confirming email:', error);
          this.router.navigate(['/login'], { queryParams: { message: 'Error confirming email. Please try again.' } });
        }
      }
    });
  }
}
