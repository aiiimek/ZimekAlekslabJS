const events = require('events');
const fs = require('fs');
const path = require('path');

// Ścieżki do katalogów
const watchDir = './watch';
const processedDir = './done';

// Klasa Watcher dziedzicząca po EventEmitter
class Watcher extends events.EventEmitter {
    constructor(watchDir, processedDir) {
        super();
        this.watchDir = watchDir;
        this.processedDir = processedDir;
    }

    // Metoda watch - skanuje katalog i emituje zdarzenia
    watch() {
        fs.readdir(this.watchDir, (err, files) => {
            if (err) {
                console.error('Błąd odczytu katalogu:', err);
                return;
            }

            // Przetwarzanie każdego pliku
            for (const file of files) {
                this.emit('process', file);
            }
        });
    }

    // Metoda start - rozpoczyna monitorowanie
    start() {
        console.log(`Monitorowanie katalogu: ${this.watchDir}`);
        
        // Monitoruj zmiany w katalogu
        fs.watchFile(this.watchDir, { interval: 1000 }, () => {
            this.watch();
        });

        // Pierwsze skanowanie przy starcie
        this.watch();
    }

    // Metoda stop - zatrzymuje monitorowanie
    stop() {
        fs.unwatchFile(this.watchDir);
        console.log('Zatrzymano monitorowanie');
    }
}

// Utworzenie instancji Watcher
const watcher = new Watcher(watchDir, processedDir);

// Obsługa zdarzenia 'process'
watcher.on('process', function(file) {
    const watchFile = path.join(this.watchDir, file);
    const processedFile = path.join(this.processedDir, file.toLowerCase());

    console.log(`Przetwarzanie: ${file} -> ${file.toLowerCase()}`);

    // Przeniesienie i zmiana nazwy pliku
    fs.rename(watchFile, processedFile, (err) => {
        if (err) {
            console.error(`Błąd przenoszenia pliku ${file}:`, err.message);
            return;
        }
        console.log(` Przetworzono: ${file}`);
    });
});

// Obsługa błędów
watcher.on('error', (err) => {
    console.error('Wystąpił błąd:', err);
});

// Funkcja sprawdzajaca istnienie katalogów, jeśli nie ma to je tworzy
function ensureDirectoriesExist() {
    [watchDir, processedDir].forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`Utworzono katalog: ${dir}`);
        }
    });
}

// 
ensureDirectoriesExist();
watcher.start();

// Zamykanie aplikacji
process.on('SIGINT', () => {
    console.log('\nZamykanie aplikacji...');
    watcher.stop();
    process.exit(0);
});