let username = '';
let categories = ['HTML', 'CSS', 'JavaScript', 'React.js']; 
let categoryIndex = 0;
let questionIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 15 * 60; 
let totalTimeTaken = 0;
let attemptedQuestions = 0;
let correctAnswers = 0;

const questions = [
    // HTML Questions
    {
        id: 1,
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Text Makeup Language"
        ],
        answer: "Hyper Text Markup Language",
        category: "HTML"
    },
    {
        id: 2,
        question: "Which HTML tag is used to define an internal stylesheet?",
        options: ["<style>", "<script>", "<css>", "<link>"],
        answer: "<style>",
        category: "HTML"
    },
    {
        id: 3,
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<break>", "<lb>", "<br>", "<line>"],
        answer: "<br>",
        category: "HTML"
    },
    {
        id: 4,
        question: "How can you make a numbered list in HTML?",
        options: ["<ul>", "<ol>", "<dl>", "<list>"],
        answer: "<ol>",
        category: "HTML"
    },
    {
        id: 5,
        question: "What is the correct way to make text bold in HTML?",
        options: ["<strong>", "<bold>", "<b>", "<em>"],
        answer: "<b>",
        category: "HTML"
    },
    {
        id: 6,
        question: "Which attribute specifies a unique identifier for an HTML element?",
        options: ["class", "id", "style", "name"],
        answer: "id",
        category: "HTML"
    },
    {
        id: 7,
        question: "Which HTML tag is used to define a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>",
        category: "HTML"
    },
    {
        id: 8,
        question: "Which attribute is used to specify an image source in HTML?",
        options: ["src", "href", "alt", "img"],
        answer: "src",
        category: "HTML"
    },
    {
        id: 9,
        question: "Who is the father of HTML?",
        options: [
            "Rasmus Lerdorf",
            "Tim Berners-Lee",
            "Brendan Eich",
            "Sergey Brin"
        ],
        answer: "Tim Berners-Lee",
        category: "HTML"
    },
    {
        id: 10,
        question: "What is the correct doctype declaration for HTML5?",
        options: ["<!DOCTYPE html>", "<!DOCTYPE HTML5>", "<html doctype='5'>", "<html5>"],
        answer: "<!DOCTYPE html>",
        category: "HTML"
    },

    // CSS Questions
    {
        id: 11,
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Colorful Style Sheets",
            "Computer Style Sheets",
            "Creative Style Sheets"
        ],
        answer: "Cascading Style Sheets",
        category: "CSS"
    },
    {
        id: 12,
        question: "Which property is used to change the background color?",
        options: ["color", "background-color", "bg-color", "bgstyle"],
        answer: "background-color",
        category: "CSS"
    },
    {
        id: 13,
        question: "How do you add an external CSS file to an HTML document?",
        options: [
            "<css href='style.css'>",
            "<link rel='stylesheet' href='style.css'>",
            "<style src='style.css'>",
            "<stylesheet href='style.css'>"
        ],
        answer: "<link rel='stylesheet' href='style.css'>",
        category: "CSS"
    },
    {
        id: 14,
        question: "Which property is used to change the text color?",
        options: ["color", "text-color", "font-color", "foreground-color"],
        answer: "color",
        category: "CSS"
    },
    {
        id: 15,
        question: "How do you select an element with id 'example'?",
        options: ["#example", ".example", "example", "*example"],
        answer: "#example",
        category: "CSS"
    },
    {
        id: 16,
        question: "Which CSS property controls the text size?",
        options: ["text-style", "text-size", "font-size", "font-style"],
        answer: "font-size",
        category: "CSS"
 },
    {
        id: 17,
        question: "How do you make the text bold in CSS?",
        options: ["font-weight: bold;", "text-decoration: bold;", "font-style: bold;", "font-bold: true;"],
        answer: "font-weight: bold;",
        category: "CSS"
    },
    {
        id: 18,
        question: "What is the default position value of an element in CSS?",
        options: ["relative", "absolute", "static", "fixed"],
        answer: "static",
        category: "CSS"
    },
    {
        id: 19,
        question: "Which CSS property adds space inside an element?",
        options: ["margin", "padding", "border", "spacing"],
        answer: "padding",
        category: "CSS"
    },
    {
        id: 20,
        question: "Which pseudo-class selects an element when you hover over it?",
        options: [":hover", ":link", ":active", ":focus"],
        answer: ":hover",
        category: "CSS"
    },

    // JavaScript Questions
    {
        id: 21,
        question: "What is JavaScript primarily used for?",
        options: ["Markup", "Styling", "Interactivity", "Databases"],
        answer: "Interactivity",
        category: "JavaScript"
    },
    {
        id: 22,
        question: "Which of the following is used to define a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        answer: "All of the above",
        category: "JavaScript"
    },
    {
        id: 23,
        question: "What is the correct syntax to log a message in the console?",
        options: ["console.log('message')", "log.console('message')", "print('message')", "log('message')"],
        answer: "console.log('message')",
        category: "JavaScript"
    },
    {
        id: 24,
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "/* */", "<!-- -->", "Both // and /* */"],
        answer: "Both // and /* */",
        category: "JavaScript"
    },
    {
        id: 25,
        question: "What does '===' signify in JavaScript?",
        options: ["Assignment", "Equality", "Strict equality", "Comparison"],
        answer: "Strict equality",
        category: "JavaScript"
    },
    {
        id: 26,
        question: "How do you call a function named 'myFunction'?",
        options: ["call myFunction()", "myFunction()", "run myFunction", "execute myFunction()"],
        answer: "myFunction()",
        category: "JavaScript"
    },
    {
        id: 27,
        question: "Which method is used to add an element at the end of an array?",
        options: ["push()", "pop()", "unshift()", "shift()"],
        answer: "push()",
        category: "JavaScript"
    },
    {
        id: 28,
        question: "What does 'null' represent in JavaScript?",
        options: ["A string", "An object", "Nothing", "An undefined value"],
        answer: "Nothing",
        category: "JavaScript"
    },
    {
        id: 29,
        question: "How do you write a conditional statement in JavaScript?",
        options: ["if (condition) {}", "if condition {}", "if condition []", "if [condition] {}"],
        answer: "if (condition) {}",
        category: "JavaScript"
    },
    {
        id: 30,
        question: "What is the purpose of the 'return' statement in JavaScript?",
        options: ["To exit a function", "To call another function", "To define a variable", "To stop code execution"],
        answer: "To exit a function",
        category: "JavaScript"
    },

    // React.js Questions
    {
        id: 31,
        question: "What is React.js?",
        options: ["A JavaScript library for building user interfaces", "A database", "A server-side framework", "A CSS preprocessor"],
        answer: "A JavaScript library for building user interfaces",
        category: "React.js"
    },
    {
        id: 32,
        question: "What is JSX?",
        options: ["A JavaScript syntax extension", "A CSS framework", "A database query language", "A debugging tool"],
        answer: "A JavaScript syntax extension",
        category: "React.js"
    },
    {
        id: 33,
        question: "Which method is used to update state in a React component?",
        options: ["setState()", "updateState()", "changeState()", "modifyState()"],
        answer: "setState()",
        category: "React.js"
    },
    {
        id: 34,
        question: "What is a component in React?",
        options: ["A reusable piece of UI", "A JavaScript variable", "An HTML element", "A CSS class"],
        answer: "A reusable piece of UI",
        category: "React.js"
    },
    {
        id: 35,
        question: "What does the useEffect hook do?",
        options: ["Manages side effects in a function component", "Manages component state", "Creates new components", "Optimizes rendering"],
        answer: "Manages side effects in a function component",
        category: "React.js"
    },
    {
        id: 36,
        question: "What is the virtual DOM in React?",
        options: ["A copy of the real DOM", "A browser API", "A JavaScript object representation of the DOM", "An external database"],
        answer: "A JavaScript object representation of the DOM",
        category: "React.js"
    },
    {
        id: 37,
        question: "How can you pass data from a parent component to a child component?",
        options: ["Using props", "Using state", "Using context", "Using Redux"],
        answer: "Using props",
        category: "React.js"
    },
    {
        id: 38,
        question: "What does the useState hook do?",
        options: ["Manages component state in functional components", "Manages routing", "Handles side effects", "Creates new components"],
        answer: "Manages component state in functional components",
        category: "React.js"
    },
    {
        id: 39,
        question: "What is the default port for a React development server?",
        options: ["3000", "8080", "5000", "8000"],
        answer: "3000",
        category: "React.js"
    },
    {
        id: 40,
        question: "How do you create a new React app using Create React App?",
        options: ["npx create-react-app my-app", "npm install react my-app", "npm create-react-app my-app", "npx react my-app"],
        answer: "npx create-react-app my-app",
        category: "React.js"
    }
];

function getName(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name_input');
    username = nameInput.value.trim();
    if (!username) {
        alert('Name is required');
        return;
    }
    document.getElementById('welcome_message').innerHTML = `<p>Welcome, ${username}! You can start the quiz now!</p>`;
    nameInput.value = '';
}

function startQuiz(event) {
    categoryIndex = 0;
    category = categories[categoryIndex];
    questionIndex = 0;
    score = 0;
    totalTimeTaken = 0;
    attemptedQuestions = 0;
    correctAnswers = 0;
    const container = document.getElementById('container');
    container.innerHTML = `
        <h1>${category} Quiz</h1>
        <div class="info-container">
            <div>Time: <span id="time">15:00</span></div>
            <div>Score: <span id="score">0</span></div>
        </div>
        <div id="question-container"></div>
        <div class="option-container"></div>
        <div id="feedback-container" style="margin-top: 10px; font-weight: bold;"></div>
        <div class="button-container">
            <button id="previous-button" onclick="navigateQuestion(-1)">Previous</button>
            <button id="submit-button" onclick="submitQuiz()">Submit</button>
            <button id="next-button" onclick="navigateQuestion(1)">Next</button>
        </div>
    `;
    resetTimer();
    startTimer();
    displayQuestion();
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            endQuiz();
        } else {
            timeLeft--;
            totalTimeTaken++;
            updateTimerDisplay();
        }
    }, 1000);
}

function resetTimer() {
    timeLeft = 15 * 60;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('time').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.querySelector('.option-container');
    const filteredQuestions = questions.filter(q => q.category === category);
    if (questionIndex < filteredQuestions.length) {
        const currentQuestion = filteredQuestions[questionIndex];
        questionContainer.innerHTML = `<div class="question-number">${questionIndex + 1}/${filteredQuestions.length}</div><p>${currentQuestion.question}</p>`;
        optionsContainer.innerHTML = '';
        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.className = 'option-button';
            button.onclick = () => checkAnswer(button, option, currentQuestion.answer);
            optionsContainer.appendChild(button);
        });
        document.getElementById('score').textContent = score;
        resetTimer();
        startTimer();
    } else {
        endQuiz();
    }
}

function checkAnswer(button, selectedOption, correctAnswer) {
    attemptedQuestions++;
    const optionsContainer = document.querySelector('.option-container');
    const buttons = optionsContainer.querySelectorAll('.option-button');
    
    buttons.forEach(btn => {
        btn.style.backgroundColor = '';
    });

    if (selectedOption === correctAnswer) {
        score++;
        correctAnswers++;
        button.style.backgroundColor = 'lightgreen';
    } else {
        button.style.backgroundColor = 'lightgreen';
    }

    document.getElementById('score').textContent = score;
}

function navigateQuestion(direction) {
    clearInterval(timerInterval);
    const filteredQuestions = questions.filter(q => q.category === category);
    const newIndex = questionIndex + direction;
    if (direction === 1) {
        if (newIndex < filteredQuestions.length) {
            questionIndex = newIndex;
            displayQuestion();
        } else if (categoryIndex < categories.length - 1) {
            categoryIndex++;
            questionIndex = 0;
            category = categories[categoryIndex];
            const container = document.getElementById('container');
            container.querySelector('h1').textContent = `${category} Quiz`;
            displayQuestion();
        } else {
            endQuiz();
        }
    } else if (direction === -1) {
        if (newIndex >= 0) {
            questionIndex = newIndex;
            displayQuestion();
        } else {
            document.getElementById('feedback-container').innerHTML = "This is the first question!";
            setTimeout(() => {
                document.getElementById('feedback-container').innerHTML = '';
            }, 3000);
        }
    }
    startTimer();
}

function submitQuiz() {
    clearInterval(timerInterval);
    endQuiz();
}

function endQuiz() {
    clearInterval(timerInterval);
    const totalQuestions = questions.filter(q => q.category === category).length;
    const wrongAnswers = attemptedQuestions - correctAnswers;
    const scorePercentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);
    const container = document.getElementById('container');
    container.innerHTML = `
        <div class="result-container">
            <div class="result-title">Quiz Results</div>
            <div class="result-item">Participant's Name: ${username}</div>
            <div class="result-item">Total Time Taken: ${Math.floor(totalTimeTaken / 60)} minutes ${totalTimeTaken % 60} seconds</div>
            <div class="result-item">Number of Questions: ${totalQuestions}</div>
            <div class="result-item">Number of Attempted Questions: ${attemptedQuestions}</div>
            <div class="result-item">Number of Correct Questions: ${correctAnswers}</div>
            <div class="result-item">Number of Wrong Questions: ${wrongAnswers}</div>
            <div class="result-item">Score Percentage: ${scorePercentage}%</div>
        </div>
        <div class="button-container">
            <button class="result-button" onclick="startAgain()">Start Again</button>
            <button class="result-button" onclick="goToHome()">Go to Home</button>
        </div>
    `;
}

function startAgain() {
    questionIndex = 0;
    score = 0;
    totalTimeTaken = 0;
    attemptedQuestions = 0;
    correctAnswers = 0;
    const container = document.getElementById('container');
    container.innerHTML = `
        <h1>Welcome to the Quiz Application!</h1>
        <p>Please select a category to start the quiz:</p>
        <button class="category-button" onclick="startQuiz(event)" value="HTML">HTML</button>
        <button class="category-button" onclick="startQuiz(event)" value="CSS">CSS</button>
        <button class="category-button" onclick="startQuiz(event)" value="JavaScript">JavaScript</button>
        <button class="category-button" onclick="startQuiz(event)" value="React.js">React.js</button>
    `;
}

function goToHome() {
    const container = document.getElementById('container');
    container.innerHTML = `
        <img src="./logo/logo.png" alt="logo" class="logo">
        <h1>Hello Learners!</h1>
        <h3>Enter Your Name to Continue the Quiz</h3>
        <form onsubmit="getName(event)">
            <input type="text" id="name_input" class="name-input">
            <button type="submit" class="name-button">Enter</button>
        </form>
        <p class="note">You'll have 15 seconds to answer each question</p>
        <div id="welcome_message" class="welcome-message"></div>
        <hr></hr>
        <h1>Welcome to the Quiz Application!</h1>
        <p>Please select a category to start the quiz:</p>
        <button class="category-button" onclick="startQuiz({ target: { value: 'HTML' } })">HTML</button>
        <button class="category-button" onclick="startQuiz({ target: { value: 'CSS' } })">CSS</button>
        <button class="category-button" onclick="startQuiz({ target: { value: 'JavaScript' } })">JavaScript</button>
        <button class="category-button" onclick="startQuiz({ target: { value: 'React.js' } })">React.js</button>
    `;
}
