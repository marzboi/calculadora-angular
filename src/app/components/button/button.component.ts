import { Component, input, output } from '@angular/core';

@Component({
  selector: 'cal-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  buttonNumber = input.required<number>();

  pressed = output<number>();

  onClick() {
    this.pressed.emit(this.buttonNumber());
    console.log('Button pressed:', this.buttonNumber());
  }
}
