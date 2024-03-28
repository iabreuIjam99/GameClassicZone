//Codigo para el swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides:true,
    loop:true,
    spaceBetween: 30,
    grabCursor:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints : {
        991: {
            slidesPerView: 3
        }
    }
});

//Codigo para ir a una pagina aleatoria

document.getElementById("randomButton").addEventListener("click", function() {

    // Generar un número aleatorio entre 0 y 3 (para las tres ubicaciones)

    var randomNumber = Math.floor(Math.random() * 4);

    // Redirigir al usuario basándose en el número aleatorio generado

    switch(randomNumber) {
        case 0:
            window.location.href = "tictactoe/index.html";
            break;
        case 1:
            window.location.href = "ahorcado/index.html";
            break;
        case 2:
            window.location.href = "suma/Index.html";
            break;
        case 3:
            window.location.href = "QUIZ/index.html";
            break;
        default:

            // En caso de que por alguna razón no se genere un número válido

            alert("Ocurrió un error al seleccionar el juego.");
    }
});