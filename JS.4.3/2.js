var gcd = function(a, b) {
    if (b < 0.0000001) return a;                // Since there is a limited precision we need to limit the value.

    return gcd(b, Math.floor(a % b));           // Discard any fractions due to limitations in precision.
};

var fraction = 0.343775;
var len = fraction.toString().length - 2;

var denominator = Math.pow(10, len);
var numerator = fraction * denominator;

var divisor = gcd(numerator, denominator);    // Should be 5

numerator /= divisor;                         // Should be 687
denominator /= divisor;                       // Should be 2000

alert(Math.floor(numerator) + '/' + Math.floor(denominator));