const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')
const tetrisRouter = require('./routes/tetris')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)


app.use(express.static('public'))

app.use('/', indexRouter)
app.use('/tetris', tetrisRouter)

app.listen(3000)