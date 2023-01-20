//create list of high scores
var scoreElement =  document.getElementById('highscores');

let scoresList = [];
let score = 0;

scoresList.push(score);


function listHighScores(){

    for (i=0; i<scoresList.length; i++){

        scoreElement.textContent = score;

        var addScore = document.createElement("li");

        addScore.textContent = scores[i];
        
        scoreElement.appendChild(addScore);


    }

};