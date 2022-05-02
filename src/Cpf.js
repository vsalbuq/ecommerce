const FACTOR_DIGIT_1 = 10;
const FACTOR_DIGIT_2 = 11;

exports.validate = function (cpf) {
  if (!cpf) return false;

  const sanitizedCpf = sanitizeCpf(cpf);

  if (!hasValidLength(sanitizedCpf)) return false;

  if (repeatsAllNumbers(sanitizedCpf)) return false;

  const digit1 = checkDigit(sanitizedCpf, FACTOR_DIGIT_1);
  const digit2 = checkDigit(sanitizedCpf, FACTOR_DIGIT_2);
  let checkingDigit = extractCheckingDigit(sanitizedCpf);
  const calculatedDigit = `${digit1}${digit2}`;
  return checkingDigit == calculatedDigit;
};

function repeatsAllNumbers(sanitizedCpf) {
  const firstDigit = sanitizedCpf[0];
  return [...sanitizedCpf].every((digit) => digit === firstDigit);
}

function hasValidLength(sanitizedCpf) {
  return sanitizedCpf.length === 11;
}

function sanitizeCpf(cpf) {
  return cpf.replace(/[.,\- ]/g, "");
}

function checkDigit(cpf, factor) {
  let total = 0;
  for (const digit of cpf) {
    if (factor > 1) total += digit * factor--;
  }
  const rest = total % 11;
  return rest < 2 ? 0 : 11 - rest;
}

const extractCheckingDigit = function (cpf) {
  return cpf.slice(-2);
};
