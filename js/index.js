const $buttons = document.querySelectorAll("button");
const $buttonContainer = document.querySelector("#button_container");
const $divButtons = $buttonContainer.querySelectorAll("div");
const nbTouche = document.querySelector("#screen1");
const nbTour = document.querySelector("#screen2");

$buttons.forEach((button) => {
    button.addEventListener("click", ({ target: { id = "" } }) => {
        if (id === "start") return StartGame();
        if (id === "reset") return ResetGame();
    });
});

$divButtons.forEach((button) => {
    button.addEventListener("click", ({ target: { id = "" } }) => {
        ClickOnButton(id);
    });
});

function StartGame() {
    nbTouche.innerHTML = "-";
    nbTour.innerHTML = "1";
}

function ResetGame() {
    nbTouche.innerHTML = "";
    nbTour.innerHTML = "";
}

function ClickOnButton(id) {
    document.querySelector("#"+id).className = "activated";
    setTimeout(function(){ document.querySelector("#"+id).className = ""; }, 100);
}