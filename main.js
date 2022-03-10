class Apple {
    constructor(weight = 10) {
        //10 là weight mặc định nếu không truyền đối số
        this.weight = weight;
    }

    decrease() {
        this.weight--
    }

    isEmpty() {
        return this.weight == 0 ? true : false;
    }

    getWeight() {
        return console.log(`táo nặng ${this.weight} đơn vị`);
    }
}

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale() {
        return this.gender === 'male' ? true : false;
    }

    checkApples(apple) {
        return console.log(!apple.isEmpty() ? 'táo này ăn được' : 'táo này ăn hết rồi');
    }

    eat(apple) {
        if (!apple.isEmpty()) {
            console.log(`${this.name} ăn táo`);
            this.weight++;
            apple.decrease();
        } else {
            this.say(`tìm quả khác đi`);
        }
    }
    getWeight(){
        return console.log(`${this.name} có cân năng là ${this.weight} đơn vị`);
    }


    say(str) {
        console.log(`${this.name} nói là ${str}`);
    }
}


let firstApple = new Apple();

let firstHuman = new Human('Adam', 'male', 70);

let secondHuman = new Human('Eva', 'female', 50);


firstHuman.getWeight()
firstApple.getWeight()
firstHuman.eat(firstApple)
firstHuman.eat(firstApple)
firstHuman.eat(firstApple)
firstHuman.eat(firstApple)
firstHuman.eat(firstApple)
firstHuman.eat(firstApple)
firstHuman.eat(firstApple)
firstHuman.eat(firstApple)
firstHuman.eat(firstApple)
firstHuman.eat(firstApple)
secondHuman.eat(firstApple)
firstApple.getWeight()
firstHuman.getWeight()
secondHuman.say(': lương đâu ? đưa đây ')
firstHuman.say(': đưa bà hết rồi mà :"(')
