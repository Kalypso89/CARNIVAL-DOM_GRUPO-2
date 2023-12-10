export function setPointsDisplayfromLocalStorage(points) {
  localStorage.setItem("pointsDisplay", JSON.stringify(points));
}

export function getPointsDisplayfromLocalStorage() {
  return JSON.parse(localStorage.getItem("pointsDisplay"));
}

export function resetPointsDisplay() {
  setPointsDisplayfromLocalStorage({
    win: 0,
    loss: 0,
    max: 3,
  });
}

export function refreshPointsDisplay() {
  const pointsDisplay = getPointsDisplayfromLocalStorage();
  const displayWinnerPoints = pointsDisplay.win;
  const displayLoserPoints = pointsDisplay.loss;
  document.getElementById("counter-numbers-win").textContent =
    displayWinnerPoints;
  document.getElementById("counter-numbers-loss").textContent =
    displayLoserPoints;
}
