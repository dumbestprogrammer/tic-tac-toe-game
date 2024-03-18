function resetGame(){
    activePlayer=0;
    currentRound=1;
    gameOverr.firstElementChild.innerHTML=
    'You Won 🥳 <span id="winner-name">PLAYER NAME</span>!';
    gameOverr.style.display='none';
    

    let gameData=[
        [0,0,0],
        [0,0,0],
        [0,0,0],
    ];

    resetBoard();
}

function resetBoard() {
    for (const tile of gameboardTiles) {
        tile.textContent = ''; // Clear the content of the tile
        tile.classList.remove('disabled'); // Remove the 'disabled' class
    }

    // Clear the game data array
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
        }
    }
}

function startNewGame(){
    if(players[0].name==='' || players[1].name===''){
        alert('Please , set the player names before playing !');
        return;    
    }

    resetGame();
    
    activePlayerName.textContent=players[activePlayer].name;
    gameArea.style.display='block';
}
 


function switchPlayer(){
    if(activePlayer===0){
        activePlayer=1;
    }else{
        activePlayer=0;
    }
    activePlayerName.textContent=players[activePlayer].name;
}




function selectgameField(event){
const selectedColumn=event.target.dataset.col-1;
 const selectedRow=event.target.dataset.row-1;

 if(gameData[selectedRow][selectedColumn]>0){
    alert('Please select an empty field !!');
    return;
 }

event.target.textContent=players[activePlayer].symbol;
event.target.classList.add('disabled');
gameData[selectedRow][selectedColumn]=activePlayer+1;

const winnerId=checkforgameOver();
if(winnerId!==0){
    endGame(winnerId);
}
console.log(winnerId);
currentRound++;
 switchPlayer();
}






function checkforgameOver(){
    /*I have inserted my player id so i will knnow that a particular row or column is 
    occupied by the same player */

    /* row check*/
for(let  i=0;i<3;i++){
        if( gameData[i][0]>0 && 
            gameData[i][0]=== gameData[i][1] &&
            gameData[i][1]=== gameData[i][2]){
        return gameData[i][0];
    }
}

 /* column check*/
for(let  i=0;i<3;i++){
    if( gameData[0][i]>0 && 
        gameData[0][i]=== gameData[1][i] &&
        gameData[0][i]=== gameData[2][i]){
    return gameData[0][i];
}
}
 /* diagonals checking */


if(gameData[0][0]>0 &&
    gameData[0][0]===gameData[1][1] &&
    gameData[1][1]===gameData[2][2]){
        return gameData[0][0];
    }

    if(gameData[2][0]>0 &&
        gameData[2][0]===gameData[1][1] &&
        gameData[1][1]===gameData[0][2]){
            return gameData[2][0];
        }
if(currentRound===9){
    return -1;
}
return 0;
}






function endGame(winnerId){
    gameOverr.style.display='block';
    /*since winner ID is 1 or 2 , i'm adding -1 */
    if(winnerId>0){
    const winnerName=players[winnerId-1].name;
    gameOverr.firstElementChild.firstElementChild.textContent= winnerName;
}else{
    gameOverr.firstElementChild.textContent='It\'s a DRAW !'
}
}
