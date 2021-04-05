function strReverse(str) {
    const strArray = str.split("")
    let revArr = []
    for(char of strArray) {
        revArr.unshift(char)
    }
    const strRev = revArr.join("")
    return strRev
}

console.log(strReverse("Hello"))

function numReverse(num) {
    num = num.toString()
    let numArray = num.split("")
    let negative = ""
    if(numArray[0] === "-"){
        negative = numArray.shift()
    }
    // for(place of numArray) {
    //     if(place === 0 && numArray.indexOf(place) === 0){
    //         numArray.shift()
    //     }
    // }
    while(numArray[numArray.length-1] === "0"){
        numArray.pop()
    }
    while(numArray[0] === "0"){
        numArray.shift()
    }
    let revArr = []
    for(place of numArray) {
        revArr.unshift(place)
    }
    revArr.unshift(negative)
    const revNum = Number(revArr.join(""))
    return revNum
}

console.log(numReverse(0043400))
console.log(numReverse(344.000))
console.log(numReverse(-567))
console.log(numReverse(-436.993))
console.log(numReverse(0.0983))
console.log(numReverse(-0.55432))

function isPalindrome(str) {
    str = str.toLowerCase()
    const strArr = str.split("")
    let revArr = []
    for(char of strArr){
        revArr.unshift(char)
    }
    if(strArr.join("") === revArr.join("")){
        return true
    } return false
}

console.log(isPalindrome("john"))
console.log(isPalindrome("racecar"))
console.log(isPalindrome("kiik"))