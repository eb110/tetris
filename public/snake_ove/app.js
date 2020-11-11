const canvas = document.querySelector('#snake')
const ctx = canvas.getContext('2d')

const point = (x, y) => ({ x, y})
const DIRECTIONS = {
    ArrowLeft: point(-1, 0),
    ArrowUp: point(0, -1),
    ArrowRight: point(1, 0),
    ArrowDown: point(0, 1)
}

const initialState = {
    grid: { widht: 25, height: 25},
    snake: [point(5, 5)],
    snakeColor: '#111111',
    snakeLength: 5,
    fruit: point(10, 5),
    fruitColor: '#ff00fa',
    move: DIRECTIONS.ArrowRight
}

let state = R.clone(initialState)

