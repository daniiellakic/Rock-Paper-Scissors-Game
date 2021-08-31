// Function when you click on object
function rpsGame(yourChoise){
    console.log(yourChoise);
    var humanChoice, botChoice; 
    humanChoice = yourChoise.id;

    // Bot picks the random object 
    botChoice = numberToChoice(randToRpsInt()); 
    console.log('Computer choice:', botChoice);

    // returns result as an array [0, 1] human lost, bot won
    result = decideWinner(humanChoice, botChoice); 
    console.log(result);

    //Final message who won
    message = finalMessage(result); 
    console.log(message);

    rpsFrontEnd(yourChoise.id, botChoice, message);
    //sdocument.getElementById('restart')

    
}
 
// Random rock paper scissor for the computer and the player
function randToRpsInt() {
    return Math.floor(Math.random() * 3); 
}

// Getting object from the number
function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number]; 
}

// Decide the winner 
// Objets and all the possible outcoms for each object
// It's like a json object - objets in a object

function decideWinner (yourChoice, computerChoice) {
    var rpsDatabase = {
      'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
      'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
      'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    }

    // It goes in choesen object based on what you click and returns score
    // Same thing for a computer choise
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
  }
  
// Message that shows on final result 
function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0){
      return {'message': 'Your lost!', 'color': 'red'};
    } else if (yourScore === 0.5) {
      return {'message': 'You tied!', 'color': 'yellow'};
    } else  {
      return {'message': 'You won!', 'color': 'green'};
    }
}

// Function that shows the corect image when it's pickt
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src 
    }

    // Removing image if clickt
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    
    // Div elements to show result after chosen element/div
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow= 0px 10px 50px rgb(37,50,233,1);'>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow= 0px 10px 50px rgb(243,38,24,1);'>"
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size 60px; padding: 20px; '>" + finalMessage['message'] + "</h1>"

    //Appending div element
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
}   

const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);
