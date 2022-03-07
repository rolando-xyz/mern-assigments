class Ninja {
    constructor(name, health=10) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
        return this;
    }

    showStats() {
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
        return this;
    }

    drinkSake() {
        console.log(`${this.name} drank sake.`);
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja {
    constructor(wisdom=10) {
        this.wisdom = wisdom;
    }

    speakWisdom() {
        console.log(`what one programmer can do in one month, two programmers can do in two months.`);
        return this;
    }
}

const ninja1 = new Ninja("Hayabusa");
ninja1.sayName().showStats().drinkSake().showStats();