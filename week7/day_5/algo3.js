// Missing Digit

// Write a function that when given a string equation with one digit as an 'x',
// return the value of 'x' that makes the equation true.
const findX = (equation) => {
    Arithmetic = {
        '*': (x,y) => x*y,
        '/': (x,y) => x/y,
        '+': (x,y) => x+y,
        '-': (x,y) => x-y
    }
    let sideX = ''
    let sideKnown = ''
    let sideKnownSolution = ''
    noSpaceEquation = equation.replace(/\s+/g, '')
    sides = noSpaceEquation.split('=')
    for(side of sides){
        if(side.includes('x')){
            sideX = side
        } else {
            sideKnown = side
        }
    } if(isNaN(sideKnown)){
        operator = ''
        for(char of sideKnown){
            if(isNaN(char)) {operator = char}
        }
        operands = sideKnown.split(char)
        console.log(operands)
        sideKnownSolution = Arithmetic[operator](Number(operands[1]), Number(operands[2]))
    }
	return `x: ${sideX}\nknown: ${sideKnownSolution}`
};
// Part 1
console.log(findX("10 * x = 20")); // returns 2
console.log(findX("2 + 4 = x")); // returns 6
console.log(findX("x - 11 = 33")); // returns 44
// Part 2
// console.log(findX("1x0 * 2 = 200")); // returns 0
// console.log(findX("80 / 2 = x0")); // returns 4
// console.log(findX("111 + 11x = 222")); // returns 1