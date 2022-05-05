export default class Cpf {
  private FACTOR_DIGIT_1 = 10;
  private FACTOR_DIGIT_2 = 11;

  private value: string;

  constructor(value: string) {
    if (!this.validate(value)) throw new Error("CPF Inválido");
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  private validate(cpf: string) {
    if (!cpf) return false;

    const sanitizedCpf = this.sanitizeCpf(cpf);

    if (!this.hasValidLength(sanitizedCpf)) return false;

    if (this.repeatsAllNumbers(sanitizedCpf)) return false;

    const digit1 = this.checkDigit(sanitizedCpf, this.FACTOR_DIGIT_1);
    const digit2 = this.checkDigit(sanitizedCpf, this.FACTOR_DIGIT_2);
    let checkingDigit = this.extractCheckingDigit(sanitizedCpf);
    const calculatedDigit = `${digit1}${digit2}`;
    return checkingDigit == calculatedDigit;
  }

  private repeatsAllNumbers(sanitizedCpf: string) {
    const firstDigit = sanitizedCpf[0];
    return [...sanitizedCpf].every((digit) => digit === firstDigit);
  }

  private hasValidLength(sanitizedCpf: string) {
    return sanitizedCpf.length === 11;
  }

  private sanitizeCpf(cpf: string) {
    return cpf.replace(/[.,\- ]/g, "");
  }

  private checkDigit(cpf: string, factor: number) {
    let total = 0;
    for (const digit of cpf) {
      if (factor > 1) total += parseInt(digit) * factor--;
    }
    const rest = total % 11;
    return rest < 2 ? 0 : 11 - rest;
  }

  private extractCheckingDigit(cpf: string) {
    return cpf.slice(-2);
  }
}
