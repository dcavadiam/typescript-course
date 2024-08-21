interface Avenger {
    name: string;
    powerScore: number;
    wonBattles: number;
    age: number;
}

class Avenger implements Avenger {

    constructor(name: string,  powerScore: number) {
        this.name = name;
        this.powerScore = powerScore;
    }

    get fullName() {
        return `${this.name}, the power score is ${this.powerScore}`;
    }

    set power(newPower: number) {
        if (newPower > 100) {
            this.powerScore = newPower;
        } else {
            throw new Error("The power score must be between 0 and 100");   
        }
    }
}

const ironMan = new Avenger("Iron Man", 100);

ironMan.powerScore = 100;