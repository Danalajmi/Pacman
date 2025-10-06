// board array
//Tiled
board = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
            2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
            2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
            2, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 2, 2, 2, 2, 2, 0, 0, 2,
            2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2,
            2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2,
            2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 2,
            0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
            2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 2, 2, 0, 0, 0, 2, 2, 2, 0, 2,
            2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 2,
            2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2,
            2, 0, 2, 2, 2, 0, 0, 1, 1, 0, 2, 0, 0, 2, 2, 2, 0, 2, 0, 2,
            2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 0, 2, 0, 0, 0, 2,
            2, 0, 2, 0, 2, 2, 0, 2, 2, 0, 0, 0, 0, 2, 0, 2, 2, 2, 2, 2,
            2, 0, 2, 0, 2, 2, 0, 2, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0,
            2, 0, 2, 0, 0, 0, 0, 2, 2, 0, 2, 0, 1, 2, 0, 0, 2, 2, 2, 2,
            2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2,
            2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 2, 2, 2, 0, 0, 2,
            2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,
            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]

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
let blinkyIndex = 311
let blinkyNew
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
  } else {
    pixel.classList.add("feed")
  }
  squares.push(pixel)
})

// pac and pinky initial
squares[pacIndex].classList.add("pac")
squares[pinkyIndex].classList.add("pinky")
squares[blinkyIndex].classList.add("blinky")
const exit = squares[299].classList.add("exit")


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
      break
    case "blinky":
      if (squares[blinkyNew].classList.contains("wall")) {
        isWall = true
        return
      } else {
        isWall = false
      }
  }
}

const pacMove = () => {
  checkAlive()
  checkWin()
  if (!alive) {
    return
  }else {
    checkWall("pac")
    if (!isWall) {
      if (squareClass.contains("feed")) {
        scoreAdd()
      }
      squareClass.remove(
        "feed",
        "pac",
        "pacLeft",
        "pacDown",
        "pacUp"
      )
      pacIndex = newIndex
      squareClass = squares[pacIndex].classList
    }
  }
}

const scoreAdd = () => {
  score.innerText = Number(score.innerText) + 10
}

let squareClass = squares[pacIndex].classList

const checkAlive = () => {
  if (squareClass.contains("pinky") || squareClass.contains("blinky")) {
    alive = false
    winStatement.style.visibility = "visible"
    clearInterval(pacAuto)
    clearInterval(pinkyAuto)
    clearInterval(blinkyAuto)
  }
}
const checkWin = () => {
  if (squareClass.contains("exit")) {
    winStatement.innerText = "You Win!!!"
    winStatement.style.visibility = "visible"
    alive = false
    clearInterval(pacAuto)
    clearInterval(pinkyAuto)
    clearInterval(blinkyAuto)
  }
}


const moveUp = () => {
  newIndex = pacIndex - 20
  pacMove()
  if (!isWall && alive) {
    squares[newIndex].classList.add("pacUp")
  }
}
const moveRight = () => {
  newIndex = pacIndex + 1
  pacMove()
  if (!isWall && alive) {
    squares[newIndex].classList.add("pac")
  }
}
const moveLeft = () => {
  newIndex = pacIndex - 1
  pacMove()
  if (!isWall && alive) {
    squares[newIndex].classList.add("pacLeft")
  }
}
const moveDown = () => {
  newIndex = pacIndex + 20
  pacMove()
  if (!isWall && alive) {
    squares[newIndex].classList.add("pacDown")
  }
}

// Pac automove
const autoMove = () => {
  checkAlive()
  checkWin()
  if (alive) {
      if(squareClass.contains("pacDown")){
      moveDown()
      }else if (squareClass.contains("pac")){
      moveRight()
      }else if (squareClass.contains("pacLeft")){
      moveLeft()
      }else if(squareClass.contains("pacUp")){
      moveUp()
      }
    }
  }


//ghosts


// Pinky movement
const pinkyUp = () => {
  pinkyNew = pinkyIndex - 20
  checkWall("pinky")
  if (!isWall) {
    squares[pinkyNew].classList.add("pinky")
    squares[pinkyIndex].classList.remove("pinky")
    pinkyIndex = pinkyNew
  } else {
    movement = Math.round(Math.random() * 3)
  }
}
const pinkyDown = () => {
  pinkyNew = pinkyIndex + 20
  checkWall("pinky")
  if (!isWall) {
    squares[pinkyNew].classList.add("pinky")
    squares[pinkyIndex].classList.remove("pinky")
    pinkyIndex = pinkyNew
  } else {
    movement = Math.round(Math.random() * 3)
  }
}
const pinkyRight = () => {
  pinkyNew = pinkyIndex + 1
  checkWall("pinky")
  if (!isWall) {
    squares[pinkyNew].classList.add("pinky")
    squares[pinkyIndex].classList.remove("pinky")
    pinkyIndex = pinkyNew
  } else {
    movement = Math.round(Math.random() * 3)
  }
}
const pinkyLeft = () => {
  pinkyNew = pinkyIndex - 1
  checkWall("pinky")
  if (!isWall) {
    squares[pinkyNew].classList.add("pinky")
    squares[pinkyIndex].classList.remove("pinky")
    pinkyIndex = pinkyNew
  } else {
    movement = Math.round(Math.random() * 3)
  }
}

// get only 4 values
let movement = Math.round(Math.random() * 3)
let recentMove = [4,4,4]
let see = recentMove.length - 1

const pinkyMove = () => {
  checkAlive()
  if(alive){
    switch (movement) {
    case 0:
      if(recentMove[see] === "0"){
        return
      }else{
        pinkyRight()
      recentMove.push("0")
      break
      }
      case 1:
        if(recentMove[see] === "1"){
        return
      }else{
      pinkyLeft()
      recentMove.push("1")
      break
      }
    case 2:
      if(recentMove[see] === "2"){
        return
      }else{
      pinkyDown()
      recentMove.push("2")
      break
      }
    case 3:
      if(recentMove[see] === "3"){
        return
      }else{
      pinkyUp()
      recentMove.push("3")
      break
      }
  }
  }

  // it just stops here doesn't go right???
  // if(pinkyIndex === 343){
  //   pinkyRight()
  // }
}

// Blinky ghost
const blinkyUp = () => {
  blinkyNew = blinkyIndex - 20
  checkWall("blinky")
  if (!isWall) {
    squares[blinkyNew].classList.add("blinky")
    squares[blinkyIndex].classList.remove("blinky")
    blinkyIndex = blinkyNew
  } else {
    movement = Math.round(Math.random() * 3)
  }
}
const blinkyDown = () => {
  blinkyNew = blinkyIndex + 20
  checkWall("blinky")
  if (!isWall) {
    squares[blinkyNew].classList.add("blinky")
    squares[blinkyIndex].classList.remove("blinky")
    blinkyIndex = blinkyNew
  } else {
    movement = Math.round(Math.random() * 3)
  }
}
const blinkyRight = () => {
  blinkyNew = blinkyIndex + 1
  checkWall("blinky")
  if (!isWall) {
    squares[blinkyNew].classList.add("blinky")
    squares[blinkyIndex].classList.remove("blinky")
    blinkyIndex = blinkyNew
  } else {
    movement = Math.round(Math.random() * 3)
  }
}
const blinkyLeft = () => {
  blinkyNew = blinkyIndex - 1
  checkWall("blinky")
  if (!isWall) {
    squares[blinkyNew].classList.add("blinky")
    squares[blinkyIndex].classList.remove("blinky")
    blinkyIndex = blinkyNew
  } else {
    movement = Math.round(Math.random() * 3)
  }
}

// Move blinky automatically
blinkyRecent = [4,4,4]
let check = blinkyRecent.length - 2

const blinkyMove = () => {
  checkAlive()
  if(alive){
    switch (movement) {
    case 0:
      if(blinkyRecent[check] === 0){
        Math.round(Math.random() * 3)
        return
      }else{
        blinkyRight()
      blinkyRecent.push(0)
      check++
      break
      }
      case 1:
        if(blinkyRecent[check] === 1){
        Math.round(Math.random() * 3)
        return
      }else{
      blinkyLeft()
      blinkyRecent.push(1)
      check++
      break
      }
    case 2:
      if(blinkyRecent[check] === 2){
        Math.round(Math.random() * 3)
        return
      }else{
      blinkyDown()
      blinkyRecent.push(2)
      check++
      break
      }
    case 3:
      if(blinkyRecent[check] === 3){
        Math.round(Math.random() * 3)
        return
      }else{
      blinkyUp()
      blinkyRecent.push(3)
      check++
      break
      }
  }
  }
}

// Game movements
let pacAuto = setInterval(autoMove, 300)
let pinkyAuto = setInterval(pinkyMove
, 200)
let blinkyAuto = setInterval(blinkyMove, 100)
