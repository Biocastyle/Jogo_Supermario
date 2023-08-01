const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const elemento = document.querySelector('#contador')
let contador = 0;

document.addEventListener('keydown', jump)

const jump = () => {
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)

}

const loop = setInterval(() => {
    const x = 0;
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    element.innerHTML = `<p>${contador++}</p>`;

    // contador++;
    

        if (pipePosition <= 110 && pipePosition > 0 && marioPosition < 100) {

            pipe.style.animation = 'none';
            pipe.style.left = '110px';
            
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
            
            mario.src = './img/game-over.png';
            mario.style.width ='75px';
            mario.style.marginLeft ='50px';

            // element.innerHTML = `<p>${contador}</p>`;

            clearInterval(loop);
        }

        // else{
        //     element.innerHTML = `<p>${contador}</p>`;
        // }
    }

}, 10);

const reset = () =>{
    pipe.style.animation = 'pipe-animation 1.5s infinite linear';
    pipe.style.left =//Colocar o certo

    mario.style.animation = '' //olhar qual a condição certa
    mario.style.bottom ='0px'

    mario.src = '../img/mario.gif';
    
    
}