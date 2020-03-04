let canvas, context

let boardArrayWidth = 12 // Number of cell in array width
let boardArrayHeight = 20 // Number of cell in array height

let startPointX = 4, startPointY = 0 // starting "x" position for Tetromino
let score = 0, level = 1

let win_or_lose = "Playing"


// used as a look up table where each value in the array
// contains the 'x' & 'y' position we can use to draw the
// box on he canvas
