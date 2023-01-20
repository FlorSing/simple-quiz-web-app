let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");


let question1 = ["What is used to style a webpage?", [' JavaScript', ' CSS', ' HTML']];



questionTitle.textContent = question1[0];

function renderChoices(){

    for (i=0;i<question1[1].length;i++){

        var addListElement = document.createElement("li");
        addListElement.textContent = question1[1][i];
        choices.appendChild(addListElement);

    }
};

renderChoices();

