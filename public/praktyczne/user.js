console.log('user loaded')

window.user = {name:'eb110'}

export const user2 = {name:'aston martin'}

export function ulala() {
    console.log('de tomaso pantera')
}

export const szorcik = () => {console.log('maserati shamal')}

export const Zmienna = {name: 'polonez'}


//we can export default object and include within its body specific elements
export default{
    ludzik2: user2,
    autko: Zmienna,
    funkcyjka: ulala
   // autko, Zmienna
}