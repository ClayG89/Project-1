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
    question3:"What are glad hands"
}
