$(document).ready(function() {

    // Generate random number > 10

    var random = Math.floor(Math.random() * 30 + 10);
    console.log(random);
    var wins = 0;
    var losses= 0;
    var total = 0;
       

    function randomNumber() {
        document.querySelector("#random-number").innerHTML = random        
      }
      function currentTotal() {
        document.querySelector("#score").innerHTML = total        
      }
      function winning() {
        document.querySelector("#wins").innerHTML = "Wins: " + wins        
      }
      function losing() {
        document.querySelector("#losses").innerHTML = "Losses: " + losses        
      }
      function reset(){
		Random=Math.floor(Math.random()*101+19);
		console.log(Random)
		$('#random-Number').text(Random);
		total = 0;
		userScore=0;
		$('#totalScore').text(userScore);
	}
  
    // Generate gem numbers on click
    randomNumber();
    $("#jewel-1").on("click", function() {
        var number1 = Math.floor(Math.random() * 11 + 1);
        total = total + number1;
        currentTotal();        
        console.log(number1);
        console.log(total)
        if (total === random){
            wins++;
            winning();
            alert("yay")
        } else if (total > random){
            losses++;
            losing();
            alert("lost")

        }
    });
   
    $("#jewel-2").on("click", function() {
        var number2 = Math.floor(Math.random() * 11 + 1);
        total = total + number2;
        currentTotal();        
        console.log(number2);
        console.log(total)
        if (total === random){
            wins++;
            winning();
            reset();
            alert("yay")
        } else if (total > random){
            losses++;
            losing();
            reset();
            alert("lost")

        }
    });
    $("#jewel-3").on("click", function() {
        var number3 = Math.floor(Math.random() * 11 + 1);
        total = total + number3;
        currentTotal();        
        console.log(number3);
        console.log(total)
        if (total === random){
            wins++;
            winning();
            reset();
            alert("yay")
        } else if (total > random){
            losses++;
            losing();
            reset();
            alert("lost")

        }
    });
    $("#jewel-4").on("click", function() {
        var number4 = Math.floor(Math.random() * 11 + 1);
        total = total + number4;
        currentTotal();        
        console.log(number4);
        console.log(total) 
        if (total === random){
            wins++;
            winning();
            reset();
            alert("yay")
        } else if (total > random){
            losses++;
            losing();
            reset();
            alert("lost")

        }      
    });




});

