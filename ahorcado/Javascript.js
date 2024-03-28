const palabras = ["javascript", "html", "css", "programacion", 
"ordenador", "internet"];
    let palabraSecreta = palabras[Math.floor(Math.random() * 
    palabras.length)];
    let letrasAdivinadas = [];
    let intentosFallidos = 0;
    
    function inicializarJuego() {
        letrasAdivinadas = [];
        intentosFallidos = 0;
        mostrarHangman();
        actualizarPalabra();
    }

function actualizarPalabra() {
    const wordDisplay = document.getElementById('word-display');
    let palabraMostrada = '';
    for (let letra of palabraSecreta) {
            if (letrasAdivinadas.includes(letra)) {
            palabraMostrada += letra + ' ';
            } else {
            palabraMostrada += '_ ';
            }
            }
        wordDisplay.textContent = palabraMostrada;
    }

    function adivinar() {
        const input = document.getElementById('guess-input');
        const letra = input.value.toLowerCase();
        
        if (letra && !letrasAdivinadas.includes(letra)) {
            if (palabraSecreta.includes(letra)) {
            letrasAdivinadas.push(letra);
            actualizarPalabra();
             if (palabraSecreta.split('').every(letra => letrasAdivinadas.includes(letra))) {
        mostrarMensaje('¡Felicidades! Has adivinado la palabra.'); }
        } 
        
        else {
            intentosFallidos++;
            mostrarHangman();
        }

        }

        input.value = '';

        }

        function mostrarMensaje(mensaje) {
        const message = document.getElementById('message');
        message.textContent = mensaje;
        }

        function mostrarHangman() {
        const hangmanParts = document.querySelectorAll('.hangman > div');
        
        for (let i = 0; i < intentosFallidos; i++) {
            hangmanParts[i].classList.add('dead');
        }

        if (intentosFallidos === hangmanParts.length) {
        mostrarMensaje('¡Has perdido! La palabra secreta era: ' +  palabraSecreta);
        }
        
        }

        inicializarJuego();
        