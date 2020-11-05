document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('#start-button')
    const width = 10

    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]
    const zTetromino = [
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1]     
    ]
    const tTetromino = [
        [1, width, width+1, width+2],
        [1, width+1, width+2, width*2+1],
        [width, width+1,width+2, width*2+1],
        [1, width, width+1, width*2+1]
    ]
    const oTetromino = [
        [0, 1,width,width+1],
        [0, 1,width,width+1],
        [0, 1,width,width+1],
        [0, 1,width,width+1]
    ]
    const iTetromino = [
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3]
    ]
    const theTetrominoes = [lTetromino,zTetromino,tTetromino,oTetromino,iTetromino]

    let currentPosition = 4
    let currentRotation = 0
 
    //randomly select a tetromino and its first rotation
    let random = ~~(Math.random()*theTetrominoes.length)
    let current = theTetrominoes[random][currentRotation]

    //draw the tetromino
    function draw () {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
        })
    }

    //undraw the teromino
    function undraw () {
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino')
        })
    }

    //move the tetromino down every second
    timerId = setInterval(moveDown, 250)

    //move down function
    function moveDown() {
        undraw()
        currentPosition += width
        draw()
        freeze()
    }

    //freeze function
    function freeze(){
        if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))){
            //+ width as we are checking the very first line just right under the last element of current tetromino
            //if so, change each ele of tetromino as 'taken'(invisible)
            current.forEach(index => squares[currentPosition + index].classList.add('taken'))
            //start a new tetromino falling
            random = ~~(Math.random() * theTetrominoes.length)
            current = theTetrominoes[random][currentRotation]
            currentPosition = 4
            draw()
        }
    }
})