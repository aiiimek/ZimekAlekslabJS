// Wersja 1: referencje do obiektu exports
const currency1 = require('./currency1');

console.log('Wersja 1 - exports:');
console.log('100 USD = ' + currency1.usdToPLN(100) + ' PLN');
console.log('100 EUR = ' + currency1.eurToPLN(100) + ' PLN');
console.log('100 GBP = ' + currency1.gbpToPLN(100) + ' PLN');
console.log('1000 JPY = ' + currency1.jpyToPLN(1000) + ' PLN');
console.log('100 CHF = ' + currency1.chfToPLN(100) + ' PLN');

// Wersja 2: podejście obiektowe
const Currency = require('./currency2');
const currency2 = new Currency(4.10, 4.45, 5.20, 0.027, 4.65);

console.log('\nWersja 2 - OOP:');
console.log('100 USD = ' + currency2.usdToPLN(100) + ' PLN');
console.log('100 EUR = ' + currency2.eurToPLN(100) + ' PLN');
console.log('100 GBP = ' + currency2.gbpToPLN(100) + ' PLN');
console.log('1000 JPY = ' + currency2.jpyToPLN(1000) + ' PLN');
console.log('100 CHF = ' + currency2.chfToPLN(100) + ' PLN');