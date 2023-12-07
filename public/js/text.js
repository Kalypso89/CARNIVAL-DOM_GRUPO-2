let btn = document.getElementById('play-btn');

btn.addEventListener('click', function () {
    console.log("Se hizo click en el botton");

})


function changeText() {
    var text = document.getElementById('txt');
    text.innerHTML = "He cambiado de titulo";


}