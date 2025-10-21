import { Component, signal } from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, UpperCasePipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-pipes-page',
  imports: [UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe, CurrencyPipe, DecimalPipe, PercentPipe],
  templateUrl: './pipes-page.component.html',
  styleUrl: './pipes-page.component.css',
})
export class PipesPageComponent {
  firstName = signal('john');
  lastName = signal('DOE');

  user = signal({
    id: 1,
    firstName: this.firstName(),
    lastName: this.lastName(),
    age: 35,
    email: 'john.doe@example.com',
  });

  currentDate = signal(new Date());
  birthday = signal(new Date(2010, 5, 15));

  price = signal(1234.56);
  percent = signal(0.256);
}
