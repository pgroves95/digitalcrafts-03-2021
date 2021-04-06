import apiKey from api.js

function kelvToFahr(temp){
    return (temp - 273.15) * 9/5 + 32
}


function windDirectionCardinal(deg){
    deg = parseInt(deg)
    let direction = ''
    if(deg > 337 || deg <= 22){
        direction = 'N'
    } else if(deg > 22 && deg <= 67 ){
        direction = 'NE'
    } else if(deg > 67 && deg <= 112){
        direction = 'E'
    } else if(deg > 112 && deg <= 157){
        direction = 'SE'
    } else if(deg > 157 && deg <= 203){
        direction = 'S'
    } else if(deg > 203 && deg <= 248){
        direction = 'SW'
    } else if(deg > 248 && deg <= 293){
        direction = 'W'
    } else {
        direction = 'NW'
    }
    return direction
}

zip = document.getElementById("zip-input")
zipBtn = document.getElementById("zip-get")
li1 = document.getElementById("li1")
li2 = document.getElementById("li2")
li3 = document.getElementById("li3")
li4 = document.getElementById("li4")

const currentWeatherByZip = async (zip) => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`);
    usableData = await data.json()
    console.log(usableData)
    li0.innerText = `Location: ${usableData.name}`
    li1.innerText = `Temperature(F): ${kelvToFahr(usableData.main.temp).toFixed(1)}`
    li2.innerText = `Coverage: ${usableData.weather[0].description}`
    li3.innerText = `Windspeed: ${usableData.wind.speed}mph`
    direction = windDirectionCardinal(usableData.wind.deg)
    li4.innerText = `Wind Direction: ${direction}`
}

zipBtn.addEventListener("click", () => {
    currentWeatherByZip(zip.value);
})


