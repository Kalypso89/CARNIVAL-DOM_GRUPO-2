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
  document.getElementById("win-points").textContent = displayWinnerPoints;
  const displayLoserPoints = pointsDisplay.loss;
  document.getElementById("loss-points").textContent = displayLoserPoints;
}

export function incrementWinnerPoints() {
  const pointsDisplay = getPointsDisplayfromLocalStorage();
  if (pointsDisplay.win < pointsDisplay.max)
    setPointsDisplayfromLocalStorage({
      win: pointsDisplay.win + 1,
      max: pointsDisplay.max,
    });
  refreshPointsDisplay();
}

export function incrementLoserPoints() {
  const pointsDisplay = getPointsDisplayfromLocalStorage();
  if (pointsDisplay.loss < pointsDisplay.max)
    setPointsDisplayfromLocalStorage({
      loss: pointsDisplay.loss + 1,
      max: pointsDisplay.max,
    });
  refreshPointsDisplay();
}
