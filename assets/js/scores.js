//create list of high scores

var scoreElement =  document.getElementById('highscores');
var lastScore = localStorage.getItem('score');
var scoresList = [lastScore];


function logScore(){

    for (i=0; i<scoresList.length; i++){
        var addScore = document.createElement("li");
        addScore.textContent = scoresList[i];
        scoreElement.appendChild(addScore);
     
    }
};


logScore();

