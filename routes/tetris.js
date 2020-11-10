const express = require('express')
const router = express.Router()
const TetrisHS = require('../models/tetris_high_score.js')


export const a = {name: 'ass'}

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
    pobierzRekordy()
    res.render('tetris/index')
})



module.exports = router