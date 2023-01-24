


const questionsList = [
    ["What is used to style a webpage?", ['A: JavaScript', 'B: CSS', 'C: Python']],
    ["What is used to construct the elements in a webpage?", ['A: XML', 'B: SQL', 'C: HTML']],
    ["What is a lightweight programming language used to create webpage interactivity?", ['A: JavaScript', 'B: Python', 'C: Ruby']],
    ["What is a free, open source version control system?", ['A: CI/CD', 'B: GitHub', 'C: VisualCode']],
    ["What is a text format used for storing and transporting data?", ['A: JSON', 'B: PDF', 'C: RTF']],
    ["What can extend the functionality of the browser?", ['A: Tableau', 'B: AJAX', 'C: Web API']],
    ["What is a special variable that can hold more than one value?", ['A: JS Arrays', 'B: JS Nodes', 'C: Dictionary']],
];

const answers = [
    'B: CSS',
    'C: HTML',
    'A: JavaScript', 
    'B: GitHub',
    'A: JSON', 
    'C: Web API',
    'A: JS Arrays', 
];

//var x = 0;
questionNo = localStorage.getItem('question no');
//var questionNo = 0
// var x = questionNo;

//***? how ? - need to display questions and multiple choice answers in sequence after every item ***

//var multipleChoice = [];

//display questions
function displayQuestions() {
  questionTitle.textContent = questionsList[questionNo][0];
};

//display multiple choice answers
function listChoices(){
//  multipleChoice.innerHTML = "";

   for (i=0; i<questionsList[questionNo][1].length; i++){
  //   var text = questionsList[x][1][i];
  //   multipleChoice.push(text);

    var selectButton = document.createElement("button");
    selectButton.textContent = questionsList[questionNo][1][i];
    selectButton.setAttribute("data-index", i);
    selectButton.setAttribute("id", "ansButton");
    choices.appendChild(selectButton);
    
   }
  };