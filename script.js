// board array
//Tiled
board = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
            2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
            2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
            2, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 2, 2, 2, 2, 2, 0, 0, 2,
            2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2,
            2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2,
            2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 2,
            0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
            2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 2, 2, 0, 0, 0, 2, 2, 2, 0, 2,
            2, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 2,
            2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
            2, 0, 2, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 2, 0, 2, 0, 2,
            2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2,
            2, 0, 2, 0, 2, 2, 0, 2, 2, 0, 0, 0, 0, 2, 0, 2, 2, 2, 2, 2,
            2, 0, 2, 0, 2, 2, 0, 2, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0,
            2, 0, 2, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 2, 0, 0, 2, 2, 2, 2,
            2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2,
            2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 2, 2, 2, 0, 0, 2,
            2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,
            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]

// wall is 2
// empty is 0

let score = document.body.querySelector("h2")


// an array for the new divs
const squares = []

  board.forEach(element => {
    // create divs
  const pixel = document.createElement("div")
  // divs into parent div (zone)
  document.querySelector('.zone').appendChild(pixel)
  if(element){
    pixel.classList.add("wall")
  }else {
    pixel.classList.add("feed")
  }

  squares.push(pixel)

});

// pac at game start
let pacIndex = 140

let pacPosition = squares[pacIndex].classList.add("pac")


// geeks for geeks https://www.geeksforgeeks.org/javascript/javascript-detecting-the-pressed-arrow-key/

document.addEventListener("keydown", (keyPress) => {
  const key = keyPress.key

  switch (key) {
    case "ArrowDown":
      newIndex = pacIndex + 20
      squares[newIndex].classList.add("pacDown")
      break

    case "ArrowUp":
      newIndex = pacIndex - 20
      squares[newIndex].classList.add("pacUp")
        break

    case "ArrowRight":
    newIndex = pacIndex + 1
    squares[newIndex].classList.add("pac")
        break

    case "ArrowLeft":
    newIndex = pacIndex - 1
    squares[newIndex].classList.add("pacLeft")
        break
  }
      if (squares[newIndex].classList.contains("wall")) {
        return
      } else {

        squares[pacIndex].classList.remove("feed")
        squares[pacIndex].classList.remove("pac")
        squares[pacIndex].classList.remove("pacLeft")
        squares[pacIndex].classList.remove("pacDown")
        squares[pacIndex].classList.remove("pacUp")
        pacPosition = squares[newIndex].classList.add("pac")
        return (pacIndex = newIndex)

      }
  }
)



// pac wins at 297

