const inputSubtotal = document.querySelector("#subtotal")
const inputPercent = document.querySelector("#percent")
const result = document.querySelector("#display-result")
const tipList = document.querySelector('#tip-list')

function numberWithCommas(x) {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function tipCalc(tot,per) { 
    if(isNaN(Number(tot)) || isNaN(Number(per))){
        return "invalid entry"
    }
    const nTot = Number(tot)
    const nPer = Number(per)/100
    preTip = nTot * nPer * 100
    finalTip = Math.floor(preTip)/100
    preTot = (nTot + finalTip) * 100
    finalTot = Math.floor(preTot)/100
    newLi = document.createElement("li")
    newLi.innerText = finalTip.toFixed(2) + ", total: " + finalTot.toFixed(2)
    tipList.append(newLi)
    return `With a $${finalTip.toFixed(2)} tip, your new total is $${numberWithCommas(finalTot.toFixed(2))}.`
};
    

function update(){
    result.innerText = tipCalc(inputSubtotal.value, inputPercent.value)
    inputSubtotal.value = ''
    inputPercent.value = ''
}