export default class Coupon {
  constructor(
    readonly code: string,
    readonly percentage: number,
    readonly expirationDate?: Date
  ) {}

  isExpired(today: Date = new Date()) {
    if (!this.expirationDate) {
      return false;
    }
    return new Date() > this.expirationDate;
  }
}
