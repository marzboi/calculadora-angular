import { Component, inject } from '@angular/core';
import { DisplayComponent } from '../../components/display/display.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'cal-main-page',
  standalone: true,
  imports: [DisplayComponent, ButtonComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  CalculatorService = inject(CalculatorService);
  displayValue: string | number;
  firstValue = 0;
  secondValue = 0;
  operatorSelected = false;
  operator = '';

  constructor() {
    this.displayValue = 0;
  }

  appendDisplay(number: number | string) {
    this.displayValue = Number(`${this.displayValue}${number}`);
  }

  deleteOne() {
    this.displayValue = Number(String(this.displayValue).slice(0, -1));
  }

  clear() {
    this.displayValue = 0;
  }

  operatorPressed(operator: number | string) {
    this.firstValue = this.displayValue as number;
    this.displayValue = 0;
    this.operator = operator as string;
    this.operatorSelected = true;
  }

  calculateResult() {
    if (!this.operatorSelected) return;

    this.secondValue = this.displayValue as number;

    switch (this.operator) {
      case '+':
        this.displayValue = this.CalculatorService.sum(
          this.firstValue,
          this.secondValue
        );
        break;
      case '-':
        this.displayValue = this.CalculatorService.subtract(
          this.firstValue,
          this.secondValue
        );
        break;
      case '*':
        this.displayValue = this.CalculatorService.multiply(
          this.firstValue,
          this.secondValue
        );
        break;
      case '/':
        this.displayValue = this.CalculatorService.divide(
          this.firstValue,
          this.secondValue
        );
        break;
    }
  }
}
