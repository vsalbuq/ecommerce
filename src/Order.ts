import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Product from "./Product";
import OrderItem from "./OrderItem";
import FreightCalculator from "./FreightCalculator";

export default class Order {
  cpf: Cpf;
  orderItems: OrderItem[] = [];
  coupon: Coupon | undefined;
  freight: number = 0;

  constructor(cpf: string) {
    this.cpf = new Cpf(cpf);
  }

  getTotal() {
    let total = 0;
    for (const orderItem of this.orderItems) {
      total += orderItem.getTotal();
    }

    if (this.coupon) {
      total -= (total * this.coupon.percentage) / 100;
    }

    total += this.freight;

    return total;
  }

  addItem(item: Product, quantity: number) {
    this.freight += FreightCalculator.calculate(item, quantity);
    this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
  }

  addCoupon(coupon: Coupon) {
    if (coupon.isExpired()) throw new Error("Cupom de desconto expirado");
    this.coupon = coupon;
  }
}
