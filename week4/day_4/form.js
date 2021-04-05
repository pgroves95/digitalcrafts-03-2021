const form = document.querySelector("form")
const div = document.querySelector("#div")


function validateName(name) {
    myRegex = /^[a-zA-Z]+$/;
    return myRegex.test(name);
}
const validName = document.createElement("h4")
div.append(validName)

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const nameInput = document.querySelector("#name-field")
    if(!validateName(nameInput.value)){
        validName.innerText = "Please use only uppercase and\n lowercase letters for 'Name'"
    } else {
        validName.innerText = "Thanks for submitting"
    }
})



