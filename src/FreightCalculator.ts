import Product from "./Product";

export default class FreightCalculator {
  private static DISTANCE: number = 1000;

  static calculate(product: Product, quantity: number) {
    const price =
      product.getVolume() *
      this.DISTANCE *
      (product.getDensity() / 100) *
      quantity;
    return price != 0 && price < 10 ? 10 : price;
  }
}
