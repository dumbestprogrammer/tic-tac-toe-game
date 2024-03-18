function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid;
    overlayingElement.style.display='block';
    backDrop.style.display='block';
}

function closePlayer(){
    overlayingElement.style.display='none';
    backDrop.style.display='none';
    formElement.firstElementChild.classList.remove('erro-rs');
    errorsOutput.textContent='';
    formElement.firstElementChild.lastElementChild.value='';
}

function savePlayerInfo(event){
event.preventDefault();
const formDATA = new FormData(event.target);
const enteredPlayerName = formDATA.get('player-name').trim();
if(!enteredPlayerName){
    event.target.firstElementChild.classList.add('erro-rs');
    errorsOutput.textContent='Please Enter a VALID NAME !';
    return;
}
const updatedPlayerData = document.getElementById('player-'+ editedPlayer+'-data');
updatedPlayerData.children[1].textContent=enteredPlayerName;

/* since the edited player above has value in + , 
I'm subtracting 1 so that i will get the correct index .
another alternative i can thnik of is -

if(editedPlayer===1){
    player[0].name=enteredPlayerName;
}else{
player[1].name=enteredPlayerName; }   */
players[editedPlayer-1].name=enteredPlayerName;
closePlayer();
}