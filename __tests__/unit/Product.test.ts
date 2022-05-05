import Dimension from "../../src/domain/entity/Dimension";
import Product from "../../src/domain/entity/Product";

test("Deve criar um produto com dimensões e calcular seu volume", function () {
  const product = new Product(
    1,
    "Instrumentos Musicais",
    "Guitarra",
    1000,
    new Dimension(100, 30, 10)
  );
  const volume = product.getVolume();
  expect(volume).toBe(0.03);
});

test("Deve criar um produto com dimensões e calcular sua densidade", function () {
  const product = new Product(
    1,
    "Instrumentos Musicais",
    "Guitarra",
    1000,
    new Dimension(100, 30, 10),
    3
  );
  const density = product.getDensity();
  expect(density).toBe(100);
});
