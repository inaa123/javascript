let promise = new Promise((resolve, reject)  => resolve('done')) //promise객체만들기, 생성자 써볼게~ . promise 약속이 이행될때 시행될
/*
promise.then(console.log, console.log)
promise.then(console.log, null)

promise.then(console.log) 
promise.catch(console.log) //reject된거만/ promise이행 관심X, REJECT될때 LOG작동되게, 지금은작동X resolve됐음


*/
//과제: 1초 뒤에, resolve하도록 한다.
promise = new Promise((resolve, reject) => { // executor
    setTimeout(() => resolve('done'), 1000) 
})

promise.then(console.log, console.log) // handler , 첫번째 log- resolve됐을때 , 두번짼 reject됐을때

//
/*
promise = new Promise((resolve, reject)=> {
    setTimeout(() =>reject(new Error('에러')), 1000) //reject result속성값으로 에러객체 넣어야하마.
})  

promise.then(result => console.log(result), //resolve든 reject든 끝나면 실행할? handler
    error => console.log(error))            //promise의 result속성값이 handler의 파라미터로 넘어온다?
*/
//
new Promise((resolve, reject) => 
    setTimeout(() => resolve ('완성'), 2000))
    .then(console.log) //완성
    .finally(() => console.log('promise가 생성되었습니다.')) //finally handler는 프라미스가 성공,실패 관계없이 실행

new Promise((resolve, reject) => 
    setTimeout(() => reject(new Error('미완성')), 3000))
    .then(console.log) //성공했을때 then handlerㄹㅏ고 부를게~/ promise객체가 리턴되기 때문에 chainning가능
    .catch(e => console.log(e.message))//미완성
    .finally(() => console.log('promise가 생성되었습니다.'))

/*
promise 파라미터로 들어가는 펑션을 executor라고 불리고 
executor는 두개가 필요함. reesolve reject 펑션
*/