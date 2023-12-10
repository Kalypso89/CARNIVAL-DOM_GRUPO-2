export function setRoundDisplayFromLocalStorage(roundDisplay) {
  localStorage.setItem("roundDisplay", JSON.stringify(roundDisplay));
}

export function getRoundDisplayFromLocalStorage() {
  return JSON.parse(localStorage.getItem("roundDisplay"));
}

export function resetRoundDisplay() {
  setRoundDisplayFromLocalStorage({
    current: 0,
    max: 5,
  });
}

// SHOULD be called when game cup screen is displayed
export function refreshDisplay() {
  const roundDisplay = getRoundDisplayFromLocalStorage();
  const displayContent = roundDisplay.current + " / " + roundDisplay.max;
  document.getElementById("round-txt").textContent = displayContent;
}

// SHOULD be called when user presses the Play button
export function incrementRound() {
  const roundDisplay = getRoundDisplayFromLocalStorage();
  if (roundDisplay.current < roundDisplay.max)
    setRoundDisplayFromLocalStorage({
      current: roundDisplay.current + 1,
      max: roundDisplay.max,
    });
  refreshDisplay();
}
