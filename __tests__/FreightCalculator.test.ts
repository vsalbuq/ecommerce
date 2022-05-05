import Dimension from "../src/Dimension";
import FreightCalculator from "../src/FreightCalculator";
import Product from "../src/Product";

test("Deve calcular o valor do frete com base nas dimensões (altura, largura e profundidade em cm) e o peso dos produtos (em kg)", function () {
  const product = new Product(
    1,
    "Instrumentos Musicais",
    "Guitarra",
    1000,
    new Dimension(100, 30, 10),
    3
  );
  const freight = FreightCalculator.calculate(product, 2);
  expect(freight).toBe(60);
});

test("Deve retornar o preço mínimo de frete caso ele seja superior ao valor calculado", function () {
  const product = new Product(
    3,
    "Instrumentos Musicais",
    "Cabo",
    30,
    new Dimension(10, 10, 10),
    0.9
  );
  const freight = FreightCalculator.calculate(product, 1);
  expect(freight).toBe(10);
});
