let arr = [{a: 1, b: 2}, {a: 2, b: 3}, {a: 1, b: 3}]
let NullArr = []
let arrA1 = []
let arrB1 = []
let finishArr = {a: 0, b: 0}

const inArr = (arrow) => {
    let key
    for(key in arrow){
        let noObj = Object.values(arrow[key])
        let arrA = noObj[0]
        let arrB = noObj[1]
        NullArr.push(arrA,arrB)
    }
    for(key in NullArr){
        if (key % 2 == 0){
            arrA1.push(NullArr[key])
        } else {
            arrB1.push(NullArr[key])
        }
    }
    let finishArrA = arrA1.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))//
    let finishArrB = arrB1.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))
    finishArr.a = finishArrA[0]
    finishArr.b = finishArrB[0]
}

inArr(arr)
console.log(finishArr)