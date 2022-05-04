import FreightCalculator from "../src/FreightCalculator";

test("Deve calcular o valor do frete com base nas dimensões (altura, largura e profundidade em cm) e o peso dos produtos (em kg)", function () {
  const height = 20;
  const width = 15;
  const length = 10;
  const weight = 1;
  expect(FreightCalculator.calculate(height, width, length, weight)).toBe(10);
});

test("Deve retornar o preço mínimo de frete caso ele seja superior ao valor calculado", function () {
  const height = 20;
  const width = 15;
  const length = 10;
  const weight = 0.9;
  expect(FreightCalculator.calculate(height, width, length, weight)).toBe(10);
});
