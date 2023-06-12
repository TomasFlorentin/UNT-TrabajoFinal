//Variables

// Cuadros de texto
const cuadrosDeTexto = document.querySelectorAll("textarea");
// parrafos
const parrafos = document.querySelectorAll("p");

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// Función para poner el texto de cada párrafo en un cuadro de texto
function textoEnCuadros(cuadrosDeTexto, parrafos){
    for (let i = 0; i < parrafos.length; i++){
        cuadrosDeTexto[i].value = parrafos[i].textContent;
    }
}

// Llamo a la función
textoEnCuadros(cuadrosDeTexto, parrafos);

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// función para editar los párrafos
function editarParrafos(){
    var textoCuadro1 = document.getElementById("message-text-1").value;
    var textoCuadro2 = document.getElementById("message-text-2").value;
    var textoCuadro3 = document.getElementById("message-text-3").value;
    for (i = 0; i < parrafos.length; i++){
        parrafos[i].innerHTML = eval("textoCuadro" + (i+1));
    }
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// función para borrar los párrafos

function borrarParrafo1(){
    parrafos[0].remove();
}

function borrarParrafo2(){
    parrafos[1].remove();
}

function borrarParrafo3(){
    parrafos[2].remove();
}