let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let startButton = document.querySelector("#start");
let questionsShow = document.querySelector("#questions");
let selectButton = document.createElement("button");

let questionsList = [
    ["What is used to style a webpage?", ['A: JavaScript', 'B: CSS', 'C: Python']],
    ["What is used to construct the elements in a webpage?", ['A: JavaScript', 'B: CSS', 'C: HTML']],
    ["What is a lightweight programming language used to create webpage interactivity?", ['A: JavaScript', 'B: Python', 'C: Ruby']],
    ["What is a free, open source version control system?", ['A: Gitlab', 'B: GitHub', 'C: VisualCode']],
    ["What is a text format used for storing and transporting data?", ['A: JSON', 'B: XML', 'C: SQL']],
    ["What can extend the functionality of the browser?", ['A: Tableau', 'B: AJAX', 'C: Web API']],
    ["What is a special variable that can hold more than one value?", ['A: JS Arrays', 'B: JS Nodes', 'C: Dictionary']],
];

//to start the page
function init(){
    showQuiz();
    countdown();
}

//show quiz first
var mode = 'hide';
function showQuiz() {
    if (mode == 'hide'){
        mode = 'show';
        questionsShow.setAttribute('class', 'show');
    }; 
};

//start quiz and timer when start 
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





startButton.addEventListener('click', function (){
//    event.preventDefault();
    

    countdown();

    } 
    );



for (i=0; i<questionsList.length; i++){
    questionTitle.textContent = questionsList[i][0];
};


function listChoices(){


    for (i=0; i<questionsList.length; i++){
        for (j=0; j<questionsList[i][1].length; j++)
  //          console.log(questionsList[i][1][j]);

            var selectButton = document.createElement("button");
            selectButton.textContent = questionsList[i][1][j]
            choices.appendChild(selectButton);  
        };
    
    };
        

listChoices();

//timer

var timeEl = document.getElementById('time');
function countdown() {
    var timeLeft = 11;
  
    var timeInterval = setInterval(function () {
      timeLeft--;
      timeEl.textContent = timeLeft
  
      if(timeLeft == 0){
        clearInterval(timeInterval);
    }
    }, 1000);
    };

    selectButton.addEventListener('click', function(){
        clearInterval(timeInterval);
    })

    ;


    // var mysound = new Audio("./assets/sfx/correct.wav");
    // mysound.play();


