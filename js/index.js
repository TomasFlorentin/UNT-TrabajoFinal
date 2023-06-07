//Variables

// Cuadros de texto
const cuadrosDeTexto = document.querySelectorAll("textarea");
// parrafos
const parrafos = document.querySelectorAll("p");

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// Función para poner el texto de cada parrafo en un cuadro de texto
function textoEnCuadros(cuadrosDeTexto, parrafos){
    for (let i = 0; i < 3; i++){
        cuadrosDeTexto[i].value = parrafos[i].textContent;
    }
}

// Llamo a la función
textoEnCuadros(cuadrosDeTexto, parrafos);

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

