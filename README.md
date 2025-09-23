# Pacman
90's beloved game, a puck tries to navigate through a maze avoiding obstacles and various monsters collecting points along the way

---
### Get started
The game starts at user request and automatically starts moving at pointed direction until blocked or instructed otherwise by user input (keyboard arrows)

### Credits
-

### pseudocode
```
board array - contains symbol indicators for walls, pac feed, empty squares, monsters
  eg. 10x10 (implementing larger scale)

for every element in the array check the symbol and assign appropriate class

assign pac to an index of the board array, Pac is displayed via a class

pac movements:
  up arrow pac index -10
  down arrow pac index +10
  right arrow pac index +1
  left arrow pac index -1

monster movements:
  using set intervals moves (maybe getting the pac index and moves towards it)

check if movement is allowed:
  if the new index has a class of wall (maybe go back one?)
  if it has a monster class game over

Winning:
 if the pac index is also contains the exit class

```
