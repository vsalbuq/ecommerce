import Coupon from "./Coupon";

export default interface ICouponRepository {
  getByCode(code: string): Coupon | undefined;
}
