const pikachu = document.querySelector('.pikachu');
const trainer = document.querySelector('.trainer');

const jump = () =>  {
    pikachu.classList.add('jump');

    setTimeout(() => {
        pikachu.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const trainerPosition = trainer.offsetLeft;
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');

    console.log(pikachuPosition);

    if (trainerPosition <= 50 && trainerPosition > 0 && pikachuPosition < 170) {
    
        trainer.style.animation = 'nome';
        trainer.style.left = `${trainerPosition}px`

        pikachu.style.animation = 'nome';
        pikachu.style.left = `${pikachuPosition}px`

        pikachu.src = 'Image/pokeball.gif';
        pikachu.style.width = '30px'
        pikachu.style.marginLeft = '50px'
        pikachu.style.marginBottom = '-1px'

        trainer.src = 'Image/trainer-over.gif';
        trainer.style.marginBottom = '-12px'

        clearInterval(loop);


    }
}, 10);

document;addEventListener('keydown', jump);