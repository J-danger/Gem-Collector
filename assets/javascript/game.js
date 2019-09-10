$(document).ready(function() {

    // Generate random number > 10

    var random = Math.floor(Math.random() * 30 + 10);
    console.log(random);
    var wins = 0;
    var losses= 0;

    function correctAnswer() {
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
      }

    // Generate gem numbers on click
    
    $("#jewel-1").on("click", function() {
        var number1 = Math.floor(Math.random() * 11);
        console.log(number1);
    });
    $("#jewel-2").on("click", function() {
        var number2 = Math.floor(Math.random() * 11);
        console.log(number2);
      
    });
    $("#jewel-3").on("click", function() {
        var number3 = Math.floor(Math.random() * 11);
        console.log(number3);
       
    });
    $("#jewel-4").on("click", function() {
        var number4 = Math.floor(Math.random() * 11);
        console.log(number4);
        
    });


});

