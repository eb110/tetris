
const TetrisHS = require('./tetris_high_score')

let dane = {}
const pobierzRekordy = () => {
    return new Promise ((resolve) => {
        try{
            dane = TetrisHS.find({})
            resolve()
        }catch (error){
            console.log(error)
        }
    })
}

async function findHS(){
    await pobierzRekordy()
}

module.exports = findHS()