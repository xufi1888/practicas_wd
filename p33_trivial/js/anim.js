const btnCarlo = document.querySelector('.op1');
const btnRich = document.querySelector('.op2');
const btnAlf = document.querySelector('.op3');
const result = document.querySelector('.result');

let isAnswered = false

btnCarlo.addEventListener ('click', function() {
    if(!isAnswered){
    result.classList.add('is-wrong');
    result.innerHTML = '¡No! Berengaria de Navarra fue esposa de Ricardo Corazón de León.';
    btnCarlo.style.backgroundColor = 'darksalmon';
    btnRich.style.backgroundColor = 'lightgreen';
    btnAlf.style.backgroundColor = 'darksalmon';
    isAnswered = true;
    } else {
        return
    }
})

btnAlf.addEventListener ('click', function() {
    if(!isAnswered){
    result.classList.add('is-wrong');
    result.innerHTML = '¡No! Berengaria de Navarra fue esposa de Ricardo Corazón de León.';
    btnCarlo.style.backgroundColor = 'darksalmon';
    btnRich.style.backgroundColor = 'lightgreen';
    btnAlf.style.backgroundColor = 'darksalmon';
    isAnswered = true;
    } else {
        return
    }
})

btnRich.addEventListener ('click', function() {
    if(!isAnswered){
    result.classList.add('is-right');
    result.innerHTML = '¡Correcto! Berengaria de Navarra fue esposa de Ricardo Corazón de León.';
    btnCarlo.style.backgroundColor = 'darksalmon';
    btnRich.style.backgroundColor = 'lightgreen';
    btnAlf.style.backgroundColor = 'darksalmon';
    isAnswered = true;
    } else {
        return
    }  
})