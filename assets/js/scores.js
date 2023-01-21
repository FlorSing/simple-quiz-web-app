//create list of high scores
var scoreElement =  document.getElementById('highscores');

let scoresList = [10, 25];
let score = 20;
scoresList.push(score);


function logScore(){

    for (i=0; i<scoresList.length; i++){
 //      scoreElement.textContent = score;
        var addScore = document.createElement("li");
        addScore.textContent = scoresList[i];
        scoreElement.appendChild(addScore);
     
    }
};

logScore();

