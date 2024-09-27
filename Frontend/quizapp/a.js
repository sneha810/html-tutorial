// const questions = [
//     {
//         question: "What is the capital of France?",
//         answers: [
//             { text: "Berlin", correct: false },
//             { text: "Madrid", correct: false },
//             { text: "Paris", correct: true },
//             { text: "Lisbon", correct: false }
//         ]

//     },
//     {
//         question: "Which planet is known as the Red Planet?",
//         answers: [
//             { text: "Earth", correct: false },
//             { text: "Mars", correct: true },
//             { text: "Jupiter", correct: false },
//             { text: "Saturn", correct: false }
//         ]

//     },
//     {
//         question: "What is the smallest prime number?",
//         answers: [
//             { text: "1", correct: false },
//             { text: "2", correct: true },
//             { text: "3", correct: false },
//             { text: "5", correct: false }
//         ]
//     }
// ]

// const questionElement = document.getElementById("question");
// const answerbutton = document.getElementById("answer-button");
// const nextbutton = document.getElementById("next-btn");

// let currentquestionindex = 0;
// let score = 0;

// function startquiz() {
//     currentquestionindex = 0;
//     score = 0;
//     nextbutton.innerHTML = "next";
//     showquestion();
// }

// function showquestion(){
//     let currentquestion = questions[currentquestionindex];
//     let questionNo = currentquestionindex + 1;
//     questionElement.innerHTML = questionNo + ". " + currentquestion.question;

//     currentquestion.answers.forEach(answer =>{
//         const button = document.createElement("button");
//         button.inputMode = answer.text;
//         button.classList.add("btn");
//         answerbutton.appendChild(button);
//         if(answer.correct){
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click", selectanswer);
//     });
// }

// function resetstate(){
//     nextbutton.style.display = "none";
//     while(answerbutton.firstChild){
//         answerbutton.removeChild(answerbutton.firstChild);
//     }
// }

// startquiz();

// function selectanswer(){
//     const selectedbtn = e.target;
//     const iscorrect = selectedbtn.dataset.correct === "true";
//     if(iscorrect)
//         {
//             selectedbtn.classList.add("correct");
//             score++;
//         }else{
//             selectedbtn.classList.add("incorrect");
//         }
//         Array.from(answerbutton.children).forEach(button =>{
//             if(button.dataset.correct === "true"){
//                 button.classList.add("correct");
//             }
//             button.Disabled = true;
//         });
//         nextbutton.style.display = "block";

// }
// function showscore(){
//     resetstate();
//     questionElement.innerHTML = `you scored ${score} out of ${question.length}!`;
//     nextbutton.innerHTML = "play again";
// }
// function handlenextbutton(){
//     currentquestionindex++;
//     if(currentquestionindex<questions.length){
//         showquestion();
//     }else{
//         showscore();
//     }
// }
// nextbutton.addEventListener("click",()=>{
//     if(currentquestionindex< questions.length){
//         handlenextbutton();
//     }else{
//         startquiz();
//     }
// });


// Define the quiz questions
const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Lisbon", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    // {
    //     question: "What is the smallest prime number?",
    //     answers: [
    //         { text: "1", correct: false },
    //         { text: "2", correct: true },
    //         { text: "3", correct: false },
    //         { text: "5", correct: false }
    //     ]
    // },
    
    // {
    //         question: "What is the correct way to declare a variable in JavaScript?",
    //         answers: [
    //             { text: "variable x = 10;", correct: false },
    //             { text: "let x = 10;", correct: true },
    //             { text: "int x = 10;", correct: false },
    //             { text: "var x : 10;", correct: false }
    //         ]
    //     },
    //     {
    //         question: "What does the `typeof` operator do in JavaScript?",
    //         answers: [
    //             { text: "Checks if a variable is defined", correct: false },
    //             { text: "Returns the type of a variable", correct: true },
    //             { text: "Converts a variable to a string", correct: false },
    //             { text: "Assigns a type to a variable", correct: false }
    //         ]
    //     },
    //     {
    //         question: "How do you create a new object in JavaScript?",
    //         answers: [
    //             { text: "const obj = new Object();", correct: true },
    //             { text: "const obj = {}; ", correct: true },
    //             { text: "const obj = Object.create();", correct: false },
    //             { text: "const obj = create Object();", correct: false }
    //         ]
    //     },
       
    //     {
    //         question: "Which method is used to add an element to the end of an array?",
    //         answers: [
    //             { text: "push()", correct: true },
    //             { text: "pop()", correct: false },
    //             { text: "shift()", correct: false },
    //             { text: "unshift()", correct: false }
    //         ]
    //     },
    //     {
    //         question: "What is a closure in JavaScript?",
    //         answers: [
    //             { text: "A loop that repeats until a condition is met", correct: false },
    //             { text: "A function that has access to variables from another function's scope", correct: true },
    //             { text: "A method for handling asynchronous operations", correct: false },
    //             { text: "A way to define variables in JavaScript", correct: false }
    //         ]
    //     },
    //     {
    //         question: "How do you handle errors in JavaScript?",
    //         answers: [
    //             { text: "Using try...catch", correct: true },
    //             { text: "Using if...else", correct: false },
    //             { text: "Using switch...case", correct: false },
    //             { text: "Using throw", correct: false }
    //         ]
    //     },
    
    //     {
    //         question: "How do you define a function in JavaScript?",
    //         answers: [
    //             { text: "function myFunction() {}", correct: true },
    //             { text: "define myFunction() {}", correct: false },
    //             { text: "function: myFunction() {}", correct: false },
    //             { text: "myFunction() = function {}", correct: false }
    //         ]
    //     },
    //     {
    //         question: "What does the `bind()` method do in JavaScript?",
    //         answers: [
    //             { text: "Creates a new function with a specific `this` value", correct: true },
    //             { text: "Binds two variables together", correct: false },
    //             { text: "Converts a function into a promise", correct: false },
    //             { text: "Adds a new property to an object", correct: false }
    //         ]
    //     },
        
    //         {
    //             question: "What does the `meta` tag in HTML typically contain?",
    //             answers: [
    //                 { text: "Content of the page", correct: false },
    //                 { text: "Meta-information about the document", correct: true },
    //                 { text: "JavaScript code", correct: false },
    //                 { text: "Styles for the page", correct: false }
    //             ]
    //         },
    //         {
    //             question: "Which HTML element is used to display a video?",
    //             answers: [
    //                 { text: "<video>", correct: true },
    //                 { text: "<media>", correct: false },
    //                 { text: "<movie>", correct: false },
    //                 { text: "<embed>", correct: false }
    //             ]
    //         },
        
    //         {
    //             question: "What is the purpose of the `link` tag in HTML?",
    //             answers: [
    //                 { text: "To define a relationship between the document and an external resource", correct: true },
    //                 { text: "To link to other HTML documents", correct: false },
    //                 { text: "To include JavaScript files", correct: false },
    //                 { text: "To embed images", correct: false }
    //             ]
    //         },
    //         {
    //             question: "Which attribute is used to specify the character encoding for a web page?",
    //             answers: [
    //                 { text: "charset", correct: true },
    //                 { text: "encoding", correct: false },
    //                 { text: "type", correct: false },
    //                 { text: "code", correct: false }
    //             ]
    //         },
          
    //         {
    //             question: "Which HTML tag is used to define an ordered list?",
    //             answers: [
    //                 { text: "<ol>", correct: true },
    //                 { text: "<ul>", correct: false },
    //                 { text: "<list>", correct: false },
    //                 { text: "<order>", correct: false }
    //             ]
    //         },
    //         {
    //             question: "How do you add a comment in HTML?",
    //             answers: [
    //                 { text: "// Comment", correct: false },
    //                 { text: "/* Comment */", correct: false },
    //                 { text: "<!-- Comment -->", correct: true },
    //                 { text: "# Comment", correct: false }
    //             ]
    //         },
    //         {
    //             question: "What HTML attribute is used to specify the URL of an image?",
    //             answers: [
    //                 { text: "src", correct: true },
    //                 { text: "href", correct: false },
    //                 { text: "alt", correct: false },
    //                 { text: "url", correct: false }
    //             ]
    //         },
    //         {
    //             question: "Which HTML tag is used to define a table header?",
    //             answers: [
    //                 { text: "<th>", correct: true },
    //                 { text: "<tr>", correct: false },
    //                 { text: "<td>", correct: false },
    //                 { text: "<thead>", correct: false }
    //             ]
    //         },
    //         {
    //             question: "What does the `alt` attribute in an `img` tag represent?",
    //             answers: [
    //                 { text: "Alternative text for the image", correct: true },
    //                 { text: "The URL of the image", correct: false },
    //                 { text: "The title of the image", correct: false },
    //                 { text: "The size of the image", correct: false }
    //             ]
    //         },
    //         {
    //             question: "Which HTML element is used to create a form control that allows users to select multiple options?",
    //             answers: [
    //                 { text: "<input type='checkbox'>", correct: false },
    //                 { text: "<select multiple>", correct: true },
    //                 { text: "<input type='radio'>", correct: false },
    //                 { text: "<input type='text'>", correct: false }
    //             ]
    //         },
    //         {
    //             question: "What does the `href` attribute in the `a` tag specify?",
    //             answers: [
    //                 { text: "The target of the link", correct: false },
    //                 { text: "The URL of the link", correct: true },
    //                 { text: "The title of the link", correct: false },
    //                 { text: "The style of the link", correct: false }
    //             ]
    //         },
    //         {
    //             question: "How can you make a list of items in HTML?",
    //             answers: [
    //                 { text: "Use `<ul>` for unordered lists and `<ol>` for ordered lists", correct: true },
    //                 { text: "Use `<list>` for lists", correct: false },
    //                 { text: "Use `<item>` tags", correct: false },
    //                 { text: "Use `<ul>` for both types of lists", correct: false }
    //             ]
    //         },
    //         {
    //             question: "What is the purpose of the `footer` tag in HTML?",
    //             answers: [
    //                 { text: "To define a footer for a section or page", correct: true },
    //                 { text: "To include JavaScript code", correct: false },
    //                 { text: "To create a navigation bar", correct: false },
    //                 { text: "To display a list of links", correct: false }
    //             ]
    //         },
    //         {
    //             question: "Which HTML element is used to define a section in a document?",
    //             answers: [
    //                 { text: "<section>", correct: true },
    //                 { text: "<div>", correct: false },
    //                 { text: "<article>", correct: false },
    //                 { text: "<container>", correct: false }
    //             ]
    //         },
    //         {
    //             question: "What attribute would you use to specify the width of an image in HTML?",
    //             answers: [
    //                 { text: "width", correct: true },
    //                 { text: "size", correct: false },
    //                 { text: "height", correct: false },
    //                 { text: "scale", correct: false }
    //             ]
    //         },
    //         {
    //             question: "How do you include an external CSS file in an HTML document?",
    //             answers: [
    //                 { text: "<link rel='stylesheet' href='styles.css'>", correct: true },
    //                 { text: "<style src='styles.css'>", correct: false },
    //                 { text: "<css href='styles.css'>", correct: false },
    //                 { text: "<script src='styles.css'></script>", correct: false }
    //             ]
    //         }
        
        
    
    

];

// Get DOM elements
const questionElement = document.getElementById("question");
const answerButtonContainer = document.getElementById("answers-button");
const nextButton = document.getElementById("next-btn");

// Initialize state variables
let currentQuestionIndex = 0;
let score = 0;

// Start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Display the current question
function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButtonContainer.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Reset the state for the next question
function resetState() {
    nextButton.style.display = "none";
    while (answerButtonContainer.firstChild) {
        answerButtonContainer.removeChild(answerButtonContainer.firstChild);
    }
}

// Handle answer selection
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtonContainer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// Display the final score
function showScore() {
    resetState();
          
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!<br/>   <img class="partyImg" src="https://media.tenor.com/ZoZqWaSnN5UAAAAi/diwali-sparkles-stars.gif" alt=""></img>`;
    nextButton.innerHTML = "Play Again";
    
}

// Handle the next button click
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Set up event listeners
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Start the quiz on page load
startQuiz();
