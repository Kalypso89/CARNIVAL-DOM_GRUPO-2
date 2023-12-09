let ballUnderGlass = document.getElementById('ball');
let selectedCup;
const glass1 = document.getElementById('glass1');
const glass2 = document.getElementById('glass');
const glass3 = document.getElementById('glass3');
let playButton = document.querySelector('play-btn');




function moveGlass() {

    const randomPosition1 = getRandomPosition();
    const randomPosition2 = getRandomPosition();
    const randomPosition3 = getRandomPosition();

    glass1.style.transform = `translateX(${randomPosition1}px)`;
    glass.style.transform =  `translateX(${randomPosition2}px)`;
    glass3.style.transform = `translateX(${randomPosition3}px)`;
}

function getRandomPosition() {
    // Generar una posición aleatoria entre 0 y 300 (ajusta según tus necesidades)
    return Math.floor(Math.random() * 3);
}








