import Cpf from "../src/Cpf";

test("Deve testar um CPF válido", function () {
  const cpf = new Cpf("935.411.347-80");
  expect(cpf.getValue()).toBe("935.411.347-80");
});

test("Deve aceitar CPF com todos os números mesmo que algum caractere separador esteja faltando", function () {
  const cpf = new Cpf("93541134780");
  expect(cpf.getValue()).toBe("93541134780");
});

test("Deve reportar um CPF inválido quando as regras numéricas não forem respeitadas", function () {
  expect(() => new Cpf("111.111.111-11")).toThrowError("CPF Inválido");
});

test("Deve reportar um CPF inválido quando houverem menos números que o necessário", function () {
  expect(() => new Cpf("935.411.34-80")).toThrowError("CPF Inválido");
});

test("Deve reportar um CPF inválido quando houverem mais números que o necessário", function () {
  expect(() => new Cpf("935.411.31212432-80")).toThrowError("CPF Inválido");
});
