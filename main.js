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

let group1B1 = {
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
}
let group1B2 = {
    point: 200,
    answer: "The connector that secures a trailer to a truck.",
    questions:[{
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
}
let group1B3 = {
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
}
let group1B4 = {
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
}
let group1B5 = {
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
}

let group2B1 = {
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
}


group2B1.questions.map(question => {
    if (question.isCorrect) {
        // console.log(question.text)
    }
});
document.querySelectorAll('#catpick').forEach(div => {
    div.addEventListener('click', (e) => {
        let newDiv = document.createElement('DIV');
        newDiv.style.width = "100px";
        newDiv.style.height = "100px";
        newDiv.style.background = "red"
        console.log(displayBox)
        displayBox.appendChild(newDiv);
        console.log(e.target)
    })

})
 
    





