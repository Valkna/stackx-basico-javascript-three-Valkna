// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.
function dobrarNumeros(numeros) {
  var resultado = [];

  for (var i = 0; i < numeros.length; i++) {
    resultado.push(numeros[i] * 2);
  }

  return resultado;
}

var numeros = [1, 2, 3, 4, 5];
var numerosDobrados = dobrarNumeros(numeros);
console.log(numerosDobrados);

// Implemente a função 'somarValores' que recebe um array de números
// e retorna a soma de todos os valores.
function somarValores(numeros) {
  var soma = 0;

  for (var i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  return soma;
}

// Exemplo de uso
var numeros = [1, 2, 3, 4, 5];
var resultado = somarValores(numeros);
console.log(resultado);

// Implemente a função 'filtrarPares' que recebe um array de números
// e retorna um novo array contendo apenas os números pares.
function filtrarPares(numeros) {
  var numerosPares = [];

  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      numerosPares.push(numeros[i]);
    }
  }

  return numerosPares;
}

// Exemplo de uso
var numeros = [1, 2, 3, 4, 5, 6];
var numerosPares = filtrarPares(numeros);
console.log(numerosPares);

module.exports = {
  dobrarNumeros,
  somarValores,
  filtrarPares,
};
