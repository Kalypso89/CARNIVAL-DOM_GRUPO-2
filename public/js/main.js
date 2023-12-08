var contador = 30;

function escribe(){
    contador--,
    document.getElementById('parrafo').innerHTML = contador;
}

var intervalo;

document.getElementById('btn-iniciar').addEventListener('click',function(){intervalo = setInterval(escribe, 1000)});

document.getElementById('btn-detener').addEventListener('click',function(){clearInterval(intervalo)});