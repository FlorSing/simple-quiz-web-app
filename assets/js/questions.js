let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let startButton = document.querySelector("#start");
let questionsShow = document.querySelector("#questions");
let selectButton = document.createElement("button");

let question = {1: ["What is used to style a webpage?", [' JavaScript', ' CSS', ' HTML']]};



var mode = 'hide';

startButton.addEventListener('click', function (){
//    event.preventDefault();
    if (mode = 'hide'){
        mode = 'show';
        questionsShow.setAttribute('class', 'show');
    };

    countdown();

    } 
    );




questionTitle.textContent = question1[0];

function listChoices(){

    for (i=0;i<question1[1].length;i++){

        //var addListElement = document.createElement("li");
        // addListElement.textContent = question1[1][i];
        // choices.appendChild(addListElement);

        var selectButton = document.createElement("button");
        selectButton.textContent = question1[1][i];
   //     selectButton.appendChild(selectButton);
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

    selectButton.addEventListener('click', function(){
        clearInterval(timeInterval);
    })

    };



