let user = {
    name: 'neo'
}

function greet() {
    console.log(`I am ${this.name}.`)
}

greet()

let fn = greet.bind(user)
fn()

setTimeout(fn, 100)

//
user = {
    name: 'john',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

//과제:
fn = user.greet.bind(user)
setTimeout(fn, 200)

console.log(fn == user.greet)