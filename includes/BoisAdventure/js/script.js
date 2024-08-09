
const ork = document.querySelector('.ork');
const cano = document.querySelector('.cano');
const vitoria = document.querySelector('.vitoria');
let score = 0;

const pulo =() => {
    ork.classList.add('pulo');

    setTimeout(() => {
        ork.classList.remove('pulo');
        
    }, 500);

}

let LemmanCrossed = false;

const loop = setInterval(() => {
    const LemmanPosition = cano.offsetLeft;
    const orkPosition = +window.getComputedStyle(ork).bottom.replace('px', '');
    

//Condição de DERROTA
    if (LemmanPosition <= 120 && LemmanPosition>= 0 && orkPosition < 100) {
        cano.style.animation = 'none';
        cano.style.left = `${LemmanPosition}px`

        ork.style.animation = 'none';
        ork.style.bottom = `${orkPosition}px`

        ork.src = 'img/perdeu.gif';
        ork.style.width = '190px';
        ork.style.marginLeft = '20px';


        setTimeout(() => {
            vitoria.src = 'img/derrota.png';
            vitoria.style.left = 0;
            vitoria.style.marginTop = '50px';
            vitoria.style.marginLeft = '280px';
            vitoria.style.width = '500px';
        }, 500);
 
        clearInterval(loop);
    }else if (LemmanPosition < 0 && !LemmanCrossed) { 
        score++;
        LemmanCrossed = true; 
        document.getElementById('score').textContent = `Pontuação: ${score}`;
        cano.style.animation = 'cano-animation 2s infinite linear';

        if(score === 10){
            clearInterval(loop);
            setTimeout(() => {
                vitoria.style.left = 0;
                vitoria.style.marginTop = '100px';
                vitoria.style.marginLeft = '280px';
                vitoria.style.width = '500px';
                cano.style.display = 'none';
            }, 500);
        }
    } else if (LemmanPosition > 120) {
        LemmanCrossed = false; 
    }
}, 10)

document.addEventListener('keydown' , pulo);