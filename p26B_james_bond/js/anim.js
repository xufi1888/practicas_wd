const startBtn = document.querySelector('.start__button')
const redDot = document.querySelector('.red__dot')
const audio = new Audio('img/bond_theme.mp3')

startBtn.addEventListener('click', function() {
    redDot.classList.add('active_class');
    startBtn.style.display = 'none';
    audio.play();
})