let currentMoleTile;
let currentFlowerTile;
let score = 0;
let gameOver = true;
let easy = false;
let medium = false;
let hard = false;
let impossible = false;

window.onload = function() {
    document.querySelector("#easy").addEventListener("click", () => {
        if(gameOver){
            easy = true;
            gameOver = false;
            setGame();
        }
    });
    document.querySelector("#medium").addEventListener("click", () => {
        if(gameOver){
            medium = true;
            gameOver = false;
            setGame();
        }
    });
    document.querySelector("#hard").addEventListener("click", () => {
        if(gameOver){
            hard = true;
            gameOver = false;
            setGame();
        }
    });
    document.querySelector("#impossible").addEventListener("click", () => {
        if(gameOver){
            impossible = true;
            gameOver = false;
            setGame();
        }
    });
}

function setGame() {
    for(let i = 0; i < 9; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    if(easy){
        setInterval(setMole, 2000);
        setInterval(setFlower, 1000);
    }
    else if(medium){
        setInterval(setMole, 1000);
        setInterval(setFlower, 2000);
    }
    else if(hard){
        setInterval(setMole, 500);
        setInterval(setFlower, 600);
    }    
    else if(impossible){
        setInterval(setMole, 200);
        setInterval(setFlower, 300);
    }
}

function getRandTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {

    if(gameOver){
        return;
    }
    if(currentMoleTile){
        currentMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./mole.png"

    let num = getRandTile();

    if(currentFlowerTile && currentFlowerTile.id ==  num){
        return;
    }
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}

function setFlower(){
    if(gameOver){
        return;
    }
    if(currentFlowerTile){
        currentFlowerTile.innerHTML = "";
    }

    let flower = document.createElement("img");
    flower.src = "/flower.png";

    let num = getRandTile();

    if(currentMoleTile && currentMoleTile.id == num){
        return;
    }
    currentFlowerTile = document.getElementById(num);
    currentFlowerTile.appendChild(flower);
}

function selectTile(){

    if(gameOver){
        return;
    }
    
    if(this == currentMoleTile){
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if(this == currentFlowerTile){
        document.getElementById("score").innerHTML = "GAMEOVER: " + score.toString();
        gameOver = true;
    }
}