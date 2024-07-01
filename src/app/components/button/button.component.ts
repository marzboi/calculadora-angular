import { Component, input, output } from '@angular/core';

@Component({
  selector: 'cal-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  buttonValue = input.required<number | string>();

  pressed = output<number | string>();

  onClick() {
    this.pressed.emit(this.buttonValue());
  }
}
