


let ballCup = 1; // Inicialmente, la bola está en el vaso del medio

    function playGame() {
        resetGame();
        moveCupsRandomly();
        setTimeout(() => revealBall(), 6000);
    }

    function resetGame() {
        ballCup = Math.floor(Math.random() * 3);
        document.getElementById('ball').style.display = 'none';
    }

    function moveCupsRandomly() {
        let cups = document.getElementsByClassName('glass');
        let container = document.getElementById('glass-container');
        let cupOrder = Array.from(cups).map((glass, index) => ({ glass, order: index }));
        cupOrder.sort(() => Math.random() - 0.5);

        for (let i = 0; i < cupOrder.length; i++) {
        container.appendChild(cupOrder[i].glass);
        }
    }

    function revealBall() {
        document.getElementById('ball').style.display = 'block';
    }

    function checkCup(selectedCup) {
        if (selectedCup === ballCup) {
        alert('¡Has ganado!');
        } else {
        alert('¡Has perdido!');
        }
    }

