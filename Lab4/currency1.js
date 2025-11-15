// Kursy walut do PLN
const usd = 4.10;
const eur = 4.45;
const gbp = 5.20;
const jpy = 0.027;
const chf = 4.65;

function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}

exports.usdToPLN = function(us) {
    return roundTwoDecimals(us * usd);
}

exports.eurToPLN = function(euro) {
    return roundTwoDecimals(euro * eur);
}

exports.gbpToPLN = function(pound) {
    return roundTwoDecimals(pound * gbp);
}

exports.jpyToPLN = function(yen) {
    return roundTwoDecimals(yen * jpy);
}

exports.chfToPLN = function(frank) {
    return roundTwoDecimals(frank * chf);
}