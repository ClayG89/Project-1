//when page loads prompt user to pick a category.
function start() {
    console.log('Please pick a category and dollar amount.');
}
start();

//create variables.
const selectCat = document.querySelectorAll('#catpick *');
console.log(selectCat);

let displayBox = document.querySelectorAll('#displaybox *');
console.log(displayBox);

const finalQuestion = document.querySelector('#finalquestion');
console.log(finalQuestion);

let score = document.querySelector('#scoredisplay');
console.log(score);

let group1B1 = {
    answer:"The air hoses that provide air to the trailer.",
    question1:"What are air hands?",
    question2:"What are sad hands?",
    question3:"What are glad hands?"
}
let group1B2 = {
    answer:"The connector that secures a trailer to a truck.",
    question1:"What is a trailer hitch?",
    question2:"What is a fifth wheel?",
    question3:"What is a link post?"  
}
let group1B3 = {
    answer:"The tires on the front of a semi truck.",
    question1:"What are steer tires?",
    question2:"What are drive tires?",
    question3:"What are tandem tires?"
}
let group1B4 = {
    answer: "A blind side back.",
    question1: "What is backing to the left?",
    question2: "What is backing to the right?",
    question3: "What is backing at night?"
}
let group1B5 = {
    answer: "A drop and hook.",
    question1: "What is dropping a gear and turning?",
    question2: "What is delivering a loaded trailer and picking up an empty one?",
    question3: "What is dropping off your load and going to sleep?"
};
console.log(Object.keys(group1B5));


