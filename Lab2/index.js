const isBlank = require('is-string-blank');


console.log('MODUŁ: is-string-blank');

console.log('CO TO JEST?');
console.log('- Moduł do sprawdzania czy string jest pusty lub zawiera tylko białe znaki\n');

console.log('DO CZEGO SŁUŻY?');
console.log('- Sprawdza czy tekst jest rzeczywiście pusty');
console.log('- Wykrywa stringi zawierające tylko spacje, tabulatory, enters');
console.log('- Pomocny przy walidacji formularzy\n');

console.log('KIEDY UŻYWAMY?');
console.log('- Walidacja pól formularzy (np. czy użytkownik coś wpisał)');
console.log('- Sprawdzanie czy dane wejściowe są poprawne');
console.log('- Czyszczenie danych przed zapisem do bazy\n');


console.log('PRZYKŁADY UŻYCIA:');


// pusty string
console.log('PRZYKŁAD 1 - Pusty string:');
console.log('isBlank(""):', isBlank(''));
console.log('');

// same spacje
console.log('PRZYKŁAD 2 - Same spacje:');
console.log('isBlank("   "):', isBlank('   '));
console.log('');

// string z tekstem
console.log('PRZYKŁAD 3 - Normalny tekst:');
console.log('isBlank("Hello"):', isBlank('Hello'));
console.log('');


// tekst ze spacjami
console.log('PRZYKŁAD 5 - Tekst ze spacjami na końcu:');
console.log('isBlank("  Tekst  "):', isBlank('  Tekst  '));
console.log('');

console.log('========================================');
console.log('ZASTOSOWANIE PRAKTYCZNE:');
console.log('========================================\n');
