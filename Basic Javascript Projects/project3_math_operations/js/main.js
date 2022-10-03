function addition() {
    var adding = 2+2;
    document.getElementById("math").innerHTML="2 + 2 = " + adding;
}

function subtraction() {
    var subtracting = 10-7;
    document.getElementById("math_2").innerHTML="10 - 7 = " + subtracting;
}

function multiplication() {
    var multiplying = 4*5;
    document.getElementById("math_3").innerHTML="4 * 5 = " + multiplying;
}

function division() {
    var dividing = 14/2;
    document.getElementById("math_4").innerHTML="14 / 2 = " + dividing;
}

function mathematics() {
    var more_math = (3+4)*6 + (4-2);
    document.getElementById("math_5").innerHTML="(3+4)*6 + (4-2) = " + more_math;
}

function modulus() {
    var remainder = 23%4;
    document.getElementById("math_6").innerHTML="when dividing 23 by 4, the remainder is " + remainder;
}

function negation() {
    var x = 6;
    document.getElementById("math_7").innerHTML="negative 6 in numerical: " + -x;
}

var y=12;
y++;
document.write(y);

var z=9;
z--;
document.write(z);

window.alert(Math.random());
window.alert(Math.random() *50);
