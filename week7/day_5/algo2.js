// Substrings
// Write a function that when given string1 as one parameter 
// and another string2 as a second parameter, checks if string2 is a substring of string1.
const substring = (str1, str2) => {
    result = null
    if(str1.includes(str2)){
        result = true
    } else {
        result = false
    }
	return result
};
console.log(substring("concept", "cep")); // true
console.log(substring("aaabbbaabbab", "aba")); // false
console.log(substring("the brown cow jumped over the moon", "moonthe brown cow")); // true
console.log(substring("baananana", "nab")); // true
console.log(substring("this wont work", "r u shore")); // false