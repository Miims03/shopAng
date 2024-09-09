import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-toggle-burger',
  standalone: true,
  imports: [],
  templateUrl: './toggle-burger.component.html',
  styleUrl: './toggle-burger.component.css'
})
export class ToggleBurgerComponent {
  @Input() check: boolean = false;
  @Input() disable: boolean = false;
  @Input() active: boolean = false;

  // @Output() active = new EventEmitter<void>();

  // onToggle() {
  //   this.active.emit();
  // }
}
