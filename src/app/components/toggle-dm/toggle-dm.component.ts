import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-toggle-dm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-dm.component.html',
  styleUrl: './toggle-dm.component.css'
})
export class ToggleDmComponent implements OnInit {

  darkMode: boolean = false;

  constructor() {}

  ngOnInit(): void {
    
    const savedTheme = localStorage.getItem('theme');

    // Vérification initiale du thème enregistré
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.setDarkMode(true);
    } else {
      this.setDarkMode(false);
    }
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.setDarkMode(this.darkMode);
  }

  private setDarkMode(isDark: boolean) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    this.darkMode = isDark;
  }
}