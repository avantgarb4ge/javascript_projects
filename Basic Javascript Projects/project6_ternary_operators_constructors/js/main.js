function Ride_Function() {
    var Height, Can_ride; //stating two variables
    Height = document.getElementById("Height").value; //variable height placed in the input box in html
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //2 outputs depending on true or false
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //eventual output after user interacts
}

function age_validation() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age > 17) ? "You can vote!":"You are not old enough to vote";
    document.getElementById("vote").innerHTML = can_vote;
}

function vehicle(make, model, year, color) { //determining class and its variables
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var Jack = new vehicle("Dodge", "Viper", 2020, "Red"); //adding new labels that fit class variables
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");
function some_cars() {
    document.getElementById("keywords_and_constructors").innerHTML = 
    "Erik drives a " + Erik.vehicle_color + "-colored" + Erik.vehicle_vodel +
    "manufactured in " + Erik.vehicle_year;
}

function sport_drink(brand, flavor, price) {
    this.brand = brand;
    this.flavor = flavor;
    this.price = price;
}
var vitarain = new sport_drink("kirkland", "dragonfruit", 2)
function electrolyte() {
    document.getElementById("New_and_This").innerHTML = 
    "The best sport drink available is the " + vitarain.flavor + " flavored drink by " +
    vitarain.brand + " that costs $" + vitarain.price;
}

function counting() {
    document.getElementById("Nested_Function").innerHTML = counting_more(); //calling nested function
        function counting_more() {
            let counter=0;
            function plus() {counter +=1;}
            plus();
            return counter;
        }
}