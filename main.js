//when page loads prompt user to pick a category.
function start() {
    // console.log('Please pick a category and dollar amount.');
}
start();

//create variables.
const selectCat = document.querySelectorAll('#catpick *');
// console.log(selectCat);

let displayBox = document.querySelector('#displaybox');
// console.log(displayBox);

const finalQuestion = document.querySelector('#finalquestion');
// console.log(finalQuestion);

let score = document.querySelector('#scoredisplay');
// console.log(score);

let gameObs = [{
    catPoint: "cat1 100",
    point: 100,
    answer: "The air hoses that provide air to the trailer.",
    questions: [{
        text: "What are air hands?",
        isCorrect: false
    },
    {
        text: "What are sad hands?",
        isCorrect: false
    },
    {
        text: "What are glad hands?",
        isCorrect: true
    },
    ]
},
{
    catPoint: "cat1 200",
    point: 200,
    answer: "The connector that secures a trailer to a truck.",
    questions: [{
        text: "What is a trailer hitch?",
        isCorrect: false
    },
    {
        text: "What is a fifth wheel?",
        isCorrect: true
    },
    {
        text: "What is a link post?",
        isCorrect: false
    },
    ]
},
{
    point: 300,
    answer: "The tires on the front of a semi truck.",
    questions: [{
        text: "What are steer tires?",
        isCorrect: true
    },
    {
        text: "What are drive tires?",
        isCorrect: false
    },
    {
        text: "What are tandem tires?",
        isCorrect: false
    }
    ]
},
{
    point: 400,
    answer: "A blind side back.",
    questions: [{
        text: "What is backing to the left?",
        isCorrect: false
    },
    {
        text: "What is backing to the right?",
        isCorrect: true
    },
    {
        text: "What is backing at night?",
        isCorrect: false
    }
    ]
},
{
    point: 500,
    answer: "A drop and hook.",
    questions: [{
        text: "What is dropping a gear and turning?",
        isCorrect: false
    },
    {
        text: "What is delivering a loaded trailer and picking up an empty one?",
        isCorrect: true
    },
    {
        text: "What is dropping off your load and going to sleep?",
        isCorrect: false
    }
    ]
},

{
    answer: "This movie featured a car named Eleanor.",
    point: 100,
    questions: [{
        text: "What is Gone in 60 seconds?",
        isCorrect: true
    },
    {
        text: "What is Meet the parents?",
        isCorrect: false
    },
    {
        text: "What is Almost famous?",
        isCorrect: false
    }
    ]
},
{
    answer: "Denzel Washington starred in this grid iron classic.",
    point: 200,
    questions: [{
        text: "What is Gone with the wind?",
        isCorrect: false
    },
    {
        text: "What is Remember the Titans?",
        isCorrect: true
    },
    {
        text: "What is Rudy?",
        isCorrect: false
    }
    ]
}
]


// group2B1.questions.map(question => {
//     if (question.isCorrect) {
//         console.log(question.text)
//     }
// });
document.querySelectorAll('#catpick').forEach(div => {
    div.addEventListener('click', (e) => {
        let newDiv = document.createElement('DIV');
        //if e.target clicked, display created div in displayBox.
        displayBox.appendChild(newDiv);
        gameObs.forEach(obj => {
            if (obj.catPoint === e.target.className) {
                console.log(obj)
            }
        })
    })

})







