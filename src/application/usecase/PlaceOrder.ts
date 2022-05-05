import ICouponRepository from "../../domain/repository/interfaces/ICouponRepository";
import IOrderRepository from "../../domain/repository/interfaces/IOrderRepository";
import IProductRepository from "../../domain/repository/interfaces/IProductRepository";
import Order from "../../domain/entity/Order";
import PlaceOrderInput from "./PlaceOrderInput";
import PlaceOrderOutput from "./PlaceOrderOutput";

export default class PlaceOrder {
  constructor(
    readonly productRepository: IProductRepository,
    readonly orderRepository: IOrderRepository,
    readonly couponRepository: ICouponRepository
  ) {}

  execute(input: PlaceOrderInput): PlaceOrderOutput {
    const order = new Order(input.cpf);
    for (const orderItem of input.orderItems) {
      const item = this.productRepository.getById(orderItem.idItem);
      if (!item) {
        throw new Error("Produto não encontrado");
      }
      order.addItem(item, orderItem.quantity);
    }
    if (input.coupon) {
      const coupon = this.couponRepository.getByCode(input.coupon);
      if (coupon) order.addCoupon(coupon);
    }
    const total = order.getTotal();
    this.orderRepository.save(order);
    const output = new PlaceOrderOutput(total);
    return output;
  }
}
