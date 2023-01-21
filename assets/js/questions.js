let questions = {
1: ["What is used to style a webpage?", ['A: JavaScript', 'B: CSS', 'C: Python']],
2: ["What is used to construct the elements in a webpage?", ['A: JavaScript', 'B: CSS', 'C: HTML']],
3: ["What is a lightweight programming language used to create webpage interactivity?", ['A: JavaScript', 'B: Python', 'C: Ruby']],
4: ["What is a free, open source version control system?", ['A: Gitlab', 'B: GitHub', 'C: VisualCode']],
5: ["What is a text format used for storing and transporting data?", ['A: JSON', 'B: XML', 'C: SQL']],
6: ["What can extend the functionality of the browser?", ['A: Tableau', 'B: AJAX', 'C: Web API']],
7: ["What is a special variable that can hold more than one value?", ['A: JS Arrays', 'B: JS Nodes', 'C: Dictionary']],
};


    
// questionString = JSON.stringify(questions);
// questionParse = JSON.parse(questionString);

// // console.log(questionParse[1][0]);
// console.log(questionParse[1][1][1]);

// let answer1 = questionParse[1][1][1];
// let answer = answers[0];
// console.log(answer1 == answer);



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


console.log(questionsList[0][0]);
console.log(questionsList[0][1]);

// for (i=0; i<questionsList.length; i++){
//         console.log(questionsList[i][0]);
// };

// for (i=0; i<questionsList.length; i++){
//     for (j=0; j<questionsList[i][1].length; j++)
//         console.log(questionsList[i][1][j]);
// };

//create counter to know which question to display 

let questionNo = 0;
let x = questionNo;


//display questions
function displayQuestions() {
  
// for (i=0; i<questionsList.length; i++){
//     questionTitle.textContent = questionsList[i][0];
// };
  questionTitle.textContent = questionsList[x][0];

  return x;

};
//console.log(questionsList[x][0]);

//list multiple choice

function listChoices(){

  for (i=0; i<questionsList[x][1].length; i++){
  //      for (j=0; j<questionsList[i][1].length; j++)
  //          console.log(questionsList[i][1][j]);

  //           var selectButton = document.createElement("button");
  //           selectButton.textContent = questionsList[i][1][j]
  //           choices.appendChild(selectButton);  
  //       };

      var selectButton = document.createElement("button");
      selectButton.textContent = questionsList[x][1][i]
      choices.appendChild(selectButton); 
      //console.log(questionsList[x][1][i]);
    };
};

//listChoices();












    // var mysound = new Audio("../sfx/correct.wav");
    // mysound.play();
