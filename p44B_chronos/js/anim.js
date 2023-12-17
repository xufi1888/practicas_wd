
// VARIABLES Y CONSTANTES
const timeCentiseconds = document.querySelector('.time__miliseconds');
const timeSeconds = document.querySelector('.time__seconds');
const chronoButtons = document.querySelector('.chrono__buttons')
let miliseconds = 0
let seconds = 0
// Puedo declarar el valor fuera y colocarlo como un objeto/string/función vacíos, preferiblemente del mismo tipo que va a ser una vez que se defina.
let chronoTimer = " "
let isRunning = false




// FUNCIÓN PARA PINTAR TIEMPO EN PANTALLA [HELPER]
function writeTime(seconds, miliseconds) {
    // Cuando no vas a concatenar con texto los valores se pueden poner directamente sin necesidad de comillas:
    timeCentiseconds.innerHTML = miliseconds
    timeSeconds.innerHTML = seconds
}

// FUNCIÓN PARA INICIAR EL CONTADOR
function startChrono() {
    if(!isRunning){
    chronoTimer = setInterval(() => {;
        miliseconds += 1
        if(miliseconds == 99) {
            miliseconds = 0;
            seconds += 1;
        }
        writeTime(seconds, miliseconds)
    }, 10)
    isRunning = true;
}};

// FUNCIÓN PARA EL BOTÓN DE STOP
function stopChrono() {
    clearInterval(chronoTimer);
    isRunning = false;
}

// FUNCIÓN PARA EL BOTÓN DE RESET
function resetChrono() {
    miliseconds = 0
    seconds = 0
    // Al llamar a función se pueden cambiar los valores específicos de esa versión de la función para modular aún más.
    writeTime(0,0)
}



// ASIGNAMOS A CADA BOTÓN SU FUNCIÓN
chronoButtons.addEventListener('click', function(e){
    // SINTAXIS SOLO UTIL PARA LLAMADAS A FUNCIONES O_O (escenario más común cuando tengo buen código!). USARLA SIEMPRE QUE PODAMOS.
    e.target.value === "start" && startChrono()
    e.target.value === "stop" && stopChrono()
    e.target.value === "reset" && resetChrono()
})