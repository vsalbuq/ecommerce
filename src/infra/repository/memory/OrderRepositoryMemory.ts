import IOrderRepository from "../../../domain/repository/interfaces/IOrderRepository";
import Order from "../../../domain/entity/Order";

export default class OrderRepositoryMemory implements IOrderRepository {
  orders: Order[];

  constructor() {
    this.orders = [];
  }

  save(order: Order): void {
    this.orders.push(order);
  }
}
