'use strict';

const gameData=[
    [0,0,0],
    [0,0,0],
    [0,0,0],
];


let editedPlayer=0;
let activePlayer=0;
let currentRound=1;


const players=[{
    name:'',
    symbol:'X'
},
{
    name:'',
    symbol:'O'
},
];


const startgameButton =document.getElementById('start-game');

const overlayingElement =document.getElementById('adjustment-s');
const backDrop =document.getElementById('style');
const formElement =document.querySelector('form');

const errorsOutput =document.getElementById('erro-rs');
const editPlayerOneButton =document.getElementById('edit-player1');
const editPlayerTwoButton =document.getElementById('edit-player2');
const cancelButton =document.getElementById('close-button');
const gameArea = document.getElementById('active-game');
const gameOverr=document.getElementById('game-over');

const gameboardTiles= document.querySelectorAll('#game-board li');

const activePlayerName = document.getElementById('active-player-name');

/*not adding a () a.k.a parenthesis because i don't want it to get executed right away .*/
editPlayerOneButton.addEventListener('click', openPlayerConfig);
editPlayerTwoButton.addEventListener('click', openPlayerConfig);

cancelButton.addEventListener('click', closePlayer);
backDrop.addEventListener('click', closePlayer);

formElement.addEventListener('submit', savePlayerInfo);

startgameButton.addEventListener('click', startNewGame);

for(const oneBoardtile of gameboardTiles){
    oneBoardtile.addEventListener('click',selectgameField);
}