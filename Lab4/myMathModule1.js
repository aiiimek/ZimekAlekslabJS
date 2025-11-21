// myMathModule1.js - wersja z exports

function roundTwoDecimals(num) {
    return Math.round(num * 100) / 100;
}

// Dodawanie
exports.add = function(a, b) {
    return roundTwoDecimals(a + b);
}

// Odejmowanie
exports.subtract = function(a, b) {
    return roundTwoDecimals(a - b);
}

// Mnożenie
exports.multiply = function(a, b) {
    return roundTwoDecimals(a * b);
}

// Dzielenie
exports.divide = function(a, b) {
    if (b === 0) {
        throw new Error('Nie można dzielić przez zero!');
    }
    return roundTwoDecimals(a / b);
}

// Potęgowanie
exports.power = function(a, b) {
    return roundTwoDecimals(Math.pow(a, b));
}

// Pierwiastek kwadratowy
exports.sqrt = function(a) {
    if (a < 0) {
        throw new Error('Nie można obliczyć pierwiastka z liczby ujemnej!');
    }
    return roundTwoDecimals(Math.sqrt(a));
}

// Wartość bezwzględna
exports.abs = function(a) {
    return Math.abs(a);
}