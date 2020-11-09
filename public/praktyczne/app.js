import defaulcik, { user2 as jola, ulala, szorcik } from '../praktyczne/user.js'
import * as wszystkie from '../praktyczne/user.js'
console.log('app loaded')

console.log(window.user)

console.log(jola.name)

ulala()

szorcik()
 
for(let key in defaulcik)console.log(key)

for(let key in wszystkie){
    console.log(key)
}
