var x = 4; //global variable
function multiply_1() {
    document.write(3*x + "<br>");
}
function multiply_2() {
    document.write(7*x + "<br>");
}
multiply_1(); //asking to run function
multiply_2();

function subtracting_1() {
    var z = 11; //local variable
    console.log(z - 9 + "<br>");
}
function subtracting_2() {
    console.log(z-5 + "<br>");
}

subtracting_1();
subtracting_2();

function time_func() {
    if (new Date().getHours() <19) { //establishing parameters for response
        document.getElementById("scoping").innerHTML = "How was your day?"; //setting response
    }
}

function conditional() {
    if (14>5) {
        document.getElementById("statement").innerHTML="Congrats! You won!";
    }
}

function food_function() {
    answer = document.getElementById("yes_or_no").value;
    if (answer === "yes") { //comparing input value to "yes"
        reward = "Good job! Keep yourself fed."; //produced response IF value is yes
    }
    else {
        reward = "You can have banana bread."; //produced response IF value is something other than yes
    }
    document.getElementById("food_response").innerHTML = reward;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) { //comparing current time to parameters
        Reply = "It is morning time!"; //produced response IF time is in parameters
    }
    else if (Time >= 12 == Time < 18) { //comparing current time to parameters
        Reply = "It is afternoon time.";
    }
    else {
        Reply = "It is evening time."; //comparing current time to parameters
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}