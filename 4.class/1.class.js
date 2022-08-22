class User { // sugar syntax.
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

//[[isClassConstructor]]: true
//User('john') // TypeError: Class constructor User cannot be invoked without 'new'

//
User = class { 
    name
    age //멤버변수 두개 (User란 객체를 만들면 name과 age를 가진 ..만들어짐)

    constructor(name, age) { //생성자 만들기. 생성자는 function User의 별명일 뿐
        this.name = name
        this.age = age
    }

    introduce() {
        console.log(`${this.name} / ${this.age}`)
    }
}

user = new User('abel', 12)
user.introduce() // abel / 12
console.log(user.name) // abel
console.log(User.prototype.name) // undefined

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
