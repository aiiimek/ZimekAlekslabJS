// myMathModule2.js - wersja obiektowa

function MyMathModule(precision) {
    this.precision = precision || 2;
}

MyMathModule.prototype.round = function(num) {
    const multiplier = Math.pow(10, this.precision);
    return Math.round(num * multiplier) / multiplier;
}

MyMathModule.prototype.add = function(a, b) {
    return this.round(a + b);
}

MyMathModule.prototype.subtract = function(a, b) {
    return this.round(a - b);
}

MyMathModule.prototype.multiply = function(a, b) {
    return this.round(a * b);
}

MyMathModule.prototype.divide = function(a, b) {
    if (b === 0) {
        throw new Error('Nie można dzielić przez zero!');
    }
    return this.round(a / b);
}

MyMathModule.prototype.power = function(a, b) {
    return this.round(Math.pow(a, b));
}

MyMathModule.prototype.sqrt = function(a) {
    if (a < 0) {
        throw new Error('Nie można obliczyć pierwiastka z liczby ujemnej!');
    }
    return this.round(Math.sqrt(a));
}

MyMathModule.prototype.abs = function(a) {
    return Math.abs(a);
}

module.exports = MyMathModule;