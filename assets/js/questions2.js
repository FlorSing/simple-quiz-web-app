let questions = {
1: ["What is used to style a webpage?", ['A: JavaScript', 'B: CSS', 'C: Python']],
2: ["What is used to construct the elements in a webpage?", ['A: JavaScript', 'B: CSS', 'C: HTML']],
3: ["What is a lightweight programming language used to create webpage interactivity?", ['A: JavaScript', 'B: Python', 'C: Ruby']],
4: ["What is a free, open source version control system?", ['A: Gitlab', 'B: GitHub', 'C: VisualCode']],
5: ["What is a text format used for storing and transporting data?", ['A: JSON', 'B: XML', 'C: SQL']],
6: ["What can extend the functionality of the browser?", ['A: Tableau', 'B: AJAX', 'C: Web API']],
7: ["What is a special variable that can hold more than one value?", ['A: JS Arrays', 'B: JS Nodes', 'C: Dictionary']],
};

let answers = [
    'B: CSS',
    'C: HTML',
    'A: JavaScript', 
    'B: GitHub',
    'A: JSON', 
    'C: Web API',
    'A: JS Arrays', 
];
    
questionString = JSON.stringify(questions);
questionParse = JSON.parse(questionString);

console.log(questionParse[1][0]);
console.log(questionParse[1][1][1]);

let answer1 = questionParse[1][1][1];
let answer = answers[0];
console.log(answer1 == answer);

