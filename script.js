let wins=0; //track of users wins
let gamesplayed=0;//track the games played

function playGame(playerChoice){//generate computer choice and call game result
    
    if(wins===3){//initially only one of this code sequeucne exisited in the wrong place
        //logical opertor to check if the user has won three times
        document.getElementById("result").textContent="You've won three times in a row!";
        return; //Exit the function to stop the game
    }
    
    const computerChoice=["rock","paper","scissors"][Math.floor(Math.random()*3)];
    const result=getGameResult(playerChoice,computerChoice);
    
    //check if the player has won three times in a row
    if(result==="You win!"){
        wins++;

        if(wins===3){
            //repeating this operator, unsure this is best practice.
            document.getElementById("result").textContent="You've won three times in a row!";
            return;
        }

    }else{
        //reset the number of wins if the player did not win
        wins=0;
    }
    //gane reulst to the user
    document.getElementById("result").textContent = `You chose ${playerChoice}, the computer chose ${computerChoice}. ${result}`;
}

function getGameResult(playerChoice, computerChoice){
    if(playerChoice===computerChoice){
        return "It's a tie!";
    }else if(
        (playerChoice==="rock"&&computerChoice==="scissors")||
        (playerChoice==="paper"&&computerChoice==="rock")||
        (playerChoice==="scissors"&&computerChoice==="paper"))
    {
        return "You win!";
    }else{
        return "Computer wins!";
    }
}