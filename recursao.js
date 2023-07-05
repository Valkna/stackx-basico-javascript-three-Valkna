// Soma dos números inteiros de 1 a n
function somaNumeros(n) {
  let soma = 0;
  for (let i = 1; i <= n; i++) {
    soma += i;
  }
  return soma;
}

// Verifica se um número é par
function ehPar(number) {
  return number % 2 === 0;
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = { somaNumeros, ehPar, fibonacci };
