function myBakery () {
    var cake = { //for multiple KVP
        flavor:"vanilla",
        tiers:1,
        frosting:"coconut buttercream",
        color:"yellow",
        writing:"happy birthday",
    };
    delete cake.flavor; //deletes KVP, later produces as undefined
    document.getElementById("dictionary").innerHTML = cake.flavor; //specifies which kvp to produce
}

