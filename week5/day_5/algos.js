const isAnagram = (string1, string2) => {
    letterCheck = RegExp(/[a-z]$/)
    string1 = string1.toLowerCase()
    string2 = string2.toLowerCase()
    letterStr1 = ''
    letterStr2 = ''
    for(char of string1){
        if(letterCheck.test(char)){
            letterStr1 += char
        }
    }
    for(char of string2){
        if(letterCheck.test(char)){
            letterStr2 += char
        }
    }
    result = true;
    arr1 = letterStr1.split('').sort()
    arr2 = letterStr2.split('').sort()

    for(i=0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            result = false;
        }
    }
    return result
}
// Pure letter strings
console.log(isAnagram("hello", "olleh")); // true
console.log(isAnagram("listen", "lidfje")); // false
console.log(isAnagram("Listen", "silent")); // true
// String phrases with spaces (Needs to ignore spaces)
console.log(isAnagram("dorMITORY", "dirty room")); // true
// String phrases with punctuation (Needs to ignore punctuation).
console.log(isAnagram("convers a t i o n", "voices!RANT!ON  !")); // true
console.log(isAnagram("dkj fsdjfh", "this doesn't work")); // false
console.log(isAnagram("l", "lsdfh")); // false
console.log(isAnagram("llrr", "lr")); // false
console.log(isAnagram('llrr', 'lllr')) // false


const findDuplicates = (numArray) => {
    let numObj = {}
    for(let num of numArray){
        if(!numObj[num]){
            numObj[num] = 1
        } else {
            numObj[num] += 1
        }
    }
    duplicates = {}
    for(let obj in numObj){
        if(numObj[obj] > 1){
            duplicates[obj] = numObj[obj]
        }
    }
    for(let dupli in duplicates){
        console.log(`${duplicates[dupli]}`)
    }
}
console.log(findDuplicates([1, 2, 3, 4, 5, 1])) // returns 2. '1' occurs twice
console.log(findDuplicates([1, 2, 2, 2, 2, 3, 2, 3, 2])) // returns 6
console.log(findDuplicates([12, 12, 1, 2, 12, 22, 11])) // returns 3