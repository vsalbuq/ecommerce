const cpf = require('../src/Cpf');

test("Deve testar um CPF válido", function(){
    const cpfNumber = "935.411.347-80";
	const isValid = cpf.validate(cpfNumber);
	expect(isValid).toBeTruthy();
});