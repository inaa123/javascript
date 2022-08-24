async function f() {
    return 1
}
f().then(console.log) // 1 / f()가 promise객체 리턴됨->.then핸들러 사용가능

f = async function() {
    return Promise.resolve(2)
}
f().then(console.log) // 2

f = async function() { 
    return Promise.reject(new Error(3))
}
f().catch(e => console.log(e.message))

//
f = async function() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(4), 1000)
    })
    let result = await promise //promise가 끝날 때 까지 기다린다. 끝나야지 다음명령실행
    console.log(result)
}
f() // 1초후 4, promise가 끝나길 기다렸다는 증거..?


class Waiter {
    async wait() {
        return await Promise.resolve('cooked bread.') //요리가 되길 기다린다. 다되면 return~한다...
    }
}
new Waiter().wait().then(console.log)
