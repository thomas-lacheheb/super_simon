const $buttons = document.querySelectorAll("button");
const $buttonContainer = document.querySelector("#button_container");
const $divButtons = $buttonContainer.querySelectorAll("div");

$buttons.forEach((button) => {
    button.addEventListener("click", ({ target: { innerHTML = "" } }) => {
        console.log(innerHTML);
    });
});

$divButtons.forEach((button) => {
    button.addEventListener("click", ({ target: { id = "" } }) => {
        console.log(id);
    });
});