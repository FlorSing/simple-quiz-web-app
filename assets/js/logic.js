let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let startButton = document.querySelector("#start");
let questionsShow = document.querySelector("#questions");
let selectButton = document.querySelector("button");

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
  


selectButton.addEventListener("click", function(event) {
    var index = selectButton.getAttribute("data-index");

       console.log(index);
       }
   
            
    )    

    

function checkAnswer() {

    
};

localStorage.setItem('score',score);
    
    
