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
let pacsMove = true
// pac at game start
let pacIndex = 140
let newIndex
let pinkyIndex = 95
let pinkyNew
let alive = true
let winStatement = document.body.querySelector(".winLoss")

// an array for the new divs
const squares = []

board.forEach((element) => {
  // create divs
  const pixel = document.createElement("div")
  // divs into parent div (zone)
  document.querySelector(".zone").appendChild(pixel)
  if (element) {
    pixel.classList.add("wall")
  } else  {
    pixel.classList.add("feed")
  }

  squares.push(pixel)
})

// pac and pinky initial
squares[pacIndex].classList.add("pac")
squares[pinkyIndex].classList.add("pinky")

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
  if (newIndex == 299) {
    console.log("You won!")
  }
})

const checkWall = (whoCalled) => {
  switch (whoCalled) {
    case "pac":
      if (squares[newIndex].classList.contains("wall")) {
        isWall = true
        return
      } else {
        isWall = false
      }
      break

    case "pinky":
      if (squares[pinkyNew].classList.contains("wall")) {
        isWall = true
        return
      } else {
        isWall = false
      }
  }
}

const pacMove = () => {

    checkWall("pac")
  if (!isWall) {
    if (squares[pacIndex].classList.contains("feed")) {
      scoreAdd()
    }
    squares[pacIndex].classList.remove(
      "feed",
      "pac",
      "pacLeft",
      "pacDown",
      "pacUp"
    )
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

  if (squareClass.contains("pinky")){
      alive = false
      winStatement.style.visibility = "visible"
    }

    if(alive){
      switch (true) {
    case squareClass.contains("pacDown"):
      moveDown()
      break
    case squareClass.contains("pac"):
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

  if (!alive){
  clearInterval(pacAuto)

}

}




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

//ghosts

const pinkyUp = () => {
  pinkyNew = pinkyIndex - 20
  checkWall("pinky")
  if (!isWall) {
    squares[pinkyNew].classList.add("pinky")
    squares[pinkyIndex].classList.remove("pinky")
    pinkyIndex = pinkyNew
  }
}
const pinkyDown = () => {
  pinkyNew = pinkyIndex + 20
  checkWall("pinky")
  if (!isWall) {
    squares[pinkyNew].classList.add("pinky")
    squares[pinkyIndex].classList.remove("pinky")
    pinkyIndex = pinkyNew
  }
}
const pinkyRight = () => {
  pinkyNew = pinkyIndex + 1
  checkWall("pinky")
  if (!isWall) {
    squares[pinkyNew].classList.add("pinky")
    squares[pinkyIndex].classList.remove("pinky")
    pinkyIndex = pinkyNew
  }
}
const pinkyLeft = () => {
  pinkyNew = pinkyIndex - 1
  checkWall("pinky")
  if (!isWall) {
    squares[pinkyNew].classList.add("pinky")
    squares[pinkyIndex].classList.remove("pinky")
    pinkyIndex = pinkyNew

  }
}

const pinkyMove = () => {
  let movement = Math.random()
  console.log(movement)
}
pinkyMove()




// Game movements
let pacAuto = setInterval(autoMove, 300)



setInterval(pinkyLeft, 500)
