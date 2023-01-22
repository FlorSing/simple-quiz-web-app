
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


questionNo = localStorage.getItem('question no');
x = questionNo;

//display questions
function displayQuestions() {
  
  questionTitle.textContent = questionsList[x][0];

};

function listChoices(){

  for (i=0; i<questionsList[x][1].length; i++){

      var selectButton = document.createElement("button");
      selectButton.textContent = questionsList[x][1][i]
      selectButton.setAttribute("data-index", i);
      selectButton.setAttribute("id", "ansButton");
      choices.appendChild(selectButton); 
    };

    
   
};











