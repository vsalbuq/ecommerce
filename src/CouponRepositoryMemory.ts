import Coupon from "./Coupon";
import ICouponRepository from "./ICouponRepository";

export default class CouponRepositoryMemory implements ICouponRepository {
  coupons: Coupon[];

  constructor() {
    this.coupons = [new Coupon("VALE20", 20)];
  }

  getByCode(code: string): Coupon | undefined {
    return this.coupons.find((coupon) => coupon.code === code);
  }
}
