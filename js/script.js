const pipe = document.querySelector('.pipe')
const mario = document.querySelector('.mario')
const counter = document.querySelector('.counter')
const menu = document.querySelector('.menu')
const button = document.querySelector('.play-again')
const menuScore = document.querySelector('.menu-score')
const screenGame = document.querySelector('.tela')
const cloud = document.querySelector('.cloud')
let armazenador = JSON.parse(localStorage.getItem('score'));
let time = 1;
let width = window.screen.width;
let height = window.screen.height;


if(height > width){
    screenGame.style.transform = 'rotate(90deg)'
    screenGame.style.height = `${width}px`
    screenGame.style.width = '100%'
    pipe.style.animation = 'pipe-animation 0.8s linear infinite'
}


const jump = () =>{
    mario.classList.add('jump')
    
    setTimeout(() =>{
        mario.classList.remove('jump')
    }, 500)
}

const counterPlay = setInterval(() => {
    counter.innerHTML = `${time}`
    time++;
    menuScore.innerHTML = `your score: ${time - 1}`
}, 100)

const removeMenu = () =>{
    menu.style.display = 'none';
    
    window.location.reload(true);


}
function setScore(){
    let bestScore = document.querySelector('.best-score')

    if(localStorage.score){
        let scoreNumber = JSON.parse(localStorage.getItem('score'))
        bestScore.innerHTML = `${scoreNumber - 1}`
    }else{
        bestScore.innerHTML = ''
    }
}
const setMenu = () => {
    menu.style.display = 'flex';
}


  const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = Number(window.getComputedStyle(mario).bottom.replace('px', ''));
    if(setScore){
        setScore()
    }
    if(pipePosition <= 134 && pipePosition > 0 && marioPosition <= 96){

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
        
        mario.style.bottom = `${marioPosition}px`
        mario.style.animation = 'none'

        mario.src = './img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '60px'

        counter.style.display = 'none'
        
        
        clearInterval(loop)
        clearInterval(counterPlay)
        
        setMenu()

        if(time - 1 > armazenador){
            armazenador = time;
            localStorage.score = armazenador;
        }
    }

  }, 10)
document.addEventListener('touchstart', jump)
document.addEventListener('keydown', jump)
button.addEventListener('click', removeMenu)


