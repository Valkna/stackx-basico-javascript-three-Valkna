// Retorna o dia da semana correspondente a um número
function retornaDiaSemana(number) {
    let day;
    
    switch (number) {
        case 1:
        day = 'Domingo';
        break;
        case 2:
        day = 'Segunda-feira';
        break;
        case 3:
        day = 'Terça-feira';
        break;
        case 4:
        day = 'Quarta-feira';
        break;
        case 5:
        day = 'Quinta-feira';
        break;
        case 6:
        day = 'Sexta-feira';
        break;
        case 7:
        day = 'Sábado';
        break;
        default:
        day = 'Número inválido';
    }
    
    return day;
}

// Retorna o preço do produto com base no código de produto
function retornaPrecoProduto(code) {
    let price;
    
    switch (code) {
        case 'A':
        price = 10.99;
        break;
        case 'B':
        price = 5.99;
        break;
        case 'C':
        price = 7.5;
        break;
        default:
        price = 'Código inválido';
    }
    
    return price;
}

// Retorna a categoria do produto com base no tipo de produto
function retornaCategoriaProduto(type) {
    let category;
    
    switch (type) {
        case 'Eletrônicos':
        category = 'Tecnologia';
        break;
        case 'Roupas':
        category = 'Moda';
        break;
        case 'Alimentos':
        category = 'Alimentação';
        break;
        default:
        category = 'Categoria desconhecida';
    }
    
    return category;
}

module.exports = { retornaDiaSemana, retornaPrecoProduto, retornaCategoriaProduto };