//create list of high scores
var clearScore = document.querySelector("#clear");
var scoreElement =  document.getElementById('highscores');
var lastScore = localStorage.getItem('score');
var initials = localStorage.getItem('initials');

var scoresList = [];
var scoresListEntry = [initials+": "+lastScore];
scoresList.push(scoresListEntry);


function logScore(){

    for (i=0; i<scoresList.length; i++){
        var addScore = document.createElement("li");
        addScore.textContent = scoresList[i];
        scoreElement.appendChild(addScore);
    }
};

logScore();

function clearHighScores(){
    scoreElement.children[0].textContent="";
    };

clearScore.addEventListener("click", clearHighScores);


