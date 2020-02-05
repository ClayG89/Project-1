//when page loads prompt user to pick a category.
function start() {
    console.log('Please pick a category and dollar amount.');
}
start();

//create variables.
const selectCat = document.querySelectorAll('#catpick *');
console.log(selectCat[13]);

let displayBox = document.querySelectorAll('#displaybox *');
console.log(displayBox[13]);

const finalQuestion = document.querySelector('#finalquestion');
console.log(finalQuestion);

let score = document.querySelector('#scoredisplay');
console.log(score);

console.log('#displayBox'[2].value);