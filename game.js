alert("Welcome to Logan's Game")

var name = prompt("What is your name?")

if (name !== "") {
  alert("Hi, " + name + ". Welcome to my game")
} else {
  alert("See ya..")
}

var character = prompt(
  "Choose your character! Type `a` for George Clooney, type `b` for Billie Eilish, type `c` Bernie Sanders"
)

if (character == `a`) {
  alert("You are George Clooney!")
}

if (character == `b`) {
  alert("You are Billie Eilish!")
}

if (character == `c`) {
  alert("You are Bernie Sanders!")
}

var look = confirm(
  "You walk into the creepy house. There is a single door way off in the corner. Do you want to find out what is behind it?"
)

if (look) {
  alert("You, walk into the room. Looking around you see two boxes!")
  var box = confirm(
    "There is a red box and blue box. Press okay to open the red box. Press cancel to open the blue box."
  )
  if (box) {
    alert(
      "The box is booby-trapped! A trap door below you opens. You fall into the Gator pit. TRY AGAIN!"
    )
  } else {
    alert("You found an old banana. TRY AGAIN!")
  }
} else {
  alert("You decide to turn around and leave the haunted house.")
  alert("Leaving the haunted house was the right idea - YOU WIN!")
}
