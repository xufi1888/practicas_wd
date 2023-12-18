const startBtn = document.querySelector('.no_me_fio__start');
const pillar_item = document.querySelectorAll('.no_me_fio__pilar');
const body = document.querySelector('.no_me_fio')

startBtn.addEventListener('click', move_pillars);

function move_pillars() {
    pillar_item.forEach(item => {
        item.classList.toggle('play')
    });

    body.classList.toggle('play')

    startBtn.classList.toggle('play')
}