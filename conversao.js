// Converte uma string para um número inteiro
function convertToInt(string) {
  return parseInt(string);
}
var numeroString = "123";
var numeroInteiro = convertToInt(numeroString);
console.log(numeroInteiro);

// Converte um número inteiro para uma string
function convertToString(number) {
  return number.toString();
}
var numeroInteiro = 123;
var numeroString = convertToString(numeroInteiro);
console.log(numeroString);

// Converte um valor para um booleano
function convertToBoolean(value) {
  return !!value;
}
var valor1 = 0;
var booleano1 = convertToBoolean(valor1);
console.log(booleano1);

var valor2 = "Hello";
var booleano2 = convertToBoolean(valor2);
console.log(booleano2);

var valor3 = null;
var booleano3 = convertToBoolean(valor3);
console.log(booleano3);

module.exports = { convertToInt, convertToString, convertToBoolean };
