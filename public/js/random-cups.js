
//let score = 0;
//let rounds = 0;
//let maxRounds = 5; // Adjust as needed
//let wins = 0;
//let losses = 0;
//let roundDuration = 15; // in seconds
//let gameInterval;

//function startGame() {
    // Reset game variables
//    score = 0;
//    rounds = 0;
//    wins = 0;
//    losses = 0;
//
//    updateRoundUI();

    // Start the game loop
//    gameInterval = setInterval(() => {
//        if (rounds < maxRounds) {
//            shuffleCups(); // Shuffle the cups
//            setTimeout(() => {
//                allowGlassSelection(); // Allow the user to select a glass after a pause
 //           }, 2000); // Adjust the pause duration as needed
 //       } else {
 //           endGame();
 //       }
 //   }, (roundDuration + 2) * 1000); // Adjust the total duration for each round
//}

//function shuffleCups() {
  //const glassesContainer = document.querySelectorAll(".glass");
  //const glasses = Array.from(glassesContainer.children);

  //glasses.forEach(glass => {
 //     const randomPosition = Math.floor(Math.random() * glasses.length);
//      glassesContainer.appendChild(glass);
//  });
//}
//    for (let i = glasses.length - 1; i > 0; i--) {
//        const j = Math.floor(Math.random() * (i + 1));

        // Swap the positions of the glasses to create a shuffle effect
 //       glassesContainer.insertBefore(glasses[j], glasses[i]);
 //   }


//function allowGlassSelection() {
    // Allow the user to click a glass
   // document.getElementById("glass1").onclick = function () {
 //       checkGlass(1);
  //  };
  //  document.getElementById("glass2").onclick = function () {
  //      checkGlass(2);
   // };
  //  document.getElementById("glass3").onclick = function () {
  //      checkGlass(3);
  //  };

    // Set a timeout to reset glass click events after a certain duration
  //  setTimeout(() => {
  //      resetGlassClickEvents();
  //  }, roundDuration * 1000);
//}

//function checkGlass(chosenGlass) {
    // Logic to check if the chosen glass is correct
 //   if (chosenGlass === 1) {
 //       score++;
 //       wins++;
 //   } else {
 //       losses++;
 //   }

    // Continue with the next round
//    rounds++;
 //   updateRoundUI();
//}

//function resetGlassClickEvents() {
  //  document.getElementById("glass1").onclick = null;
  //  document.getElementById("glass2").onclick = null;
  //  document.getElementById("glass3").onclick = null;
//}

//function endGame() {
//    clearInterval(gameInterval);

    // Display the final result
//    if (wins >= 3) {
//        alert("Congratulations! You won the game!");
//    } else {
//        alert("Game over. Better luck next time!");
//    }
//}

//function updateRoundUI() {
    // Update the UI with current round information
//    document.querySelector(".round-txt p").innerText = "ROUND " + rounds;
//    document.querySelector(".text-center.space-y-1:nth-child(1) .rounded-xl").innerText = wins;
//    document.querySelector(".text-center.space-y-1:nth-child(3) .rounded-xl").innerText = losses;
//}


let ballPosition = 2; // El vaso número 2 (indexado desde 1) contiene la pelota

function startGame() {
  resetGame();
  shuffleGlasses();
  setTimeout(() => revealBall(), 10000); // Mostrar la pelota después de 10 segundos
}

function resetGame() {
  hideBall();
}

function revealBall() {
  const ball = document.getElementById('ball');
  const glassWithBall = document.getElementById(`glass${ballPosition}`);
  ball.style.display = 'block';
//   ball.style.top = glassWithBall.offsetTop + 'px';
  ball.style.left = glassWithBall.offsetLeft + 'px';
}

function hideBall() {
  const ball = document.getElementById('ball');
  ball.style.display = 'none';
}

function shuffleGlasses() {
  // Intercambiar las posiciones de los vasos de manera aleatoria
  const glass = document.querySelectorAll('.glass');
  const shuffledGlass = [...glass].sort(() => Math.random() -0.5);

  shuffledGlass.forEach((glass, index) => {
    const newPosition = index * 120; // Ajusta según tu diseño
    glass.style.left = newPosition + 'px';
  });
}

function checkGuess(guess) {
  if (guess === ballPosition) {
    alert('¡Correcto! Has encontrado la pelota.');
  } else {
    alert('Incorrecto. Inténtalo de nuevo.');
  }
}