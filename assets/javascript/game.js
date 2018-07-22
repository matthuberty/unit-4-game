
$(document).ready(function () {
    //When the script loads, create a new random number from the PC.
    //This number will be positive when the script loads. Number should be between 19 and 120.   
    var intRandNumComputer = Math.floor(Math.random() * 119) + 1;
    console.log("intRandNumComputer:  " + intRandNumComputer);
    //Put the random number in the randomPC output div.
    $("#randomPC").html("<br>  " + intRandNumComputer);
    //Generate some random numbers for the amount of points to assign to each gem.  
    var intRedPoints = Math.floor(Math.random() * 12) + 1;
    var intBluePoints = Math.floor(Math.random() * 12) + 1;
    var intYellowPoints = Math.floor(Math.random() * 12) + 1;
    var intGreenPoints = Math.floor(Math.random() * 12) + 1;
    //Show how the gem values are seeded:
    console.log("Red points:  " + intRedPoints);
    console.log("Blue points:  " + intBluePoints);
    console.log("Yellow points:  " + intYellowPoints);
    console.log("Green points:  " + intGreenPoints);
    //Make the intUserTotal = 0 upon script loading.
    var intUserTotal = 0;
    console.log("intUserTotal:  " + intUserTotal);
    //Declare some Win and Loss counts, so as to keep track of wins and losses.
    var intNumWins = 0;
    console.log("intNumWins:  " + intNumWins);
    var intNumLosses = 0;
    console.log("intNumLosses:  " + intNumLosses);
    //Display some output about wins and losses.
    $("#winslosses").html("Wins:  " + intNumWins + "<br>Losses:  " + intNumLosses);
    
    $(".container").on("click", ".btn-red", function () {
        //alert("You pressed the red button");
        intUserTotal += intRedPoints;
        console.log("New intUserTotal:  " + intUserTotal);
        if (intRandNumComputer > intUserTotal) {
            //The user has neither won nor lost
            //Display to the user his/her new point total
            $("#userscore").text("" + intUserTotal);
            //Display a message to the user
            $("#message").text("Your total score is:  ");
        }
        else if (intRandNumComputer === intUserTotal) {
            //This user has won!
            //Increment the global variable, intNumWins
            intNumWins++;
            //Display his/her win on the screen
            $("#winslosses").html("User wins!<br>Wins:  " + intNumWins + "<br>Losses:  " + intNumLosses);
            //Generate a new random number from the computer and display it.  
            //Bound between 19 and 120
            intRandNumComputer = Math.floor(Math.random() * 119) + 1;
            console.log("intRandNumComputer:  " + intRandNumComputer);
            //Display the random number in the randomPC output div.
            $("#randomPC").html("<br>  " + intRandNumComputer);
            //Reset the points on the user total
            intUserTotal = 0;
            //Generate some random numbers for the amount of points to assign to each gem.  
            intRedPoints = Math.floor(Math.random() * 12) + 1;
            intBluePoints = Math.floor(Math.random() * 12) + 1;
            intYellowPoints = Math.floor(Math.random() * 12) + 1;
            intGreenPoints = Math.floor(Math.random() * 12) + 1;
            console.log("New Red point value:  " + intRedPoints);
            console.log("New Blue point value:  " + intBluePoints);
            console.log("New Yellow point value:  " + intYellowPoints);
            console.log("New Green point value:  " + intGreenPoints);
            //Display to the user his/her new point total
            $("#userscore").text("" + intUserTotal);
            //Display a message to the user
            $("#message").text("Your total score is:  ");
        }
        else if (intRandNumComputer < intUserTotal) {
            //The user has lost! 
            //Increment the global variable, intNumLosses
            intNumLosses++;
            //Display this result to the user
            $("#winslosses").html("User loses!<br>Wins:  " + intNumWins + "<br>Losses:  " + intNumLosses);
            //Generate a new random number from the computer and display it.  
            //Bound between 19 and 120
            intRandNumComputer = Math.floor(Math.random() * 119) + 1;
            console.log("intRandNumComputer:  " + intRandNumComputer);
            //Display the random number in the randomPC output div.
            $("#randomPC").html("<br>  " + intRandNumComputer);
            //Reset the points on the user total
            intUserTotal = 0;
            //Generate some random numbers for the amount of points to assign to each gem.  
            intRedPoints = Math.floor(Math.random() * 12) + 1;
            intBluePoints = Math.floor(Math.random() * 12) + 1;
            intYellowPoints = Math.floor(Math.random() * 12) + 1;
            intGreenPoints = Math.floor(Math.random() * 12) + 1;
            console.log("New Red point value:  " + intRedPoints);
            console.log("New Blue point value:  " + intBluePoints);
            console.log("New Yellow point value:  " + intYellowPoints);
            console.log("New Green point value:  " + intGreenPoints);
            //Display to the user his/her new point total
            $("#userscore").text("" + intUserTotal);
            //Display a message to the user
            $("#message").text("Your total score is:  ");
        }
    });
    $(".container").on("click", ".btn-blue", function () {
        //alert("You pressed the red button");
        intUserTotal += intBluePoints;
        console.log("New intUserTotal:  " + intUserTotal);
        if (intRandNumComputer > intUserTotal) {
            //The user has neither won nor lost
            //Display to the user his/her new point total
            $("#userscore").text("" + intUserTotal);
            //Display a message to the user
            $("#message").text("Your total score is:  ");
        }
        else if (intRandNumComputer === intUserTotal) {
            //This user has won!
            //Increment the global variable, intNumWins
            intNumWins++;
            //Display his/her win on the screen
            $("#winslosses").html("User wins!<br>Wins:  " + intNumWins + "<br>Losses:  " + intNumLosses);
            //Generate a new random number from the computer and display it.  
            //Bound between 19 and 120
            intRandNumComputer = Math.floor(Math.random() * 119) + 1;
            console.log("intRandNumComputer:  " + intRandNumComputer);
            //Display the random number in the randomPC output div.
            $("#randomPC").html("<br>  " + intRandNumComputer);
            //Reset the points on the user total
            intUserTotal = 0;
            //Generate some random numbers for the amount of points to assign to each gem.  
            intRedPoints = Math.floor(Math.random() * 12) + 1;
            intBluePoints = Math.floor(Math.random() * 12) + 1;
            intYellowPoints = Math.floor(Math.random() * 12) + 1;
            intGreenPoints = Math.floor(Math.random() * 12) + 1;
            console.log("New Red point value:  " + intRedPoints);
            console.log("New Blue point value:  " + intBluePoints);
            console.log("New Yellow point value:  " + intYellowPoints);
            console.log("New Green point value:  " + intGreenPoints);
            //Display to the user his/her new point total
            $("#userscore").text("" + intUserTotal);
            //Display a message to the user
            $("#message").text("Your total score is:  ");
        }
        else if (intRandNumComputer < intUserTotal) {
            //The user has lost! 
            //Increment the global variable, intNumLosses
            intNumLosses++;
            //Display this result to the user
            $("#winslosses").html("User loses!<br>Wins:  " + intNumWins + "<br>Losses:  " + intNumLosses);
            //Generate a new random number from the computer and display it.  
            //Bound between 19 and 120
            intRandNumComputer = Math.floor(Math.random() * 119) + 1;
            console.log("intRandNumComputer:  " + intRandNumComputer);
            //Display the random number in the randomPC output div.
            $("#randomPC").html("<br>  " + intRandNumComputer);
            //Reset the points on the user total
            intUserTotal = 0;
            //Generate some random numbers for the amount of points to assign to each gem.  
            intRedPoints = Math.floor(Math.random() * 12) + 1;
            intBluePoints = Math.floor(Math.random() * 12) + 1;
            intYellowPoints = Math.floor(Math.random() * 12) + 1;
            intGreenPoints = Math.floor(Math.random() * 12) + 1;
            console.log("New Red point value:  " + intRedPoints);
            console.log("New Blue point value:  " + intBluePoints);
            console.log("New Yellow point value:  " + intYellowPoints);
            console.log("New Green point value:  " + intGreenPoints);
            //Display to the user his/her new point total
            $("#userscore").text("" + intUserTotal);
            //Display a message to the user
            $("#message").text("Your total score is:  ");
        }
    });
    $(".container").on("click", ".btn-yellow", function () {
        //alert("You pressed the red button");
        intUserTotal += intYellowPoints;
        console.log("New intUserTotal:  " + intUserTotal);
        if (intRandNumComputer > intUserTotal) {
            //The user has neither won nor lost
            //Display to the user his/her new point total
            $("#userscore").text("" + intUserTotal);
            //Display a message to the user
            $("#message").text("Your total score is:  ");
        }
        else if (intRandNumComputer === intUserTotal) {
            //This user has won!
            //Increment the global variable, intNumWins
            intNumWins++;
            //Display his/her win on the screen
            $("#winslosses").html("User wins!<br>Wins:  " + intNumWins + "<br>Losses:  " + intNumLosses);
            //Generate a new random number from the computer and display it.  
            //Bound between 19 and 120
            intRandNumComputer = Math.floor(Math.random() * 119) + 1;
            console.log("intRandNumComputer:  " + intRandNumComputer);
            //Display the random number in the randomPC output div.
            $("#randomPC").html("<br>  " + intRandNumComputer);
            //Reset the points on the user total
            intUserTotal = 0;
            //Generate some random numbers for the amount of points to assign to each gem.  
            intRedPoints = Math.floor(Math.random() * 12) + 1;
            intBluePoints = Math.floor(Math.random() * 12) + 1;
            intYellowPoints = Math.floor(Math.random() * 12) + 1;
            intGreenPoints = Math.floor(Math.random() * 12) + 1;
            console.log("New Red point value:  " + intRedPoints);
            console.log("New Blue point value:  " + intBluePoints);
            console.log("New Yellow point value:  " + intYellowPoints);
            console.log("New Green point value:  " + intGreenPoints);
            //Display to the user his/her new point total
            $("#userscore").text("" + intUserTotal);
            //Display a message to the user
            $("#message").text("Your total score is:  ");
        }
        else if (intRandNumComputer < intUserTotal) {
            //The user has lost! 
            //Increment the global variable, intNumLosses
            intNumLosses++;
            //Display this result to the user
            $("#winslosses").html("User loses!<br>Wins:  " + intNumWins + "<br>Losses:  " + intNumLosses);
            //Generate a new random number from the computer and display it.  
            //Bound between 19 and 120
            intRandNumComputer = Math.floor(Math.random() * 119) + 1;
            console.log("intRandNumComputer:  " + intRandNumComputer);
            //Display the random number in the randomPC output div.
            $("#randomPC").html("<br>  " + intRandNumComputer);
            //Reset the points on the user total
            intUserTotal = 0;
            //Generate some random numbers for the amount of points to assign to each gem.  
            intRedPoints = Math.floor(Math.random() * 12) + 1;
            intBluePoints = Math.floor(Math.random() * 12) + 1;
            intYellowPoints = Math.floor(Math.random() * 12) + 1;
            intGreenPoints = Math.floor(Math.random() * 12) + 1;
            console.log("New Red point value:  " + intRedPoints);
            console.log("New Blue point value:  " + intBluePoints);
            console.log("New Yellow point value:  " + intYellowPoints);
            console.log("New Green point value:  " + intGreenPoints);
            //Display to the user his/her new point total
            $("#userscore").text("" + intUserTotal);
            //Display a message to the user
            $("#message").text("Your total score is:  ");
        }
    });
    $(".container").on("click", ".btn-green", function () {
        //alert("You pressed the red button");
        intUserTotal += intGreenPoints;
        console.log("New intUserTotal:  " + intUserTotal);
        if (intRandNumComputer > intUserTotal) {
            //The user has neither won nor lost
            //Display to the user his/her new point total
            $("#userscore").text("" + intUserTotal);
            //Display a message to the user
            $("#message").text("Your total score is:  ");
        }
        else if (intRandNumComputer === intUserTotal) {
            //This user has won!
            //Increment the global variable, intNumWins
            intNumWins++;
            //Display his/her win on the screen
            $("#winslosses").html("User wins!<br>Wins:  " + intNumWins + "<br>Losses:  " + intNumLosses);
            //Generate a new random number from the computer and display it.  
            //Bound between 19 and 120
            intRandNumComputer = Math.floor(Math.random() * 119) + 1;
            console.log("intRandNumComputer:  " + intRandNumComputer);
            //Display the random number in the randomPC output div.
            $("#randomPC").html("<br>  " + intRandNumComputer);
            //Reset the points on the user total
            intUserTotal = 0;
            //Generate some random numbers for the amount of points to assign to each gem.  
            intRedPoints = Math.floor(Math.random() * 12) + 1;
            intBluePoints = Math.floor(Math.random() * 12) + 1;
            intYellowPoints = Math.floor(Math.random() * 12) + 1;
            intGreenPoints = Math.floor(Math.random() * 12) + 1;
            console.log("New Red point value:  " + intRedPoints);
            console.log("New Blue point value:  " + intBluePoints);
            console.log("New Yellow point value:  " + intYellowPoints);
            console.log("New Green point value:  " + intGreenPoints);
            //Display to the user his/her new point total
            $("#userscore").text("" + intUserTotal);
            //Display a message to the user
            $("#message").text("Your total score is:  ");
        }
        else if (intRandNumComputer < intUserTotal) {
            //The user has lost! 
            //Increment the global variable, intNumLosses
            intNumLosses++;
            //Display this result to the user
            $("#winslosses").html("User loses!<br>Wins:  " + intNumWins + "<br>Losses:  " + intNumLosses);
            //Generate a new random number from the computer and display it.  
            //Bound between 19 and 120
            intRandNumComputer = Math.floor(Math.random() * 119) + 1;
            console.log("intRandNumComputer:  " + intRandNumComputer);
            //Display the random number in the randomPC output div.
            $("#randomPC").html("<br>  " + intRandNumComputer);
            //Reset the points on the user total
            intUserTotal = 0;
            //Generate some random numbers for the amount of points to assign to each gem.  
            intRedPoints = Math.floor(Math.random() * 12) + 1;
            intBluePoints = Math.floor(Math.random() * 12) + 1;
            intYellowPoints = Math.floor(Math.random() * 12) + 1;
            intGreenPoints = Math.floor(Math.random() * 12) + 1;
            console.log("New Red point value:  " + intRedPoints);
            console.log("New Blue point value:  " + intBluePoints);
            console.log("New Yellow point value:  " + intYellowPoints);
            console.log("New Green point value:  " + intGreenPoints);
            //Display to the user his/her new point total
            $("#userscore").text("" + intUserTotal);
            //Display a message to the user
            $("#message").text("Your total score is:  ");
        }
    });    
});