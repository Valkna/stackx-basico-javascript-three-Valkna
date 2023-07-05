// Retorna o dia da semana correspondente a um número
function retornaDiaSemana(number) {
  const dias = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  return dias[number - 1];
}

// Retorna o preço do produto com base no código de produto
function retornaPrecoProduto(code) {
  var precos = {
    1: 10.99,
    2: 15.99,
    3: 8.99,
    4: 12.99,
    5: 9.99,
  };

  if (code in precos) {
    return precos[code];
  } else {
    return "Código de produto inválido.";
  }
}
var codigoProduto = 3;
var preco = retornaPrecoProduto(codigoProduto);
console.log(preco);

// Retorna a categoria do produto com base no tipo de produto
function retornaCategoriaProduto(type) {
  var categorias = {
    A: "Eletrônicos",
    B: "Roupas",
    C: "Alimentos",
    D: "Móveis",
    E: "Brinquedos",
  };

  if (type in categorias) {
    return categorias[type];
  } else {
    return "Tipo de produto desconhecido.";
  }
}

// Exemplo de uso
var tipoProduto = "C";
var categoria = retornaCategoriaProduto(tipoProduto);
console.log(categoria);

module.exports = {
  retornaDiaSemana,
  retornaPrecoProduto,
  retornaCategoriaProduto,
};
