import { Component } from '@angular/core';
import { DisplayComponent } from '../../components/display/display.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'cal-main-page',
  standalone: true,
  imports: [DisplayComponent, ButtonComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  displayValue = 0;
}
