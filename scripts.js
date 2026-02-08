const body = document.querySelector("body");
const startup = document.getElementById('startup');
const xButton = document.getElementById('Xs');
const oButton = document.getElementById('Os');
const players = [];
const cells = [];
console.log(cells);
const length = cells.length;
let turn = true;

const playerstext = document.getElementById('player');


xButton.addEventListener('click', (e) =>{
    choosePlayerSymbol(e.target);
});

oButton.addEventListener('click', (e) =>{
    choosePlayerSymbol(e.target);
});


const Gameboard = (()=>{
    cells[0] = document.getElementById('one');
    console.log(cells[0]);
    const two = document.getElementById('two');
    const three = document.getElementById('three');
    const four = document.getElementById('four');
    const five = document.getElementById('five');
    const six = document.getElementById('six');
    const seven = document.getElementById('seven');
    const eight = document.getElementById('eight');
    const nine = document.getElementById('nine');
});


const gameWin = (symbol)=>{

    //check for Xs
    //check for Os
}

function Player(sign) {
    this.sign = sign;
}

function choosePlayerSymbol(sign){
    let p1 = sign.textContent;
    let p2 = null;
    if (sign.textContent == "X"){
        p2 = "O";
    } else {
        p2 = "X";
    }
    players.push(new Player(p1));
    players.push(new Player(p2))
    startup.style.display="none";
    console.log(players[0].sign, players[1].sign);
}

const gameManager = function(players){
    if (turn == true){
        body.style.backgroundColor = "antiquewhite";
    } else {
        body.style.backgroundColor = "blanchedalmond";
    }
}

function addClicks(){
    for (i=0;i<length;i++){
        cells[i].addEventListener('click', e =>{
            if (turn == true){
                cells[i].textContent = players[0].sign;
                turn = false;
            } else {
                cells[i].textContent = players[1].sign;
                turn=true;
            }
        })
    }
}
