const express = require('express')
const app = express()
//const expressLayouts = require('express-ejs-layouts')

require('./models/mongoose')

const indexRouter = require('./routes/index')
const gamesRouter = require('./routes/games')
const praktyczneRouter = require('./routes/praktyczne')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
//app.set('layout', 'layouts/layout')
//app.use(expressLayouts)


app.use(express.static('public'))

app.use('/', indexRouter)
app.use('/games', gamesRouter)
app.use('/praktyczne', praktyczneRouter)

app.listen(3000)