const express = require('express')
const router = express.Router()
const TetrisHS = require('../models/tetris_high_score.js')


const a = {name: 'ass'}

const pobierzRekordy = () => {
    return new Promise ((resolve) => {
        try{
            dane = TetrisHS.find({})
            resolve()
            console.log(dane)
        }catch (error){
            console.log(error)
        }
    })
}



router.get('/', (req, res) => {
    res.render('games/index')
})
router.get('/tetris', (req, res) => {
    res.render('games/tetris/tetris')
})
router.get('/snake', (req, res) => {
    res.render('games/snake/snake')
})
router.get('/snake_ove', (req, res) => {
    res.render('games/snake_ove/snake_ove')
})
router.get('/space_invaders', (req, res) => {
    res.render('games/space_invaders/space_invaders')
})



module.exports = router