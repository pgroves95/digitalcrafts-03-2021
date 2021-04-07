card = document.querySelector(".card-container")
card.hidden = true;
body = document.querySelector("body")
console.log(card.children)
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
    for(card of deck){
        card.hidden = false;
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
    displayFakePeople()
})

const btn2 = document.querySelector("#btn2")

btn2.addEventListener("click", () => {
    btn2.hidden = true
    displayFakePhrases()
})