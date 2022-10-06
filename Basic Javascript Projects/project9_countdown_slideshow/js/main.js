function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1; //subtracts 1 from seconds everytime the program runs
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); //program is pausing for 1000 ms
        if (seconds == -1) {
            alert("Time's up!"); //displayes window alert box when countdown reaches 0
            clearTimeout(time); //clears timer from settimerout, stops timer
            timer.innerHTML = "";
        }
    }
    tick(); //runs program
}
