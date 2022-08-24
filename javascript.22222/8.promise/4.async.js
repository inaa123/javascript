async function f() {
    return 1
}
f().then(console.log) // 1

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
    let result = await promise
    console.log(result)
}
f()

class Waiter {
    async wait() {
        return await Promise.resolve('cookde bread.')
    }
}
new Waiter().wait().then(console.log)