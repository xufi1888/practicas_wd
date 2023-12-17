// -------- ELEMENTOS CAPTURADOS --------
const audio = new Audio('audio/bamboleo.mp3')
const buttons = document.querySelector('.reproductor__menu__buttons')
const pause = document.querySelector('.button--pause')
const play = document.querySelector('.button--play')
const skip = document.querySelector('.button--skip')

var state = " "

// ------- LANZADOR DE LA FUNCIÓN AL HACER CLICK (creo) --------
buttons.addEventListener('click', function(e){
    clickOnElements(e.target, e.target.id)
})




// -------- SALEN LAS DOS FUNCIONES DEL PLAY Y DEL PAUSE --------

function clickOnElements(button, type) {
    type == 'pause--button' && stopMusic();
    type == 'play--button' && playMusic();
}



// --------- FUNCIONES DE PLAY Y PAUSE --------

function stopMusic() {
    audio.pause();
    state = "stop"
    MusicLook();
    // audio.currentTime = 0
}

function playMusic() {
    audio.play();
    state = "play"
    MusicLook();
    console.log(audio.playbackRate)
}




// -------- FUNCIÓN CAMBIO DE COLOR DE BOTONES --------

function MusicLook() {
    if(state === "stop") {
        pause.innerHTML = '<img id="pause--button" src="img/pause_orange.svg" alt="">';
        play.innerHTML = '<img id="play--button" src="img/play_white.svg" alt="">';
    } else if(state === "play") {
        play.innerHTML = '<img id="play--button" src="img/play_orange.svg" alt="">';
        pause.innerHTML = '<img id="pause--button" src="img/pause_white.svg" alt="">';
    }
}




// ---------- FUNCIÓN MOUSEDOWN  SKIP ----------

skip.addEventListener('mousedown', function() {
    skip.innerHTML = '<img id="play--button" src="img/skip_orange.svg" alt="">';
    audio.playbackRate = 5.0;
    onmouseup = (backFunction) => {
        skip.innerHTML = '<img id="play--button" src="img/skip_white.svg" alt="">';
        audio.playbackRate = 1.0;
    }
})


