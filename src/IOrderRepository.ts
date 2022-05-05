import Order from "./Order";

export default interface IOrderRepository {
  save(order: Order): void;
}
