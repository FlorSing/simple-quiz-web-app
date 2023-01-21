let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let startButton = document.querySelector("#start");
let questionsShow = document.querySelector("#questions");
let selectButton = document.createElement("button");


//setup local storage

function init(){

}

//show quiz first
var mode = 'hide';
function showQuiz() {
    if (mode == 'hide'){
        mode = 'show';
        questionsShow.setAttribute('class', 'show');
    }; 
};

//timer when start 
var timeEl = document.getElementById('time');
function countdown() {
    var timeLeft = 30;
    var timeInterval = setInterval(function () {
      timeLeft--;
      timeEl.textContent = timeLeft;
    if (timeLeft >=0) {   
      if (solved && timeLeft >0){
        clearInterval(timeInterval);
        logScore();
        }
      }
    
    if(timeLeft === 0){
        clearInterval(timeInterval);
        logScore();
    }
    }, 1000);
    };




//start quiz

startButton.addEventListener('click', function (){
//    event.preventDefault();

  showQuiz();
  countdown();
  displayQuestions();
  listChoices();
  checkAnswer();
  logScore();

    } 
    );
  

//display questions
function displayQuestions() {
for (i=0; i<questionsList.length; i++){
    questionTitle.textContent = questionsList[i][0];
};

};

//list multiple choice

function listChoices(){

  for (i=0; i<questionsList.length; i++){
        for (j=0; j<questionsList[i][1].length; j++)
  //          console.log(questionsList[i][1][j]);

            var selectButton = document.createElement("button");
            selectButton.textContent = questionsList[i][1][j]
            choices.appendChild(selectButton);  
        };
    
    };
        
//check answer
function checkAnswer() {

}

//log score


    // var mysound = new Audio("./assets/sfx/correct.wav");
    // mysound.play();


