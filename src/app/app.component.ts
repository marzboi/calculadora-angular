import { Component } from '@angular/core';
import { MainPageComponent } from './page/main-page/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'calculadora';
}
