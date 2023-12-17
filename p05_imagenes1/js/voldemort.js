//1. Capturar Elementos
const btnFlechas = document.querySelector('#btn_flechas')
const fotoVoldy = document.querySelector ('.fotito')

//2. Crear evento de usuario
btnFlechas.addEventListener('click', cambio_foto)

//3. Crear función que sucederá al ejecutar el evento
let imageCounter = 1
function cambio_foto() {
    imageCounter = imageCounter+1
    if(imageCounter==4){imageCounter=1}
    fotoVoldy.src="img_voldemort/" + imageCounter + ".webp"
}
