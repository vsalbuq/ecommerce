import CouponRepositoryMemory from "../../src/infra/repository/memory/CouponRepositoryMemory";
import OrderRepositoryMemory from "../../src/infra/repository/memory/OrderRepositoryMemory";
import PlaceOrder from "../../src/application/usecase/PlaceOrder";
import ProductRepositoryMemory from "../../src/infra/repository/memory/ProductRepositoryMemory";

test("Deve fazer um pedido", function () {
  const productRepository = new ProductRepositoryMemory();
  const orderRepository = new OrderRepositoryMemory();
  const couponRepository = new CouponRepositoryMemory();
  const placeOrder = new PlaceOrder(
    productRepository,
    orderRepository,
    couponRepository
  );
  const input = {
    cpf: "935.411.347-80",
    orderItems: [
      { idItem: 1, quantity: 1 },
      { idItem: 2, quantity: 1 },
      { idItem: 3, quantity: 3 },
    ],
    coupon: "VALE20",
  };
  const output = placeOrder.execute(input);

  expect(output.total).toBe(4872);
});
