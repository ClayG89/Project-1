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

let scoreBoard = document.querySelector('#scoredisplay');
// console.log(scoreBoard);
let score = 0;

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
    catPoint: "cat1 300",
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
    catPoint: "cat1 400",
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
    catPoint: "cat1 500",
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
    catPoint: "cat2 100",
    point: 100,
    answer: "This movie featured a car named Eleanor.",
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
    catPoint: "cat2 200",
    point: 200,
    answer: "Denzel Washington starred in this grid iron classic.",
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
},
{
    catPoint: "cat2 300",
    point: 300,
    answer: "The movie Castaway starred this iconic actor.",
    questions: [{
        text: "Who is Samuel L. Jackson?",
        isCorrect: false
    },
    {
        text: "Who is Tom Cruise?",
        isCorrect: false
    },
    {
        text: "Who is Tom Hanks?",
        isCorrect: true
    }
    ]
},
{
    catPoint: "cat2 400",
    point: 300,
    answer: "This movies main character was named Maximus.",
    questions: [{
        text: "What is Gladiator?",
        isCorrect: true
    },
    {
        text: "What is Scary Movie?",
        isCorrect: false
    },
    {
        text: "What is Shanghai Noon?",
        isCorrect: false
    }
    ]
},
{
    catPoint: "cat2 500",
    point: 300,
    answer: "Harrison Ford and Michelle Pfeiffer co-starred in this thriller.",
    questions: [{
        text: "What is Mission Impossible?",
        isCorrect: false
    },
    {
        text: "What is Charlie's Angels?",
        isCorrect: false
    },
    {
        text: "What is What lies beneath?",
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
                console.log(obj.point)
                let score = score + obj.point;
                //console.log(obj)
            }
        })
    })

})







