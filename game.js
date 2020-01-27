alert("Welcome to Logan's Game")

var name = prompt("What is your name?")

if (name !== "") {
  alert("Hi, " + name + ". Welcome to my game")
} else {
  alert("See ya..")
}
var look = confirm(
  "You walk into a room. There is a single door off into the corner. Do you want to find out what is behind it?"
)

if (look) {
  alert("You, walk into the room. Looking around you see two boxes!")
  var box = confirm(
    "There is a red box and blue box. Press okay to open the red box. Press cancel to open the blue box."
  )
  if (box) {
    alert("You just found the keys to 10,000 Bitcoin! You WIN!")
  } else {
    alert("You found an old banana. Try again.")
  }
} else {
  alert(
    "You decide to turn the other way, leaving the house, and run back to your car."
  )
  alert(
    "You try to start the car. Realizing it is completely out of gas and oh yeah.. you are completely surrounded by zombies. GAME OVER"
  )
}
