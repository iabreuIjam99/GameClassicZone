const quizData = [
    {
        question: '¿Qué significa HTML?',
        options: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Tool Multi Language'],
        answer: 'Hyper Text Markup Language'
    },
    {
        question: '¿Cuál es el elemento HTML para crear un párrafo?',
        options: ['<paragraph>', '<p>', '<par>', '<para>'],
        answer: '<p>'
    },
    {
        question: '¿Qué elemento HTML se utiliza para mostrar una imagen?',
        options: ['<img>', '<picture>', '<image>', '<src>'],
        answer: '<img>'
    },
    {
        question: '¿Cómo se define el título de un documento HTML?',
        options: ['<header>', '<h1>', '<title>', '<head>'],
        answer: '<title>'
    },
    {
        question: '¿Cuál es el atributo que se utiliza para enlazar una hoja de estilos externa a un documento HTML?',
        options: ['src', 'link', 'href', 'style'],
        answer: 'href'
    },
    {
        question: '¿Qué elemento HTML se utiliza para definir una lista ordenada?',
        options: ['<ol>', '<ul>', '<list>', '<li>'],
        answer: '<ol>'
    },
    {
        question: '¿Cuál es el atributo utilizado en el elemento <a> para enlazar otra página?',
        options: ['href', 'link', 'src', 'url'],
        answer: 'href'
    },
    {
        question: '¿Cuál es la etiqueta HTML para definir una tabla?',
        options: ['<table>', '<tr>', '<td>', '<th>'],
        answer: '<table>'
    },
    {
        question: '¿Qué elemento HTML se utiliza para crear un enlace?',
        options: ['<a>', '<link>', '<href>', '<url>'],
        answer: '<a>'
    },
    {
        question: '¿Cuál es la etiqueta HTML para definir un encabezado de nivel 1?',
        options: ['<h1>', '<heading>', '<header>', '<h>'],
        answer: '<h1>'
    }
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const resultContainer = document.getElementById('result-container');
const nextBtn = document.getElementById('next-btn');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionText.textContent = currentQuizData.question;
    optionsContainer.innerHTML = '';

    currentQuizData.options.forEach(option => {
        const optionElement = document.createElement('button');
        optionElement.textContent = option;
        optionElement.addEventListener('click', checkAnswer);
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const currentQuizData = quizData[currentQuestion];

    if (selectedOption === currentQuizData.answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionText.textContent = '';
    optionsContainer.innerHTML = '';
    resultContainer.textContent = `Tu puntuación: ${score} de ${quizData.length}`;
    nextBtn.style.display = 'none';
}

nextBtn.addEventListener('click', loadQuestion);

loadQuestion();