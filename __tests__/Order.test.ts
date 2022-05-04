import Coupon from "../src/Coupon";
import Item from "../src/Item";
import Order from "../src/Order";

test("Deve criar um pedido", function () {
  const order = new Order("935.411.347-80");
  expect(order.cpf.getValue()).toBe("935.411.347-80");
  expect(order.getTotal()).toBe(0);
});

test("Não deve criar um pedido com CPF inválido", function () {
  expect(() => new Order("111.111.111-11")).toThrowError("CPF Inválido");
});

test("Deve criar um pedido com 3 itens", function () {
  const order = new Order("935.411.347-80");
  order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
  order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1);
  order.addItem(new Item(3, "Acessórios", "Cabo", 30), 3);
  const total = order.getTotal();
  expect(total).toBe(6090);
});

test("Deve criar um pedido com 3 itens usando cupom de desconto", function () {
  const order = new Order("935.411.347-80");
  order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
  order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1);
  order.addItem(new Item(3, "Acessórios", "Cabo", 30), 3);
  const coupon = new Coupon("VALE20", 20);
  order.addCoupon(coupon);
  const total = order.getTotal();
  expect(total).toBe(4872);
});
