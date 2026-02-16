// 1. Tasas de conversión (Ponlas arriba para que estén disponibles)
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

// 2. Definición de funciones
const sum = (a, b) => {
    return a + b;
}

const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs["USD"];
}

const fromDollarToYen = (dollarAmount) => {
    let euroAmount = dollarAmount / oneEuroIs["USD"];
    return euroAmount * oneEuroIs["JPY"];
}

const fromYenToPound = (yenAmount) => {
    let euroAmount = yenAmount / oneEuroIs["JPY"];
    return euroAmount * oneEuroIs["GBP"];
}

// 3. UN SOLO export al final con TODO
module.exports = { 
    sum, 
    fromEuroToDollar, 
    fromDollarToYen, 
    fromYenToPound 
};