const mongoose = require('mongoose')

const highScoreList = mongoose.model('TetrisHighScore', {
    pos_1:{
        type: Number
    },
    pos_2:{
        type: Number
    },
    pos_3:{
        type: Number
    },
    pos_4:{
        type: Number
    },
    pos_5:{
        type: Number
    },
    pos_6:{
        type: Number
    },
    pos_7:{
        type: Number
    },
    pos_8:{
        type: Number
    },
    pos_9:{
        type: Number
    },
    pos_10:{
        type: Number
    }
})

module.exports = highScoreList