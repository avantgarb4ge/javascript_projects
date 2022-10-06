function full_sentence() {
    var part_1 = "I have "; //establishing variable name and value
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //compiling all previous variables together
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

function slice_method() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27,33); //slice picks which range of characters to display
    document.getElementById("slice").innerHTML = section;
}

function big_letters() {
    let text = "Hello World!";
    let result = text.toUpperCase(); //changes all text to uppercase letters
    document.getElementById("allcaps").innerHTML = result;
}

function scavenge() {
    let text = "The sea has seashells for all to sea.";
    let position = text.search("sea"); //searches the first instance that specified word appears and displays character location
    document.getElementById("hunt").innerHTML = position;
}

function string_method() {
    var x = 279;
    document.getElementById("numbers_to_string").innerHTML = x.toString(); //returns number to a string
}

function precision_method() {
    var y = 23.29471375;
    document.getElementById("precision").innerHTML = y.toPrecision(6); //displayes sepcified amount of numbers while rounding up if needed
}

function convert() {
    var z = 35.793947;
    document.getElementById("fix_it").innerHTML = z.toFixed(2); //displays up to specified decimal placement
}

function primitive() {
    var text = "Quesorito of course";
    document.getElementById("valuable").innerHTML = text.valueOf(); //displays value of string or converts string object into string
}