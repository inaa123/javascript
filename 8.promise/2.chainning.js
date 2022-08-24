new Promise((resolve, reject) => setTimeout(() => {resolve(1)}, 1000))
    .then(result => {
        console.log(result) //1 / handler가 리턴한 값은 프라미스의result값이 된다.
        return result + 1 //promise의 리절트값바꾸려면 리턴하면됨?>
    }).then(result => {
        console.log(result) // 2
        return result+1
    }).then(console.log) // 3 / 핸들러가 리턴한 값은  프라미스어쩌구~~~~~~