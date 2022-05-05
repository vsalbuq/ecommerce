import Coupon from "../../src/domain/entity/Coupon";
import Product from "../../src/domain/entity/Product";
import Order from "../../src/domain/entity/Order";
import Dimension from "../../src/domain/entity/Dimension";

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
  order.addItem(new Product(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
  order.addItem(
    new Product(2, "Instrumentos Musicais", "Amplificador", 5000),
    1
  );
  order.addItem(new Product(3, "Acessórios", "Cabo", 30), 3);
  const total = order.getTotal();
  expect(total).toBe(6090);
});

test("Deve criar um pedido com 3 itens usando cupom de desconto", function () {
  const order = new Order("935.411.347-80");
  order.addItem(new Product(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
  order.addItem(
    new Product(2, "Instrumentos Musicais", "Amplificador", 5000),
    1
  );
  order.addItem(new Product(3, "Acessórios", "Cabo", 30), 3);
  const coupon = new Coupon("VALE20", 20);
  order.addCoupon(coupon);
  const total = order.getTotal();
  expect(total).toBe(4872);
});

test("Não deve aplicar cupom de desconto expirado", function () {
  const order = new Order("935.411.347-80");
  order.addItem(new Product(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
  order.addItem(
    new Product(2, "Instrumentos Musicais", "Amplificador", 5000),
    1
  );
  order.addItem(new Product(3, "Acessórios", "Cabo", 30), 3);
  const coupon = new Coupon("VALE20", 20, new Date("2022-01-01T10:00:00"));
  expect(() => order.addCoupon(coupon)).toThrowError(
    "Cupom de desconto expirado"
  );
  const total = order.getTotal();
  expect(total).toBe(6090);
});

test("Deve criar um pedido com 3 itens e calcular o frete", function () {
  const order = new Order("935.411.347-80");
  order.addItem(
    new Product(
      1,
      "Instrumentos Musicais",
      "Guitarra",
      1000,
      new Dimension(100, 30, 10),
      3
    ),
    1
  );
  order.addItem(
    new Product(
      2,
      "Instrumentos Musicais",
      "Amplificador",
      5000,
      new Dimension(100, 50, 50),
      20
    ),
    1
  );
  order.addItem(
    new Product(3, "Acessórios", "Cabo", 30, new Dimension(10, 10, 10), 1),
    3
  );
  const total = order.getTotal();
  const noFreightTotal = 6090;
  const freightGuitar = 30;
  const freightAmp = 200;
  const freightCabo = 10 + 10 + 10;

  expect(total).toBe(noFreightTotal + freightGuitar + freightAmp + freightCabo);
});
