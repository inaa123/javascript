new Promise((resolve, reject) => reject(new Error(1)))
    .catch(e => console.log(e.message)) // 1

// error발생으로 resolve나 reject실행되지 않을 때, promise 어떻게 처리하는지 볼거임~
new Promise((resolve, reject) => {throw new Error(2)})  
    .catch(e => console.log(e.message)) // 2

new Promise((resolve, reject) => resolve('ok'))
    .then(result => {throw new Error(3)}) //then핸드러에서 에러발생, 에러는 어디서든 발생할 수있다.
    .catch(e => console.log(e.message)) // 3 / catch핸들러는 executor 뿐아니라 then에서 발생하는 에러까지 다 잡아줌.

new Promise((resolve, reject) => resolve('ok'))
    .then(result => blabla()) //존재하지 않는 메서드 콜(에러상황)
    .catch(e => console.log(e.message)) // blabla is not defined

// 순서가 바뀌면? 
new Promise((resolve, reject) => {throw new Error(4)}) //executor에서 에러발생
    .catch(e => console.log(e.message)) // 4
    .then(result => console.log(result)) //undefined
//catch가 마지막이면 에러발생한거 잡고 끝남. 그러나 catch가 마지막이 아니라면, then..실행되고...... catch는 마지막에 쓰자!

new Promise((resolve, reject) => {throw new Error(5)})
    .catch(e => {
        if(e instanceof URIError) {//URIError발생시 처리할거 생략..
        } else {
            console.log(e.message) // 5
            throw e //제일 가까운 catch핸들러에게 떠넘김. 그래서 then실행x고 바로 30줄 catch핸들러 실행..?
        }
    }).then(() => console.log('여기는 실행되지 않습니다.'))
    .catch(e => console.log(e.message)) // 5


