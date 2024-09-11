import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import 'animate.css';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { IndicComponent } from './layouts/indic/indic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NavbarComponent, IndicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
