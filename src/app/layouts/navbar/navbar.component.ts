import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ToggleDmComponent } from '../../components/toggle-dm/toggle-dm.component';
import { ToggleBurgerComponent } from '../../components/toggle-burger/toggle-burger.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, ToggleDmComponent, ToggleBurgerComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  links = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/sale', label: 'Sale' },
    { path: '/blog', label: 'Blog' },
    { path: '/showcase', label: 'Showcase' },
  ]

  mobileMenu: boolean = false;
  isChecked: boolean = false;
  isDisabled: boolean = false;

  @ViewChild('animeMobileToggle', { static: false }) AnimeMobileToggle!: ElementRef

  constructor(private router: Router) { }

  toggleMobileMenu() {

    if (!this.mobileMenu) {
      this.mobileMenu = true;
      this.isChecked = true;
    }
    if (this.AnimeMobileToggle) {
      this.AnimeMobileToggle.nativeElement.classList.add('animate__slideOutLeft');
      this.isDisabled = true;

      setTimeout(() => {
        this.isDisabled = false;
        this.mobileMenu = false;
        // this.AnimeMobileToggle.nativeElement.classList.remove('animate__slideOutLeft'); // Remove animation class after toggle
      }, 450);

      this.isChecked = false;

    }
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

}
