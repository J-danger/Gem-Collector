$(document).ready(function () {

    // Generate random number > 10

    var random = Math.floor(Math.random() * 30 + 10);
    console.log(random);
    var wins = 0;
    var losses = 0;
    var total = 0;
    var number1 = Math.floor(Math.random() * 11 + 1);
    console.log(number1);
    var number2 = Math.floor(Math.random() * 11 + 1);
    console.log(number2);
    var number3 = Math.floor(Math.random() * 11 + 1);
    console.log(number3);
    var number4 = Math.floor(Math.random() * 11 + 1);
    console.log(number4);



    function randomNumber() {
        document.querySelector("#random-number").innerHTML = "Goal: " + random;
    }
    function currentTotal() {
        document.querySelector("#score").innerHTML =  total;
    }
    function winning() {
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
    }
    function losing() {
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
    }
    function playAgain() {
        document.querySelector("#score").innerHTML = "Play Again!";
    }
    function resetLose() {
        random = Math.floor(Math.random() * 30 + 10);        
        $('#random-number').text( "Goal: " + random);
        total = 0;
        number1 = Math.floor(Math.random() * 11 + 1);
        console.log(number1);
        number2 = Math.floor(Math.random() * 11 + 1);
        console.log(number2);
        number3 = Math.floor(Math.random() * 11 + 1);
        console.log(number3);
        number4 = Math.floor(Math.random() * 11 + 1);
        console.log(number4);
        // alert("Try again!")
        currentTotal();
    }
    function resetWin() {
        random = Math.floor(Math.random() * 30 + 10);        
        $('#random-number').text( "Goal: " + random);
        total = 0;
        number1 = Math.floor(Math.random() * 11 + 1);
        console.log(number1);
        number2 = Math.floor(Math.random() * 11 + 1);
        console.log(number2);
        number3 = Math.floor(Math.random() * 11 + 1);
        console.log(number3);
        number4 = Math.floor(Math.random() * 11 + 1);
        console.log(number4);
        // alert("You win! Play Again?")
        currentTotal();
        
        
    }


    // Generate gem numbers on click
    randomNumber();
    $("#jewel-1").on("click", function () {
        
        total = total + number1;
        currentTotal();
       
        console.log(total)
        if (total === random) {
            wins++;
            winning();
            resetWin();
            
        } else if (total > random) {
            losses++;
            losing();
            resetLose();

        }
    });

    $("#jewel-2").on("click", function () {
        
        total = total + number2;
        currentTotal();
        // console.log(number2);
        console.log(total)
        if (total === random) {
            wins++;
            winning();
            resetWin();

        } else if (total > random) {
            losses++;
            losing();
            resetLose();


        }
    });
    $("#jewel-3").on("click", function () {
        
        total = total + number3;
        currentTotal();
        // console.log(number3);
        console.log(total)
        if (total === random) {
            wins++;
            winning();
            resetWin();


        } else if (total > random) {
            losses++;
            losing();
            resetLose();

        }
    });
    $("#jewel-4").on("click", function () {
       
        total = total + number4;
        currentTotal();
        // console.log(number4);
        console.log(total)
        if (total === random) {
            wins++;
            winning();
            resetWin();



        } else if (total > random) {
            losses++;
            losing();
            resetLose();

        }
    });
  
  
});