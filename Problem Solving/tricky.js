let hero = {
    powerLevel:99,
    getPower(){
        return this.powerLevel
    },
}
let getPower = hero.getPower

let hero2 = {powerLevel: 42}
console.log(getPower())
console.log(getPower.call(hero2))