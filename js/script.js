const pipe = document.querySelector('.pipe')
const mario = document.querySelector('.mario')
const counter = document.querySelector('.counter')
const menu = document.querySelector('.menu')
const button = document.querySelector('.play-again')
const menuScore = document.querySelector('.menu-score')
const sky = document.querySelector('.tela')
const cloud = document.querySelector('.cloud')
let armazenador = JSON.parse(localStorage.getItem('score'));
let time = 1;

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
    // console.log(marioPosition)
    // console.log(pipePosition)
    if(setScore){
        setScore()
    }
    // if(time > 50 && time < 100 || time > 150 && time < 200){
    //     sky.style.background = 'rgb(33, 33, 33)'
    //     cloud.style.opacity = '0.5'
    // }
    // if(time > 100 && time < 150 || time >200){               //tentativa de mudar o back, mas transition n funfa
    //     sky.style.background = ''
    //     cloud.style.opacity = '' 
    //     sky.style.transition = ''
    // }
    // if(time > 50 && time <= 100 && pipePosition > 90){
    //     pipe.style.animation = 'pipe-animation 1.5s linear infinite'
    // }
    // if(time > 100 && time <= 200 && pipePosition > 90){
    //     pipe.style.animation = 'pipe-animation 1s linear infinite'
    // }
    // if(time > 200 && time <= 300 && pipePosition > 90){              //tentativa de acelerar o pipe, mas buga 
    //     pipe.style.animation = 'pipe-animation 0.7s linear infinite'
    // }
    // if(time > 300 && pipePosition > 90){
    //     pipe.style.animation = 'pipe-animation 0.5s linear infinite'
    // }
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
document.addEventListener('keydown', jump)
button.addEventListener('click', removeMenu)


