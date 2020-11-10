document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('.start')
    const startBtn = document.querySelector('.start')

    const width = 10
    let currentIndex = 0
    let appleIndex = 0
    let currentSnake = [2,1,0] //wartosc startowa - kszta£t snake idzie z lewej na prawo 2 head 1 middle 0 tail
    //tmh........
    //...........
    //...........

    let direction = 1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0

    //keycodes
    function control(e){
        squares[currentIndex].classList.remove('snake')
        direction = e.keyCode === 39 ? 1 : e.keyCode === 38 ? -width : e.keyCode = 37 ? -1 : e.keyCode === 40 ? +width : direction
    }

})