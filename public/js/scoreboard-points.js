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
