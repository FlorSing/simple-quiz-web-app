let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let startButton = document.querySelector("#start");
let questionsShow = document.querySelector("#questions");
let selectButton = document.querySelector("button");
let questionResult = document.querySelector("#questions");

var timeEl = document.getElementById('time');
var timeLeft = 30;
    
var questionNo = 0;
var x = questionNo;


var score = 0;
var mode = 'hide';
 


function init(){

}

//show quiz first
function showQuiz() {
    if (mode == 'hide'){
        mode = 'show';
        questionsShow.setAttribute('class', 'show');
    }; 
};

function hideQuiz() {
    if (mode == 'show'){
        mode = 'hide';
        questionsShow.setAttribute('class', 'hide');
    }; 
};

//timer when start 

function countdown() {
    var timeInterval = setInterval(function () {
      timeLeft--;
      timeEl.textContent = timeLeft;
    
    if(timeLeft === 0){
        clearInterval(timeInterval);

    }
    }, 1000);
    };




//start quiz

startButton.addEventListener('click', function (){

  showQuiz();
  countdown();
  displayQuestions();
  listChoices();
  checkAnswer();
  score++;
  startButton.disabled = true;
  questionNo++;

    
} 
)    
  
function wrongAnswer() {

    timeLeft - 10;

    var message = document.createElement("div");
    message.textContent = "Incorrect... please try again.";
    message.setAttribute('style', 'font-style: italic');
    questionResult.appendChild(message);
    
};


function correctAnswer(){

    score ++;
    console.log(score);

    hideQuiz();

    questionNo++;
    console.log(questionNo);

    showQuiz();


}


//determine chosen answer button
function checkAnswer() {
choices.addEventListener("click", function(event) {
    var element = event.target;
    var index = element.getAttribute("data-index");
    var answer = element.textContent;
    console.log(answer);

    //check if chosen button is the correct answer

    if (answer === answers[x]){
        console.log('correct');
        hideQuiz();
    }
    else wrongAnswer();
       }
    )    


    
}

localStorage.setItem('score',score);
    
    
