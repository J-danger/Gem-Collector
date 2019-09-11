$(document).ready(function() {

    // Generate random number > 10

    var random = Math.floor(Math.random() * 30 + 10);
    console.log(random);
    var wins = 0;
    var losses= 0;
   

    function randomNumber() {
        document.querySelector("#random-number").innerHTML = random
        
      }
    //   function attempts() {
    //     document.querySelector("#guesses").innerHTML = "Guesses: " + guesses;
    //   }
    // Generate gem numbers on click
    randomNumber();
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

