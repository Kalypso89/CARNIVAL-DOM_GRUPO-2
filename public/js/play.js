var contador = 31;

function play(){

    document.getElementById("play-btn").style.opacity = "0%";
    document.getElementById("time").style.opacity = "100%";
    contador--,
    document.getElementById("time").innerHTML = contador;

}

var intervalo;

document.getElementById("play-btn").addEventListener('click',function(){intervalo = setInterval(play, 1000)});