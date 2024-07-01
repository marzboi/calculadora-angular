import { Component, input } from '@angular/core';

@Component({
  selector: 'cal-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  buttonNumber = input.required<number>();
}
