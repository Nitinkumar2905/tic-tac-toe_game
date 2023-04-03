console.log('welcome');
let bgMusic = new Audio('audios/bg.mp3');
let audioTurn = new Audio('audios/ting.mp3');
let gameOver = new Audio('audios/gameover.mp3');
let turn = 'X';

// function to change turn
const changeTurn = ()=>{
    return turn ==='X'?'0':'X'
}

// function to check for win
const checkWin = ()=>{

}

// game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            document.getElementsByClassName('info')[0].innerText = 'turn for   ' + turn;
        }
        else{
            
        }
    })
})