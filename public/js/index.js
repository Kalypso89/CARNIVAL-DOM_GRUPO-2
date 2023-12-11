document.getElementById("start-form").addEventListener("submit",submitForm);

function submitForm (event) {
    event.preventDefault();
    localStorage.setItem("playerName", event.target.player.value);
    location.pathname ="/public/pages/game.html";
}