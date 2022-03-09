class Card {
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name,cost,power,res) {
        super(name,cost);
        this.power = power;
        this.res = res;
    }
    attack( target ) {
        // reduce target res by power here
        console.log(`${this.name} is attacking ${target.name}`)
        this.res -= this.power
    }
}

class Effect extends Card {
    constructor(name,cost,stat,magnitude) {
        super(name,cost);
        this.stat = stat;
        this.magnitude = magnitude;
        this.text = `change targets ${this.stat} by ${this.magnitude}`;
    }
    play ( target ) {
        if( target instanceof Unit ) {
            console.log(this.text)
            if( this.stat === "power"){
                target.power += this.magnitude
            }
            if( this.stat === "res"){
                target.res += this.magnitude
            }
            
        }
        else {
            throw new Error( "target must be a unit" );
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)
const hardAlgorithm = new Effect("Hard Algorithm", 2, 3, 3)
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 3, 2, -2)
const pairProgramming = new Effect("Pair Programming", 3, 2, 2)

hardAlgorithm.play(redBeltNinja)
unhandledPromiseRejection.play(redBeltNinja)
pairProgramming.play(redBeltNinja)
redBeltNinja.attack(blackBeltNinja)