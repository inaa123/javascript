let timeId = setInterval(() => console.log('tick'), 1000) //1초 간격으로 반복콜

setTimeout(() => {
    clearInterval(timeId)
    console.log('stop')
}, 3000)