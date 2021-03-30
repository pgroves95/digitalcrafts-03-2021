const choice = document.querySelector('#dropdown');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const calcData = document.querySelector('#form');

function calc(num1, num2, operator) {
    if(typeof Number(num1) == "number" && typeof Number(num2) == "number"){
        num1a = Number(num1);
        num2a = Number(num2);
        if(operator === "add") {
            return num1a + num2a
        } else if(operator === "subtract") {
            return num1a - num2a
        } else if(operator === "multiply") {
            return num1a * num2a
        } else if(operator === "divide") {
            return num1a / num2a
        } else {
            return "invalid operator"
        }
    }
    return "invalid number value"    
}   

calcData.addEventListener('submit', function(e){
    const n1 = num1.value;
    const n2 = num2.value;
    const oper = choice.value;
    const result = calc(n1, n2, oper);
    alert(`The result is ${result}`)
    e.preventDefault();
})

function log() {
    console.log(calcData)
}
