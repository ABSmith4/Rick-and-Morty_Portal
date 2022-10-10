function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

const colors = [
  "#36981c",
  "#4ce41c",
  "#6cbc44",
  "#58a44c",
  "#f4fcdc",
  "#66eb26",
  "#acec7c",
  "#b9fc31",
  "#8cf42c",
]

module.exports = { 
  randomIntFromRange, 
  randomColor, 
  distance,
  colors, 
}

