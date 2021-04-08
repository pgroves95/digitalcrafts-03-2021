card = document.querySelector(".card-container")
card.hidden = true;
const btnDiv = document.querySelector(".btn-div")
const clearBtn = document.createElement("button")
clearBtn.id = "clear-btn"
clearBtn.innerText = "Clear Cards"
clearBtn.hidden = true;
const body = document.querySelector("body")
const randColor = () => Math.floor(Math.random()*16777215).toString(16)

const displayFakePeople = async () => {
    let getCC = await fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=30&_locale=en_US")
    let ccData = await getCC.json()

    for(cc of ccData.data){
        const color = randColor()
        const newCard = card.cloneNode(true)
        newCard.children[2].innerText = cc.owner
        newCard.children[1].style.backgroundColor = '#' + color
        body.append(newCard)
    }

    card.className = "off"
    const deck = document.getElementsByClassName("card-container")
    for(crd of deck){
        crd.hidden = false;
    }
}

const displayFakePhrases = async () => {
    let getPhrases = await fetch("https://fakerapi.it/api/v1/texts?_quantity=30&_locale=en_US&_characters=40")
    let phrases = await getPhrases.json()
    let count = 0
    for(phrase of phrases.data){
        accessCard = document.getElementsByClassName("card-container")[count]
        accessCard.children[4].children[1].children[0].innerText = phrase.content
        count++
    }
}

const btn1 = document.querySelector("#btn1")

btn1.addEventListener("click", () => {
    btn1.hidden = true
    if(btn2.hidden){clearBtn.hidden = false}
    displayFakePeople()
    btnDiv.appendChild(clearBtn)
})

const btn2 = document.querySelector("#btn2")

btn2.addEventListener("click", () => {
    btn2.hidden = true
    if(btn1.hidden){clearBtn.hidden = false}
    displayFakePhrases()
})

clearBtn.addEventListener("click", () =>{
    clearBtn.hidden = true;
    const deck = document.getElementsByClassName("card-container")
    for(crd of deck){
        crd.hidden = true;
}})