let Currency = function(usd, eur, gbp, jpy, chf) {
    this.usd = usd;
    this.eur = eur;
    this.gbp = gbp;
    this.jpy = jpy;
    this.chf = chf;
}

Currency.prototype.roundTwoDecimals = function(amount) {
    return Math.round(amount * 100) / 100;
}

Currency.prototype.usdToPLN = function(us) {
    return this.roundTwoDecimals(us * this.usd);
}

Currency.prototype.eurToPLN = function(euro) {
    return this.roundTwoDecimals(euro * this.eur);
}

Currency.prototype.gbpToPLN = function(pound) {
    return this.roundTwoDecimals(pound * this.gbp);
}

Currency.prototype.jpyToPLN = function(yen) {
    return this.roundTwoDecimals(yen * this.jpy);
}

Currency.prototype.chfToPLN = function(frank) {
    return this.roundTwoDecimals(frank * this.chf);
}

module.exports = Currency;
