//과제
let life = {
    name: 'life',
    eat() {
        console.log(this.name, 'eat.')
    },
    excrete() {
        console.log(this.name, 'excrete.')
    }
}

let animal = {
    name: 'animal',
    move() {},
    __proto__: life
}

let bird = {
    name: 'bird',
    move() {
        console.log(this.name, 'fly.')
    },
    __proto__: animal
}

let mammal = {
    name: 'mammal',
    move() {
        console.log(this.name, 'run.')
    },
    __proto__: animal
}

bird.eat()
bird.excrete()
bird.move()

mammal.eat()
mammal.excrete()
mammal.move()