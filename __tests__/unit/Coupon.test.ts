import Coupon from "../../src/domain/entity/Coupon";

test("Deve criar um cupom de desconto", function () {
  const coupon = new Coupon("VALE20", 20);
  const isExpired = coupon.isExpired();
  expect(isExpired).toBeFalsy();
});

test("Deve criar um cupom de desconto expirado", function () {
  const coupon = new Coupon("VALE20", 20, new Date("2022-01-01T10:00:00"));
  const isExpired = coupon.isExpired();
  expect(isExpired).toBeTruthy();
});
