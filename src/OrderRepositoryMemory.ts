import IOrderRepository from "./IOrderRepository";
import Order from "./Order";

export default class OrderRepositoryMemory implements IOrderRepository {
  orders: Order[];

  constructor() {
    this.orders = [];
  }

  save(order: Order): void {
    this.orders.push(order);
  }
}
