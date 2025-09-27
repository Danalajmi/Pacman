// board array
//Tiled
board = [
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 2, 2, 2, 2, 2, 0,
  0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0,
  0, 0, 2, 2, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 2, 2, 0, 0, 0, 2, 2, 2, 0, 2, 2, 0,
  0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 2, 2, 0, 0, 0, 2, 0, 0, 2,
  2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2,
  2, 2, 0, 2, 0, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0,
  2, 0, 2, 0, 2, 2, 0, 2, 2, 0, 0, 0, 0, 2, 0, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 2,
  0, 2, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 2, 2, 0, 2, 0,
  0, 2, 0, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0,
  0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 0,
  2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
]

// wall is 2
// empty is 0


let score = document.body.querySelector("#scoreNum")

let isWall

// pac at game start
let pacIndex = 140
let newIndex
let pinkyIndex = 95

// an array for the new divs
const squares = []

board.forEach((element) => {
  // create divs
  const pixel = document.createElement("div")
  // divs into parent div (zone)
  document.querySelector(".zone").appendChild(pixel)
  if (element === 2) {
    pixel.classList.add("wall")
  } else if (element === 0) {
    pixel.classList.add("feed")
  }

  squares.push(pixel)
})

squares[pacIndex].classList.add("pac")

// geeks for geeks https://www.geeksforgeeks.org/javascript/javascript-detecting-the-pressed-arrow-key/

document.addEventListener("keydown", (keyPress) => {
  const key = keyPress.key

  switch (key) {
    case "ArrowDown":
      moveDown()
      break

    case "ArrowUp":
      moveUp()
      break

    case "ArrowRight":
      moveRight()
      break

    case "ArrowLeft":
      moveLeft()
      break
  }

  // pac wins at 300
  if (newIndex == 300) {
    alert("You won!")
  }
})

const pacMove = () => {
  if (squares[newIndex].classList.contains("wall")) {
    isWall = true

    return
  } else {
    isWall = false
    if (squares[pacIndex].classList.contains("feed")) {
      scoreAdd()
    }
    squares[pacIndex].classList.remove("feed","pac","pacLeft","pacDown","pacUp")
    pacIndex = newIndex
    squareClass = squares[pacIndex].classList

    return
  }
}

const scoreAdd = () => {
  score.innerText = Number(score.innerText) + 10
}

let squareClass = squares[pacIndex].classList

squares[140].classList.add("hi")

const autoMove = () => {
  console.log(squareClass.contains("pac"))
  switch (true) {
    case squareClass.contains("pacDown"):
      moveDown()
      break
    case squareClass.contains("pac"):
      console.log("here")
      moveRight()
      break
    case squareClass.contains("pacLeft"):
      moveLeft()
      break
    case squareClass.contains("pacUp"):
      moveUp()
      break
  }
}
setInterval(autoMove, 300)



const moveUp = () => {
  newIndex = pacIndex - 20
  pacMove()
  if (!isWall) {
    squares[newIndex].classList.add("pacUp")
  }
}

const moveRight = () => {
  newIndex = pacIndex + 1
  pacMove()
  if (!isWall) {
    squares[newIndex].classList.add("pac")
  }
}

const moveLeft = () => {
  newIndex = pacIndex - 1
  pacMove()
  if (!isWall) {
    squares[newIndex].classList.add("pacLeft")
  }
}

const moveDown = () => {
  newIndex = pacIndex + 20
  pacMove()
  if (!isWall) {
    squares[newIndex].classList.add("pacDown")
  }
}

let heresPinky = squares[pinkyIndex].classList.add("pinky")

