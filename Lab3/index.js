const http = require('http');
const fs = require('fs');

// Funkcja obsługi błędów
function hadError(err, res) {
    console.error(err);
    res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('Błąd serwera: ' + err.message);
}

// Funkcja generująca HTML
function formatHtml(titles, tmpl, res) {
    const html = tmpl.replace('%', titles.join('</li><li>'));
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(html);
}

// Funkcja pobierająca szablon
function getTemplate(titles, res) {
    fs.readFile('./template.html', function(err, data) {
        if (err) return hadError(err, res);
        
        const tmpl = data.toString();
        formatHtml(titles, tmpl, res);
    });
}

// Funkcja pobierająca tytuły
function getTitles(res) {
    fs.readFile('./titles.json', function(err, data) {
        if (err) return hadError(err, res);
        
        const titles = JSON.parse(data.toString());
        getTemplate(titles, res);
    });
}

// Serwer HTTP
http.createServer(function(req, res) {
    if (req.url === '/') {
        getTitles(res);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end('Strona nie znaleziona');
    }
}).listen(8000, "127.0.0.1", function() {
    console.log('Serwer nasłuchuje na http://127.0.0.1:8000');
});