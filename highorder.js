// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.

function dobrarNumeros(numeros) {
    return numeros.map(numero => numero * 2);
}

function somarValores(numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

function filtrarPares(numeros) {
    return numeros.filter(numero => numero % 2 === 0);
}

module.exports = {
    dobrarNumeros,
    somarValores,
    filtrarPares
};