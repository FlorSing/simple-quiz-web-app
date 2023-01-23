let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let startButton = document.querySelector("#start");
let questionsShow = document.querySelector("#questions");
let selectButton = document.querySelector("button");
let questionResult = document.querySelector("#questions");

let quizDone = document.querySelector("#end-screen");
let askInitials = document.querySelector("#initials");
let finalScore = document.querySelector("#final-score");
let submitInitials = document.querySelector("#submit");

let feedback = document.querySelector("#feedback");

//var doneMode = 'hide';

var timeEl = document.getElementById('time');
var timeLeft = 10;
    
var questionNo=0;
//localStorage.setItem('question no', questionNo);
//var x = questionNo;

//questionNo = localStorage.getItem('question no');

//var x = 0;

var score = 0;

//var quizMode = 'hide';



//start quiz
for (i=0; i<questionsList.length; i++){
    startButton.addEventListener("click", starter);
    questionNo++;

}

//show quiz div content first
//const showQuiz = questionsShow.setAttribute('class', 'show');
    

function showQuiz() {
    // if (quizMode == 'hide'){
    //     quizMode = 'show';
        questionsShow.setAttribute('class', 'show');
    }; 
//};

// for (i=0;i<answers.length; i++){
//     starter();
//     questionNo++;
//     console.log('x =', x);
// }


function starter() {

// startButton.addEventListener('click', function (event){
//     event.preventDefault();
    showQuiz();
    countdown();
    displayQuestions();
    listChoices();
    checkAnswer();
    
    startButton.disabled = true;
} 
    
function hideQuiz() {
    // if (quizMode == 'show'){
    //     quizMode = 'hide';
        questionsShow.setAttribute('class', 'hide');
//    }; 
 //   startButton.disabled = false;
};

//timer when start 

function countdown() {
    var timeInterval = setInterval(function () {
      timeLeft--;
      timeEl.textContent = timeLeft;
    
    if(timeLeft <= 0){
        clearInterval(timeInterval);
    }

    if (timeLeft === 0){
        clearInterval(timeInterval);
        allDone();
    }
    }, 1000);
    };




function wrongAnswer() {
    timeLeft-10
    var message = document.createElement("div");
    message.textContent = "Incorrect... please try again.";
    message.setAttribute('style', 'font-style: italic');
    questionResult.appendChild(message);
    
};


function correctAnswer(){
    score++
    localStorage.setItem('score',score);
    questionNo++
    hideQuiz();
    //    localStorage.setItem('question no', questionNo);
    //hideQuiz();
    // questionTitle.textContent = "";
    choices.children[0].remove();
    choices.children[0].remove();
    choices.children[0].remove();
    // showQuiz();
    // displayQuestions();
    // listChoices();


};

//determine chosen answer button
function checkAnswer() {
    choices.addEventListener("click", function(event) {
    var element = event.target;
    var index = element.getAttribute("data-index");
    var answer = element.textContent;

    //check if chosen button is the correct answer
    if (answer === answers[x]){
        multipleChoice.splice(0,3);
        questionTitle.textContent = "";
        correctAnswer();
 //       starter();
    }
    else wrongAnswer();
    }
    )    

}   
//console.log(answer);

    
function allDone() {
//    doneMode = "show";
    var lastScore = localStorage.getItem('score');

    finalScore.textContent = lastScore;
//    finalScore.appendChild = localStorage.getItem(score);

    quizDone.setAttribute('class', 'show');

    submitInitials.addEventListener("click", function(){
        var setInitials = askInitials.value.trim();
        initials = localStorage.setItem('initials', setInitials);
        
    })

//    feedback.setAttribute('class', 'feeback show');
};



