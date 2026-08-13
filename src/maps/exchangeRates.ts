export interface Currency {
  readonly code: string;
}

export class ExchangeRates {
  private readonly rates = new Map<string, number>();

  public set(currency: Currency, rate: number): void {
    this.rates.set(currency.code, rate);
  }

  public find(currency: Currency): number | undefined {
    return this.rates.get(currency.code);
  }
}
