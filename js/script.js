const mario = document.querySelector('.super-mario');
const pipe = document.querySelector('.pipe-game');

// Arrow fuction, faz o mesmo efeito da function, porem com escrita atualizada
// Nesse caso, foi criada a função 'jump' que pega a const maria e adiciona mais
// uma classe chamada 'jump-mario'
const jump = () => {
    mario.classList.add('jump-mario');
    //a função 'setTimeout' é uma função usada no JS
    // usar uma função em determinado tempo,
    // para isso é passado 2 parametros. A função e o tempo
    setTimeout(() => {
        mario.classList.remove('jump-mario');
    }, 500);
}

//a função 'setInterval' é uma função usada no JS
// usar uma função em determinado intervalo de tempo,
// para isso é passado 2 parametros. A função e o tempo   
const loopGame = setInterval(() => {
    const pipePosition = pipe.offSetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/mario-game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '45px';

        clearInterval(loopGame);
    }
}, 10);

document.addEventListener('keydown', jump);
