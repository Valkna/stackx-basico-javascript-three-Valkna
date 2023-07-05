// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {
  var base = retangulo.base;
  var altura = retangulo.altura;

  var perimetro = 2 * (base + altura);
  var area = base * altura;

  return {
    perimetro: perimetro,
    area: area,
  };
}
var retangulo = {
  base: 4,
  altura: 5,
};

var resultado = calcularRetangulo(retangulo);
console.log(resultado.perimetro);
console.log(resultado.area);

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {
  var idade = pessoa.idade;

  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}

var pessoa1 = {
  idade: 25,
};

var pessoa2 = {
  idade: 16,
};

console.log(ehAdulto(pessoa1));
console.log(ehAdulto(pessoa2));

// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
  var valores = Object.values(obj);
  var resultado = valores.join(" ");
  return resultado;
}

var objeto = {
  valor1: "Olá",
  valor2: "Mundo",
  valor3: "!",
};

var stringConcatenada = concatenaValores(objeto);

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
