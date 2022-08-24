console.log(Date())
console.log(typeof Date()) //string

let date = new Date() //Date객체만들기 , object쓰고싶을때 new Date()
console.log(date)
console.log(typeof date) //object: 
console.log(date.toLocaleDateString()) //년월일

date = new Date('2022-08-23T07:27:30.999Z') // UTC + 9시간 = 한국시간
console.log(date.toLocaleDateString()) // 2022. 8. 23.
console.log(date.toLocaleTimeString()) // 오후 4:27:30

console.log(
    date.getFullYear(), // 2022
    date.getMonth(),    // 7 (0 ~ 11) 월은 0부터 시작
    date.getDate(),     // 23
    date.getUTCHours(), // 7
    date.getHours(),    // 16
    date.getMinutes(),  // 27
    date.getSeconds(),  // 30
    date.getMilliseconds(), // 999
    date.getDay()           // 2 ( 0 ~ 6, 일 ~ 토) day도 0부터 시작
)

console.log(date.getTime())  // 1661239650999 ms
console.log(Date.now())      // 1661240985087 ms

date = new Date(0) // Date(0)기준시각 70.01.01 
console.log(date)

date = new Date(1000 * 60 * 60 * 24) // 하루 70.01.02
console.log(date)

date = new Date(-1000 * 60 * 60 * 24)
console.log(date) // 69.12.31

