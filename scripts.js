const GameManager = function(){
    //  --ASSIGN DOM ELEMENTS
    const body = document.querySelector("body");
    const startup = document.getElementById('startup');
    const xButton = document.getElementById('Xs');
    const oButton = document.getElementById('Os');
    const players = [];
    let turn = 'player1';
    let activePlayer = null;
    let win = false;
    let cells = document.querySelectorAll('.cell');

    const entername = document.getElementById('entername');
    entername.style.display = "none";

    const startgame = document.getElementById('startgame');
    startgame.style.display = "none";

    const startbutton = document.getElementById('startbutton');
    const currentturn = document.getElementById('currentturn');
    currentturn.style.display = "none";

    const namebutton = document.getElementById('namebutton');
    const nameinput = document.getElementById('name'); 

    const gamewin = document.getElementById('gamewin');
    gamewin.style.display = "none";

    const startover = document.getElementById('startover');
    startover.style.display = "none";

    const winner = document.getElementById('winner');

    const startoverbutton = document.getElementById('startoverbutton');
    const playagainbutton = document.getElementById('playagain');

    playagainbutton.addEventListener('click', (e)=>{
        clearCells();

        startgame.style.display = "block";

        gamewin.style.display = "none";

        win = false;

    });

    startoverbutton.addEventListener('click', (e)=>{
        clearCells();
        startgame.style.display = "block";

        gamewin.style.display = "none";

        win = false;
    });


    namebutton.addEventListener('click', (e)=>{
        if(e.target.textContent == "Player 1, enter name"){
            players[0].name = nameinput.value;
            nameinput.value = "";
            e.target.textContent = "Player 2, enter name";
            nameinput.focus();
        } else {
            players[1].name = nameinput.value;
            nameinput.value = "";
            entername.style.display = "none";

            startgame.style.display = "block";

        }
    });
    

    startbutton.addEventListener('click', (e)=>{
        activePlayer = players[0];
        turn = "player1";
        currentturn.style.display = "block";

        currentturn.textContent = `${players[0].name}'s Turn`;
        startgame.style.display = "none";

        startover.style.display = "block";

    });




    //  --SET BOARD FOR ACCEPTING CLICKS
    cells.forEach(element =>{
        element.addEventListener('click', (e)=>{
            let empty = checkForError(e.target);
            if(empty == true){
                element.textContent = `${activePlayer.sign}`;
                win = checkForWin(activePlayer.sign);
                if (win == true){
                    endGame(activePlayer.sign, win);
                    
                } else {
                    changeTurns(e.target);
                }
            }            
        });
    });

    //  -PLAYER1 CHOOSES X OR O
    xButton.addEventListener('click', (e) =>{
        choosePlayerSymbol(e.target, players);
    });

    oButton.addEventListener('click', (e) =>{
        choosePlayerSymbol(e.target, players);
    });

    function choosePlayerSymbol(sign, players){
        let p1 = sign.textContent;
        let name1 = null;
        let p2 = null;
        let name2 = null;
        if (sign.textContent == "X"){
            p2 = "O";
        } else {
            p2 = "X";
        }
        players.push(new Player(p1, name1));
        players.push(new Player(p2, name2));
        startup.style.display="none";

        entername.style.display = "block";

        console.log(players[0].sign, players[1].sign);
        nameinput.focus();
    }

    function Player(sign, name) {
        this.sign = sign;
        this.name = name;
    }

    function changeTurns(cell) {
        if (turn=='player1'){
            body.style.backgroundColor="blanchedAlmond"
            turn='player2';
            activePlayer = players[1];
            currentturn.textContent = `${players[1].name}'s turn`
            startover.style.display = "block";

        } else {
            body.style.backgroundColor="AntiqueWhite"
            turn = 'player1';
            activePlayer = players[0];
            currentturn.textContent = `${players[0].name}'s turn`;
            startover.style.display = "block";

        }
    }

    function checkForError(cell){
        if(cell.textContent == ""){
            return true;
        } else {
            return false;
        }
    }

    const checkForWin = (s)=>{
        if (cells[0].textContent == s && 
            ((cells[1].textContent == s && cells[2].textContent == s) || 
            (cells[3].textContent == s && cells[6].textContent == s) ||
            (cells[4].textContent == s && cells[8].textContent == s))){
                return true;
        } else if (cells[1].textContent == s && 
                cells[4].textContent == s &&
                cells[7].textContent == s){
            return true;       
        } else if (cells[2].textContent == s &&
                ((cells[4].textContent==s && cells[6].textContent==s) ||
                (cells[5].textContent==s && cells[8].textContent==s))){
            return true;
        } else if (cells[3].textContent==s && 
                cells[4].textContent==s &&
                cells[5].textContent==s){
            return true;
        } else if (cells[6].textContent==s && 
            cells[7].textContent==s && cells[8].textContent==s){
            return true;
        } else {
            return false;
        }
    }

    const endGame = (active) =>{
        if (turn=="player1"){
            winner.textContent = `${players[0].name} wins!`;
            currentturn.style.display="none";
            gamewin.style.display="block";
            startover.style.display = "none";

        } else{
            winner.textContent = `${players[1].name} wins!`;
            currentturn.style.display="none";
            gamewin.style.display="block";
            startover.style.display = "none";

        }
        win = false;
    }

    function clearCells(){
        cells.forEach(element=>{
            element.textContent = "";
        });
    }
}


gameManager = GameManager();