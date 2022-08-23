new Promise((resolve, reject) => setTimeout(resolve(1), 1000))
    .then(result => {
        console.log(result) ////handler가 리턴한 값은 프라미스의result값이 된다.
        return result + 1 //promise의 리절트값바꾸려면 리턴하면됨?>
    }).then(result => {
        console.log(result)
        return result+1
    }).then(console.log) //핸들러가 리턴한 값은  프라미스어쩌구~~~~~~