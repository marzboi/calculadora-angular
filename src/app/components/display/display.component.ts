import { Component, input } from '@angular/core';

@Component({
  selector: 'cal-display',
  standalone: true,
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss',
})
export class DisplayComponent {
  currentValue = input.required<number | string>();
}
