export default class FreightCalculator {
  private static DISTANCE: number = 1000;

  static calculate(
    height: number,
    width: number,
    length: number,
    weight: number
  ) {
    const volumeInCm = height * width * length;
    const volume = volumeInCm / 1000000;
    const density = weight / volume;
    const price = this.DISTANCE * volume * (density / 100);
    return price < 10 ? 10 : price;
  }
}
