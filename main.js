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
let objInPlay;
let score = 0;

let gameObs = [{
    catPoint: "cat1-100",
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
    }
    ]
},
{
    catPoint: "cat1-200",
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
    catPoint: "cat1-300",
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
    catPoint: "cat1-400",
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
    catPoint: "cat1-500",
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
    catPoint: "cat2-100",
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
    catPoint: "cat2-200",
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
    catPoint: "cat2-300",
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
    catPoint: "cat2-400",
    point: 400,
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
    catPoint: "cat2-500",
    point: 500,
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
        isCorrect: true
    }
    ]
},
{
    catPoint: "cat3-100",
    point: 100,
    answer: "This team won three consecutive NBA championships, twice.",
    questions: [{
        text: "Who are the Chicago Bulls?",
        isCorrect: true
    },
    {
        text: "Who are the Boston Celtics?",
        isCorrect: false
    },
    {
        text: "Who are the Golden State Warriors?",
        isCorrect: false
    }
    ]
},
{
    catPoint: "cat3-200",
    point: 200,
    answer: "This retired player was nicknamed the 'Big Ticket'.",
    questions: [{
        text: "Who is Charles Barkley?",
        isCorrect: false
    },
    {
            text: "Who is Dennis Rodman?",
            isCorrect: false
        },
        {
            text: "Who is Kevin Garnett?",
            isCorrect: true
        }
        ]
},
{
    catPoint: "cat3-300",
    point: 300,
    answer: "Greg Poppovich has been the head coach of this team for over 20 years.  '.",
    questions: [{
            text: "Who are the Sam Antonio Spurs?",
            isCorrect: true
        },
        {
            text: "Who are the Houston Rockets?",
            isCorrect: false
        },
        {
            text: "Who are the Dallas Mavericks?",
            isCorrect: false
        }
        ]
},
{
    catPoint: "cat3-400",
    point: 400,
    answer: "The Utah Jazz relocated from this city.",
    questions: [{
            text: "What is Baton Rouge, LA?",
            isCorrect: false
        },
        {
            text: "What is Tampa Bay, FL?",
            isCorrect: false
        },
        {
            text: "What is New Orleans, LA?",
            isCorrect: true
        }
        ]
},
{
    catPoint: "cat3-500",
    point: 500,
    answer: "This team plays it's home games at FedEx Forum.",
    questions: [{
            text: "Who are the Miami Heat?",
            isCorrect: false
        },
        {
            text: "Who are the Memphis Grizzlies?",
            isCorrect: true
        },
        {
            text: "Who are the Dallas Mavericks?",
            isCorrect: false
        }
        ]
},
{
    catPoint: "cat4-100",
    point: 100,
    answer: "In 2018 he announced that his 3-year Farewell Yellow Brick Road tour would be his last.",
    questions: [{
            text: "Who is Paul Simon?",
            isCorrect: false
        },
        {
            text: "Who is LL Cool J?",
            isCorrect: false
        },
        {
            text: "Who is Elton John?",
            isCorrect: true
        }
        ]
},
{
    catPoint: "cat4-200",
    point: 200,
    answer: "A song by Morrissey is called this 4-letter woodwind Concerto.",
    questions: [{
            text: "What is an Oboe?",
            isCorrect: true
        },
        {
            text: "What is a lute?",
            isCorrect: false
        },
        {
            text: "What is a fife?",
            isCorrect: false
        }
        ]
},
{
    catPoint: "cat4-300",
    point: 300,
    answer: "This mechanical device is used by musicians to keep time.",
    questions: [{
            text: "What is a metronome?",
            isCorrect: true
        },
        {
            text: "What is a tempo-moderator?",
            isCorrect: false
        },
        {
            text: "What is an auto-adjust time-moderator?",
            isCorrect: false
        }
        ]
},
{
    catPoint: "cat4-400",
    point: 400,
    answer: "This tune from Frozen begins The snow glows white on thr mountain tonight.",
    questions: [{
            text: "What is For the first time in forever?",
            isCorrect: false
        },
        {
            text: "What is Let it go?",
            isCorrect: false
        },
        {
            text: "What is Elsa and Anna?",
            isCorrect: true
        }
        ]

}
]
           
    // group2B1.questions.map(question => {
    // if (question.isCorrect) {
    //     console.log(question.text)
    //}
 //});
document.querySelectorAll('#catpick').forEach(div => {
    div.addEventListener('click', (e) => {
        let newDiv = document.createElement('DIV');
        //if e.target clicked, display created div in displayBox.
        displayBox.appendChild(newDiv);
        gameObs.forEach(obj => {
            // if (obj.catPoint === e.target.className) {
                if (e.target.classList.contains(obj.catPoint)) {
                objInPlay = obj;
                
                console.log(objInPlay)
               // score = score + obj.point;
               // console.log(obj)
            } 
        

            document.querySelector('#answer').innerHTML = (objInPlay.answer);
            document.querySelector('#firstquestion').innerHTML = (objInPlay.questions[0].text);
            document.querySelector('#secondquestion').innerHTML = (objInPlay.questions[1].text);
            document.querySelector('#thirdquestion').innerHTML = (objInPlay.questions[2].text);
           //console.log(document.querySelector('#answer').innerHTML)
           // console.log(document.querySelector('#firstquestion').innerHTML)
        })
        let rightQuestion = (gameObs)
                if (score < 2000) {
                    console.log(score);
                    start();
                } else {
                   // console.log(rightQuestion)
                    if (score >= 2000) {
                        console.log(finalQuestion)
                    } else {
                        if (score === 0) {
                            console.log("Game over.")
                        } else {
                            console.log(score + ' ' + 'Good game.')
                        }
                    }
    

    
                }
            })
        })  
    
