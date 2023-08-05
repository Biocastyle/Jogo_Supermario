const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const dplacar = document.querySelector('.contador')
const gover = document.querySelector('.gameover')
const placar = document.querySelector('#contador')
const placar_over = document.querySelector('#contador_over')

let contador = 0;
let teste = 0;

const jump = () => {
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)

}

const reset = () => {

    pipe.style.animation = 'pipe-animation 1.5s infinite linear';
    pipe.style.left = '';
    mario.style.animation = '';
    mario.style.bottom = ``;

    mario.src = './img/mario.gif'
    mario.style.width = '140px'
    mario.style.marginLeft = '50px'
    placar_over.innerHTML = `<p>${contador++}</p>`;

    dplacar.style.display = 'block'
    gover.style.display = 'none'

    contador = 0;

}

const loop = () => {

    const eng = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
        placar.innerHTML = `<p>${contador++}</p>`;


        if (pipePosition <= 110 && pipePosition > 0 && marioPosition < 100) {
            pipe.style.animation = 'none';
            pipe.style.left = '110px';

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './img/game-over.png'
            mario.style.width = '75px'
            mario.style.marginLeft = '50px'

            dplacar.style.display = 'none'
            gover.style.display = 'block'
            placar_over.innerHTML = `<p>${contador}</p>`;

            clearInterval(eng);
        }
    }, 1);

}


document.addEventListener('load', loop());
document.addEventListener('keydown', jump);
