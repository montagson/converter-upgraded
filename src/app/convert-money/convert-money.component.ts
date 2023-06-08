import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface CurrentRate {
  base: string;
  rates: {
    UAH: number;
    USD: number;
    EUR: number;
    RUB: number;
  };
}



@Component({
  selector: 'app-convert-money',
  templateUrl: './convert-money.component.html',
  styleUrls: ['./convert-money.component.scss']
})
export class ConvertMoneyComponent {
  amount1: any;
  amount2: any;
  currency1: string = "UAH";
  currency2: string = "USD";
  apiUrl: string = 'https://api.exchangerate-api.com/v4/latest/';
  currentRates: CurrentRate | any;

  constructor(private http: HttpClient) {
    this.fetchCurrencyRates("UAH");
  }
  private async fetchCurrencyRates(value: string ) {
    /* this.http.get<CurrentRate>(`${this.apiUrl}${value}`).subscribe(
      (response) => {
        this.currentRates = response;
      },
      (error) => {
        console.error('Failed to fetch currency rates:', error);
      }
    ); */ /* глупо */
    try {
      this.currentRates = await this.http.get<CurrentRate>(`${this.apiUrl}${value}`).toPromise();
    } catch (error) {
      console.error('Failed to fetch currency rates:', error);
    }
  }
  async convertCurrency(source: number) {
    if (source === 1) {
      await this.fetchCurrencyRates(this.currency1);
      const convertedAmount = this.amount1 * (this.currentRates.rates[this.currency1] * this.currentRates.rates[this.currency2]);
      this.amount2 = convertedAmount.toFixed(2);
    } else {
      await this.fetchCurrencyRates(this.currency2);
      const convertedAmount = this.amount2 * (this.currentRates.rates[this.currency2] * this.currentRates.rates[this.currency1]);
      this.amount1 = convertedAmount.toFixed(2);
    }
  }
}