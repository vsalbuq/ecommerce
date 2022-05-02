const cpf = require('../src/Cpf');

test("Deve testar um CPF válido", function(){
    const cpfNumber = "935.411.347-80";
	const isValid = cpf.validate(cpfNumber);
	expect(isValid).toBeTruthy();
});

test("Deve invalidar um CPF de valor undefined", function(){
    const cpfNumber = undefined;
    const isValid = cpf.validate(cpfNumber);
    expect(isValid).toBeFalsy();
});

test("Deve invalidar um CPF de valor null", function(){
    const cpfNumber = null;
    const isValid = cpf.validate(cpfNumber);
    expect(isValid).toBeFalsy();
});

test("Deve aceitar CPF com todos os números mesmo que algum caractere separador esteja faltando", function(){
    const cpfNumber = "93541134780";
    const isValid = cpf.validate(cpfNumber);
    expect(isValid).toBeTruthy();
});

test("Deve reportar um CPF inválido quando as regras numéricas não forem respeitadas", function(){
    const cpfNumber = "111.111.111-11";
	const isValid = cpf.validate(cpfNumber);
	expect(isValid).toBeFalsy();
});

test("Deve reportar um CPF inválido quando houverem menos números que o necessário", function(){
    const cpfNumber = "935.411.34-80";
	const isValid = cpf.validate(cpfNumber);
	expect(isValid).toBeFalsy();
});

test("Deve reportar um CPF inválido quando houverem mais números que o necessário", function(){
    const cpfNumber = "935.411.31212432-80";
	const isValid = cpf.validate(cpfNumber);
	expect(isValid).toBeFalsy();
});

// console.log(validate("111.111.111-11"));
// console.log(validate("123.456.789-99"));
// console.log(validate("935.411.347-80"));