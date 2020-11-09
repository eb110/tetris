
const TetrisHS = require('./tetris_high_score')
const findHS = async () => {
    try{
        const dane = await TetrisHS.find({})
        return dane
    }catch (error){
        console.log(error)
    }
}

module.exports = findHS