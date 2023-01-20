let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let startButton = document.querySelector("#start");
let questionsShow = document.querySelector("#questions");


let question1 = ["What is used to style a webpage?", [' JavaScript', ' CSS', ' HTML']];

//reminder: add toggle for question ("data") = show/hide  element.setAttribute("data-state", "animate")

var mode = 'hide';

startButton.addEventListener('click', function (){
    event.preventDefault();
    if (mode = 'hide'){
        mode = 'show';
        questionsShow.setAttribute('class', 'show');
    }

    }     
    );


questionTitle.textContent = question1[0];

function listChoices(){

    for (i=0;i<question1[1].length;i++){

        var addListElement = document.createElement("li");
        addListElement.textContent = question1[1][i];
        choices.appendChild(addListElement);

        var button = document.createElement("button");
        button.textContent = 'select';
        addListElement.appendChild(button);
        choices.appendChild(addListElement);

    }
};

listChoices();

