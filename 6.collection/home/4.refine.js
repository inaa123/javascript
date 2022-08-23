/* 고ㅏ제:
    refine()이 정제된 (중복제거된) 배열을 return 토록 하라.
*/
let user = {name: 'sccot'}
let fn = () => 1
let arr = ['ucal', user, 'today', fn, 'ucal', 1, 1, fn]

function refine(arr) {
    return Array.from(new Set(arr))
}
console.log(refine(arr))