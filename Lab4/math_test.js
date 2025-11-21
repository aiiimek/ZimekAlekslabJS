// math_test.js - test modułów matematycznych z readline

const readline = require('readline');
const math1 = require('./myMathModule1');
const MyMathModule = require('./myMathModule2');
const math2 = new MyMathModule(2);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('=== KALKULATOR MATEMATYCZNY ===\n');

rl.question('Podaj pierwszą liczbę: ', function(num1) {
    rl.question('Podaj drugą liczbę: ', function(num2) {
        
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        
        console.log('\n--- Wersja 1 (exports) ---');
        console.log(`${a} + ${b} = ${math1.add(a, b)}`);
        console.log(`${a} - ${b} = ${math1.subtract(a, b)}`);
        console.log(`${a} * ${b} = ${math1.multiply(a, b)}`);
        console.log(`${a} / ${b} = ${math1.divide(a, b)}`);
        console.log(`${a} ^ ${b} = ${math1.power(a, b)}`);
        console.log(`√${a} = ${math1.sqrt(a)}`);
        console.log(`|${a}| = ${math1.abs(a)}`);
        
        console.log('\n--- Wersja 2 (OOP) ---');
        console.log(`${a} + ${b} = ${math2.add(a, b)}`);
        console.log(`${a} - ${b} = ${math2.subtract(a, b)}`);
        console.log(`${a} * ${b} = ${math2.multiply(a, b)}`);
        console.log(`${a} / ${b} = ${math2.divide(a, b)}`);
        console.log(`${a} ^ ${b} = ${math2.power(a, b)}`);
        console.log(`√${a} = ${math2.sqrt(a)}`);
        console.log(`|${a}| = ${math2.abs(a)}`);
        
        rl.close();
    });
});

rl.on('close', function() {
    process.exit(0);
});