const $buttons = document.querySelectorAll("button");
const $buttonContainer = document.querySelector("#button_container");
const $divButtons = $buttonContainer.querySelectorAll("div");

$buttons.forEach((button) => {
    button.addEventListener("click", ({ target: { id = "" } }) => {
        if (id === "start") return StartGame();
        if (id === "reset") return ResetGame();
    });
});

$divButtons.forEach((button) => {
    button.addEventListener("click", ({ target: { id = "" } }) => {
        console.log(id);
        ClickOnButton(id);
    });
});

function StartGame() {
    console.log("Start the game");
}

function ResetGame() {
    console.log("Reset the game");
}

function ClickOnButton(id) {
    document.querySelector("#"+id).className = "activated";
    setTimeout(function(){ document.querySelector("#"+id).className = ""; }, 100);
}