const div = document.createElement("div")
const list = document.createElement("ul")
list.innerText = "Undordered List"
const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")
const li4 = document.createElement("li")
const li5 = document.createElement("li")
li1.innerText = "item1"
li2.innerText = "item2"
li3.innerText = "item3"
li4.innerText = "item4"
li5.innerText = "item5"
list.append(li1, li2, li3, li4, li5)
div.append(list)
const textInput = document.createElement("input")
textInput.type = "text"
textInput.innerText = "text input"
div.append(textInput)
const radioInput = document.createElement("input")
radioInput.type = "radio"
radioInput.innerText = "radio input"
div.append(radioInput)
const body = document.getElementById("root")
body.append(div)