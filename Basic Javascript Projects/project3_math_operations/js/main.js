function addition() {
    var adding = 2+2;
    document.getElementById("math").innerHTML="2 + 2 = " + adding; //combined sting with function output
}

function subtraction() {
    var subtracting = 10-7;
    document.getElementById("math_2").innerHTML="10 - 7 = " + subtracting; //combined sting with function output
}

function multiplication() {
    var multiplying = 4*5;
    document.getElementById("math_3").innerHTML="4 * 5 = " + multiplying; //combined sting with function output
}

function division() {
    var dividing = 14/2;
    document.getElementById("math_4").innerHTML="14 / 2 = " + dividing; //combined sting with function output
}

function mathematics() {
    var more_math = (3+4)*6 + (4-2); //multiple math operation
    document.getElementById("math_5").innerHTML="(3+4)*6 + (4-2) = " + more_math; //combined sting with function output
}

function modulus() {
    var remainder = 23%4; // % divides and outputs remainder
    document.getElementById("math_6").innerHTML="when dividing 23 by 4, the remainder is " + remainder; //combined sting with function output
}

function negation() {
    var x = 6;
    document.getElementById("math_7").innerHTML="negative 6 in numerical: " + -x; //adds negative sign to value
}

var y=12;
y++; //adds in incremental value
document.write(y);

var z=9;
z--; //subtracts in incremental value
document.write(z);

window.alert(Math.random()); //window alert box, picks a random number
window.alert(Math.random() *50); //window alert box, picks random number between determined value
