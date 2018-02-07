// Finds the highest common factor of 2 numbers
function highestCommonFactor(a, b) {
    if (b == 0) {
        return a;
    }
    return highestCommonFactor(b, a%b);
}
function leastCommonMultiple(a,b) {
    return a*b/(highestCommonFactor(a,b));
}

// Input fractions to add ////////////////////////////////
// Fraction 1 = 2/6
var fraction1Numerator = 2;
var fraction1Denominator = 6;

// Fraction 2 = 1/2
var fraction2Numerator = 1;
var fraction2Denominator = 2;
////////////////////////////////////////////////////////////////

// Find the highest common factor of both denominators
var commonMultiple = leastCommonMultiple(fraction1Denominator, fraction2Denominator);

fraction1Numerator   *= (commonMultiple / fraction1Denominator);
fraction2Numerator   *= (commonMultiple / fraction2Denominator);

// Display solution
//document.getElementById("divSolution").innerText = fraction1Numerator + "/" + commonMultiple + " + " + fraction2Numerator + "/" + commonMultiple;








function add() {
    return (n1 / d1) + (n2 / d2);
}


var gcd = function (a, b) {
    if (b < 0.0000001) return a;                // Since there is a limited precision we need to limit the value.

    return gcd(b, Math.floor(a % b));           // Discard any fractions due to limitations in precision.
};


var fraction = add();
var len = fraction.toString().length - 2;

var denominator = Math.pow(10, len);
var numerator = fraction * denominator;

var divisor = gcd(numerator, denominator);    // Should be 5

numerator /= divisor;                         // Should be 687
denominator /= divisor;                       // Should be 2000

//console.log(Math.floor(numerator) + '/' + Math.floor(denominator));

