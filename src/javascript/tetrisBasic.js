let canvas, context

let boardArrayWidth = 12 // Number of cell in array width
let boardArrayHeight = 20 // Number of cell in array height

let startPointX = 4, startPointY = 0 // starting "x" position for Tetromino
let score = 0, level = 1

let win_or_lose = "Playing"


// used as a look up table where each value in the array
// contains the 'x' & 'y' position we can use to draw the
// box on he canvas
let coordinateArray = [ ...Array(boardArrayHeight)].map (event => 
    
        Array(boardArrayWidth).fill(0) 
    )
    
let currentTetromino = [[1,0], [0,1], [1,1], [2,1]]

// will hold all the Tetrominos
let tetrominos = []

// the tetromino array with the colors matched to the tetrominos array
// purple, cyan, blue, yellow, orange, green, red
let tetrominoColors = ['#786fa6', '#3c6382', '#2980b9', '#fa983a', '#ff7f50', '#10ac84', '#ff6b6b'] 

let currentTetrominoColor

// create gameboad array so we know where other squares are
let gameBoardArray = [...Array(20)].map (event => Array(12).fill(0)) 

// array for storing stopped shapes
// It will hold colors when a shape stops and is added
let stoppedShapeArray = [...Array(20)].map (event => Array(12).fill(0)) 

let DIRECTION = {
    
    idle: 0,
    down: 1,
    left: 2,
    right: 3,
}

let direction 

class Coordinates {
    constructor(pointX, pointY) {
        this.pointX = pointX
        this.pointY = pointY
    }
}

// execute 'SetupCanvas' when the page loads
document.addEventListener('DOMContentLoaded', SetupCanvas)

function CreateCoorArray() {}

function SetupCanvas() {

    canvas = document.getElementById('game')
    context = canvas.getContext('2d')
    canvas.width = 536, canvas.height = 556

    // double the size of elements to fit the screen
    context.scale(2,2)

    // draw gameboard rectangle
    context.strokeStyle = 'black'
    context.strokeReact(8, 8, 280, 462)

    tetrisLogo = new Image(161, 54)
    tetrisLogo.onload = DrawTetrisLogo
    tetrisLogo.scr = "https://i.pinimg.com/originals/71/d6/8a/71d68a4789aadc84a6fbd4ba7a776fe5.jpg"
    
    // set font for score label text and draw
    context.fillStyle = 'black'
    context.font = '21px Arial'
    context.fillText('SCORE', 300, 98)
    
    // draw score rectangle
    context.strokeReact(300, 107, 161, 23)

    // draw score
    context.fillText(score.toString(), 310, 127)

}


