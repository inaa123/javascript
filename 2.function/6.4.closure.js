function makeCounter() {
    let count = 0

    return function() {
        return ++count
    }
}

let counter1 = makeCounter()
let counter2 = makeCounter()

for(let i = 0; i < 2; i++)
    console.log(counter1())

for(let i = 0; i < 2; i ++) 
    console.log(counter2()) //counter1과 counter2 공유X, 서로 다른 SCOPE에 있기 때문

//
