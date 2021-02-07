const $buttons = document.querySelectorAll("button");
const $buttonContainer = document.querySelector("#button_container");
const $divButtons = $buttonContainer.querySelectorAll("div");
const nbTouche = document.querySelector("#screen1");
const nbTour = document.querySelector("#screen2");

let gameSequence = [];
let playerSequence = [];
let isGameStart = false;

$buttons.forEach((button) => {
    button.addEventListener("click", ({ target: { id = "" } }) => {
        if (id === "start" && !isGameStart) return StartGame();
        if (id === "reset") return ResetGame();
    });
});

$divButtons.forEach((button) => {
    button.addEventListener("click", ({ target: { id = "" } }) => {
        ClickOnButtonAndPlaySong(id);
        if(nbTouche.innerHTML != "" && nbTour.innerHTML != "") {
            check(id);
        }
    });
});

function StartGame() {
    isGameStart = true;
    nbTouche.innerHTML = "-";
    nbTour.innerHTML = "1";
    newButtonForGameSequence();
}

function ResetGame() {
    isGameStart = false;
    nbTouche.innerHTML = "";
    nbTour.innerHTML = "";
}

function ClickOnButtonAndPlaySong(id) {
    document.querySelector("#"+id).className = "activated";
    setTimeout(function(){ document.querySelector("#"+id).className = ""; }, 100);
    switch (id) {
        case 'topleft':
          var audio = new Audio('sound/do.mp3');
          break;
        case 'topright':
          var audio = new Audio('sound/fa.mp3');
          break;
        case 'bottomleft':
          var audio = new Audio('sound/mi.mp3');
          break;
        case 'bottomright':
          var audio = new Audio('sound/re.mp3');
          break;
    }
    audio.play();
}

function newButtonForGameSequence() {
    var newButton = Math.floor((Math.random() * 4) + 1);
    gameSequence.push(newButton);
    switch (newButton) {
        case 1:
        case 2:
        case 3:
        case 4:
          ClickOnButtonAndPlaySong($divButtons[newButton - 1].id)
          break;
    }
}

function check(id) {
    console.log(id);
    switch (id) {
        case 'topleft':
          playerSequence.push(1);
          break;
        case 'topright':
          playerSequence.push(2);
          break;
        case 'bottomleft':
          playerSequence.push(3);
          break;
        case 'bottomright':
          playerSequence.push(4);
          break;
    }

    console.log(playerSequence[playerSequence.length - 1]);
    console.log(gameSequence[playerSequence.length - 1]);
    if(playerSequence[playerSequence.length - 1] !== gameSequence[playerSequence.length - 1]) {
        console.log("Faux");
    }
    else {
        console.log("OK");
    }
}

