function sum(a: number, b: number): number {
    return a + b
}

console.log(sum(1, 2))

// 
function add(a: number, b: number, isDouble?: boolean): number {
    const sum = a + b
    return isDouble ? sum * 2 : sum
}

let result : number = add(1, 2)
result = add(1, 2, true)
console.log(result)

//
function greet(name: string, nullable?: boolean): string | null { // 마지막 : string | null 안쓰던지 둘다쓰던지
    if(nullable) return null //nullable값이 true이면 null
    else return `Hello, ${name}.` //아니면 string
}

let greeting = greet('cain')
greeting = greet('cain', true)
console.log(greeting)