//Variables

// Cuadros de texto
const cuadrosDeTexto = document.querySelectorAll("textarea");
// parrafos
const parrafos = document.querySelectorAll("p");

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// Función para poner el texto de cada parrafo en un cuadro de texto
function textoEnCuadros(cuadrosDeTexto, parrafos){
    for (let i = 0; i < parrafos.length; i++){
        cuadrosDeTexto[i].value = parrafos[i].textContent;
    }
}

// Llamo a la función
textoEnCuadros(cuadrosDeTexto, parrafos);

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

function editarParrafos(){
    var textoCuadro1 = document.getElementById("message-text-1").value;
    var textoCuadro2 = document.getElementById("message-text-2").value;
    var textoCuadro3 = document.getElementById("message-text-3").value;
    parrafos[0].innerHTML = textoCuadro1;
    parrafos[1].innerHTML = textoCuadro2;
    parrafos[2].innerHTML = textoCuadro3;
}