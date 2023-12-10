document.addEventListener("DOMContentLoaded", main);

function main () {
    document.getElementById("start__form").addEventListener("submit",submitForm);
};

function submitForm (event) { //handler del evento cuando se envía el formulario
    event.preventDefault();
    localStorage.setItem("playerName", event.target.player.value);
    location.pathname ="/public/pages/game.html";
}
/*
document.getElementById("paly-btn").style.opacity = "0%";
document.getElementById("paly-btn").style.opacity = "100%";
// poner esto en el propio onclik de play para que la misma funcion que mueve los vasos lo haga desaparecer y viseversa
*/