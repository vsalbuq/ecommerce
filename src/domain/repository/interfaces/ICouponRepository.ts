import Coupon from "../../entity/Coupon";

export default interface ICouponRepository {
  getByCode(code: string): Coupon | undefined;
}
