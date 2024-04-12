export function numerosArmstrong(num: number): string {
  // Armazena o número original
  const originalNum = num;

  // Número restante
  let remaining = num;

  // Soma dos dígitos elevados ao seu número de dígitos
  let sum = 0;

  // Contagem de dígitos
  let digitCount = 0;

  // Conta os dígitos
  while (remaining > 0) {
      remaining = Math.floor(remaining / 10);
      digitCount++;
  }

  // Restaura o número original
  remaining = originalNum;

  // Calcula a soma dos dígitos elevados ao seu número de dígitos
  while (remaining > 0) {
      // Extrai o dígito
      const digit = remaining % 10;

      // Soma o dígito elevado ao seu número de dígitos
      sum += Math.pow(digit, digitCount);

      // Divide o número restante por 10 para obter o próximo dígito
      remaining = Math.floor(remaining / 10);
  }

  // Verifica se a soma é igual ao número original
  if (sum === originalNum) {
      return 'Este eh um numero de Armstrong!';
  } else {
      return 'Este nao eh um numero de Armstrong!';
  }
}

module.exports = numerosArmstrong;