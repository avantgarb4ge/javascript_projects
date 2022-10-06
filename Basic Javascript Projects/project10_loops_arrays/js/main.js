function call_loop() {
    var digit= ""
    let x = 1; //utilized let keyword
    while (x < 10) { //established parameters for while loop
        digit += "<br>" + x; //keep adding the value of x
        x++; //add in increments
    }
    document.getElementById("loop").innerHTML = digit;
}

function measurement() {
    var y = "I am enjoying javascript!";
    document.getElementById("length_prop").innerHTML = y.length; //called for length of string
}

var cakes = ["vanilla", "chococlate", "lemon", "red velvet", "strawberry"];
var content = "";
var y;
function cake_flavors() {
    for (y = 0; y < cakes.length; y++) { //for loop
        content += cakes[y] + "<br>";
    }
    document.getElementById("cakes").innerHTML = content; //outputs all variable values
}

function array_function() {
    var dogs = []; //establishes index values for array
    dogs[0] = "shiba inu";
    dogs[1] = "border collie";
    dogs[2] = "german shepherd";
    dogs[3] = "pug";
    document.getElementById("array").innerHTML = "This is a photo of a " + dogs[3] + ".";
}

function constant_function() {
    const clothing = {type:"skirt", brand:"Gap", length:"50 cm"} //assignes property values to const
    clothing.color = "burgundy"; //added new property value
    clothing.brand = "Tilly's" //changed one value
    document.getElementById("constant").innerHTML = "The length of the " + clothing.brand + 
    " skirt is " + clothing.length + ".";
}

let pie = {
    size: "9 in ", //adding properties and values to pie
    flavor: "pecan ",
    baker: "myself ",
    toppings: "vanilla ice cream ",
    description: function () { //establishing a method utlizing this and return
        return "This " + this.size + this.flavor + "pie is topped with " + this.toppings + "and is made by " + this.baker;
    }
};
document.getElementById("object_and_return").innerHTML = pie.description (); //HERE IS THE ERROR