const player1 = document.querySelector('.arena--player1');
const player2 = document.querySelector('.arena--player2');
const fightButton = document.querySelector('.fight__button');
const personajes = {
    p0: {
        name: 'goku',
        force: 2
    },
    p1: {
        name: 'vejeta',
        force: 3
    }, 
    p2: {
        name: 'picollo',
        force: 1
    } ,
};

fightButton.addEventListener('click', fight);

function fight() {
    const keyPlayer1 = Math.floor(Math.random()*3)
    const keyPlayer2 = Math.floor(Math.random()*3)

    const urlPlayer1 = personajes['p'+keyPlayer1].name + '.webp';
    const photoPlayer1 = document.createElement('img')
    photoPlayer1.src = urlPlayer1;
    player1.innerHTML = "";
    player1.appendChild(photoPlayer1);

    const urlPlayer2 = personajes['p'+keyPlayer2].name + '.webp';
    const photoPlayer2 = document.createElement('img')
    photoPlayer2.src = urlPlayer2;
    player2.innerHTML = "";
    player2.appendChild(photoPlayer2);

    const powerPlayer1 = personajes['p'+keyPlayer1].force;
    const powerPlayer2 = personajes['p'+keyPlayer2].force;

    showWinner(powerPlayer1, powerPlayer2);
};

function showWinner(powerPlayer1, powerPlayer2) {
    player1.classList.remove('winner', 'draw')
    player2.classList.remove('winner', 'draw')

    if(powerPlayer1 > powerPlayer2) {

        setTimeout(() => {
            player1.classList.add('winner')
        }, 0)

        console.log('gana 1')

    } else if(powerPlayer1 < powerPlayer2) {

        setTimeout(() => {
            player2.classList.add('winner')
        }, 0)

        console.log('gana 2')

    } else {

        player1.classList.add('draw')
        player2.classList.add('draw')
        console.log('empate')
    }
}


