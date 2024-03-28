var isGameStarted = false; 
var correctCounter = 0; // Contador de respuestas correctas
var incorrectCounter = 0; // Contador de respuestas incorrectas
var timer;
var gameTimer; 
var totalTime = 99; // Tiempo total del juego en segundos
var lastSumResult = ""; // Variable para almacenar el resultado de la última suma

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Números del 1 al 100
}

function startGame() {
    isGameStarted = true; 
    correctCounter = 0; 
    incorrectCounter = 0; 
    document.getElementById("correct-counter").textContent = "Respuestas Correctas: " + correctCounter;
    document.getElementById("incorrect-counter").textContent = "Respuestas Incorrectas: " + incorrectCounter;
    document.querySelector('.question').style.display = 'block'; // Mostrar el área de pregunta
    document.querySelector('.start-button-container').style.display = 'none'; // Ocultar el botón de iniciar juego
    document.getElementById("next-question-button").style.display = "block"; // Mostrar el botón de otra pregunta
    startTimer(); 
    generateQuestion(); 
    startQuestionTimer();
}

function restartGame() {
    document.querySelector('.question').style.display = 'none';
    document.querySelector('.start-button-container').style.display = 'block'; // Mostrar el botón de iniciar juego
    document.getElementById("next-question-button").style.display = "none"; // Ocultar el botón de otra pregunta
    clearInterval(gameTimer); 
    clearInterval(timer); 
    document.getElementById("timer").textContent = ""; // Limpiar el temporizador
    document.getElementById("result").textContent = ""; // Limpiar el resultado
    document.getElementById("answer").value = ""; // Limpiar el campo de respuesta
    document.getElementById("answer-box").style.display = "none"; // Ocultar el cuadro de respuesta
    document.getElementById("last-sum-result").textContent = ""; // Limpiar el resultado de la última suma
}

function startTimer() {
    var seconds = totalTime;
    gameTimer = setInterval(function() {
        document.getElementById("timer").textContent = seconds;
        seconds--;

        if (seconds < 0) {
            clearInterval(gameTimer); // Detener el temporizador del juego
            document.getElementById("timer").textContent = ""; // Limpiar el temporizador
            document.getElementById("result").textContent = "¡Game Over!"; // Mostrar mensaje de Game Over
            document.getElementById("answer").disabled = true; // Deshabilitar campo de respuesta
            clearInterval(timer); // Detener temporizador de pregunta
            document.getElementById("game-over-button").style.display = 'block'; // Mostrar botón de Game Over
            document.getElementById("next-question-button").style.display = 'none'; // Ocultar botón de próxima pregunta
        }
    }, 1000);
}

function generateQuestion() {
    if (!isGameStarted) return; // Salir si el juego no ha comenzado
    
    var num1 = generateRandomNumber();
    var num2 = generateRandomNumber();
    
    document.getElementById("num1").textContent = num1;
    document.getElementById("num2").textContent = num2;
    document.getElementById("answer").value = ""; // Limpiar campo de respuesta
    document.getElementById("result").textContent = ""; // Limpiar resultado anterior
    document.getElementById("answer-box").style.display = "none"; // Ocultar el cuadro de respuesta
    clearInterval(timer); // Limpiar temporizador anterior
    
    // Mostrar el resultado de la última suma en el cuadro de respuesta
    document.getElementById("last-sum-result").textContent = "La solucion era: " + lastSumResult;
}

function startQuestionTimer() {
    var seconds = 5; // Tiempo para responder cada pregunta en segundos
    timer = setInterval(function() {
        seconds--;
        
        if (seconds < 0) {
            clearInterval(timer); // Detener el temporizador
            checkAnswer(); // Comprobar respuesta cuando se agote el tiempo
        }
    }, 1000);
}

function checkAnswer() {
    if (!isGameStarted) return; // Salir si el juego no ha comenzado
    
    var num1 = parseInt(document.getElementById("num1").textContent);
    var num2 = parseInt(document.getElementById("num2").textContent);
    var answer = parseInt(document.getElementById("answer").value);
    
    var correctAnswer = num1 + num2;
    var resultText = document.getElementById("result");
    var answerBox = document.getElementById("answer-box");
    
    resultText.textContent = "La respuesta correcta es: " + correctAnswer; // Mostrar la respuesta correcta
    
    if (isNaN(answer)) {
        resultText.textContent = "Respuesta inválida. Por favor, introduce un número.";
        return;
    }
    
    answerBox.style.display = "block"; // Mostrar el cuadro de respuesta
    
    if (answer === correctAnswer) {
        resultText.textContent = "¡Correcto!";
        resultText.style.color = "green"; // Cambiar color a verde para indicar respuesta correcta
        lastSumResult = correctAnswer; // Actualizar el resultado de la última suma
        correctCounter++; // Incrementar el contador de respuestas correctas
    } else {
        resultText.textContent = "Incorrecto.";
        resultText.style.color = "red"; // Cambiar color a rojo para indicar respuesta incorrecta
        lastSumResult = correctAnswer; // Actualizar el resultado de la última suma
        incorrectCounter++; // Incrementar el contador de respuestas incorrectas
    }
    
    updateCounters(); // Actualizar contadores
    generateQuestion(); // Generar la siguiente pregunta automáticamente
}

function updateCounters() {
    document.getElementById("correct-counter").textContent = "Respuestas Correctas: " + correctCounter;
    document.getElementById("incorrect-counter").textContent = "Respuestas Incorrectas: " + incorrectCounter;
}

function checkKey(event) {
    if (!isGameStarted) return; // Salir si el juego no ha comenzado
    
    if (event.key === "Enter") {
        checkAnswer();
    }
}

function startTimer() {
    var seconds = totalTime;
    gameTimer = setInterval(function() {
        document.getElementById("timer").textContent = seconds;
        seconds--;

        if (seconds < 0) {
            clearInterval(gameTimer); 
            document.getElementById("timer").textContent = ""; 
            var lastNum1 = document.getElementById("num1").textContent;
            var lastNum2 = document.getElementById("num2").textContent;
            document.getElementById("result").textContent = "¡Game Over!"; // Mostrar mensaje de Game Over
            document.getElementById("answer").disabled = true; // Deshabilitar campo de respuesta
            clearInterval(timer); 
            document.getElementById("last-sum-result").textContent = "La solución era: " + (parseInt(lastNum1) + parseInt(lastNum2));
        }
    }, 1000);
}
