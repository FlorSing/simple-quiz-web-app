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
    score++
    console.log(score);
    questionNo++
    console.log(questionNo);
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
  
  startButton.disabled = true;
    
} 
)    
  
function wrongAnswer() {

    timeLeft-10

    var message = document.createElement("div");
    message.textContent = "Incorrect... please try again.";
    message.setAttribute('style', 'font-style: italic');
    questionResult.appendChild(message);
    
};


// function correctAnswer(){

//     score++

//     hideQuiz();

//     questionNo++
  
//     showQuiz();

// };


//determine chosen answer button
function checkAnswer() {
choices.addEventListener("click", function(event) {
    var element = event.target;
    var index = element.getAttribute("data-index");
    var answer = element.textContent;

    //check if chosen button is the correct answer

    if (answer === answers[x]){
        hideQuiz();
    }
    else wrongAnswer();
       }
    )    
    
}
//console.log(answer);
localStorage.setItem('score',score);

    
