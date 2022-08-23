class User {
    constructor(name) {
        this.name = name
    }

    introduce() {
        console.log(`I am ${this.name}.`)
    }
}

let user = new User('john')
console.log(user.name)
user.introduce()

//[[isClassConstructor]]:true

//
User = class {
    name
    age

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    introduce() {
        console.log(`${this.name} / ${this.age}`)
    }
}

user = new User('abel', 12)
user.introduce()
console.log(user.name)
console.log(User.prototype.name)

//
function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase)
        }
    }
}

User = makeClass('hello')
new User().sayHi()