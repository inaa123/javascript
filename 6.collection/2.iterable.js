let range = {
    from: 1,
    to: 3,
    [Symbol.iterator]() {
        this.current = this.from
        return this
    },

    next() {
        if(this.current <= this.to) //to이하여야함.
            return {
                done: false,
                value: this.current++
            }
        else 
            return {
                done: true //iterating 끝났다.
            }
    }
}

for(let num of range)
    console.log(num)

// 
function* generator() { //symbol.iterator보다 쓰기 편함..?
    let val = 1
    while(val <= 3) yield val++ //yield는 generator에서 쓸수있음.. 뽑아낸 값 리턴
}

for(let num of generator())
    console.log(num)

let g = generator() //generator 콜했을때 객체 리턴한다.
console.log(g, typeof g) //generator {[[GeneratorState]]: 'suspended'} object

//
function* gen() {
    yield* generator()
    yield* ['a', 'b']//yield*은 객체 리턴
    yield 9 // yield 문자,숫자 리턴
}

for(let val of gen())
    console.log(val)