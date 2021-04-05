const currentBoulderWeather = async () => {
    const data = await fetch("https://api.openweathermap.org/data/2.5/weather?zip=80303,us&appid=d946b612e4ee79378f94e752c60aacba");
    usableData = await data.json()
    console.log(usableData)
}

currentBoulderWeather();


