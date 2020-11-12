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
    grid: { width: 25, height: 25},
    snake: [point(5, 5)],
    snakeColor: '#111111',
    snakeLength: 5,
    fruit: point(10, 5),
    fruitColor: '#ff00fa',
    move: DIRECTIONS.ArrowRight
}

let state = R.clone(initialState)

const setColor = (ctx, color) => (ctx.fillStyle = color)
const drawPoint = (ctx, {x,y}, {width, height}) =>
    ctx.fillRect(x*width, y*height, width, height)
const setDirection = (direction) => (state) => ({
    ...state,
    move: DIRECTIONS[direction]
})

const edge = (value, range) => (value < 0 ? range : value % range)
const random = (range) => ~~(Math.random() * range)
const setTail = ({snake, snakeLength}) =>
R.drop(Math.abs(
    snake.length > snakeLength ?
    snake.length - snakeLength :
    0
), snake)

const draw = (ctx, canvas, {fruitColor, snakeColor, fruit, snake, grid}) => {  
    ctx.clearRect(0,0, canvas.width, canvas.height)
    setColor(ctx, fruitColor)
    drawPoint(ctx, fruit, grid)
    setColor(ctx, snakeColor)
    snake.forEach((point) => drawPoint(ctx, point, grid))
}

const nextStep = ({snake, move, grid}) =>
 point(
     edge(R.last(snake).x + move.x, grid.width),
     edge(R.last(snake).y + move.y, grid.height)
 )

const nextSnake = (state) =>
R.find(R.equals(nextStep(state)))(state.snake)
?{
    ...state,
    snake: [point(5,5)],
    snakeLength: 5
} :
{
    ...state,
    snake: [...setTail(state), nextStep(state) ]
}

const nextApple = (state) =>
R.equals(nextStep(state), state.fruit) ? {
    ...state,
    fruit: point(random(state.grid.width), random(state.grid.height)),
    snakeLength: state.snakeLength + 1
} : state

const nextState = (state) => {
    return R.pipe(nextApple, nextSnake)(state)
}

//refresh time of the game will be 50 miliseconds
//start game
setInterval(() => {
    draw(ctx, canvas, state)
    //state actualization (refers to the speed of snake)
    state = nextState(state)
}, 200)

//key listener
document.addEventListener('keydown', ({key: direction}) => {
    state = setDirection(direction)(state)

})

