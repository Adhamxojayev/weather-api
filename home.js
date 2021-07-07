city.onkeyup = (event) => {
    if(event.keyCode == 13){
        let api = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=f112da231bcd38755773da4d6df73794`
        let response = fetch(api)
        response.then(res => res.json())
                .then(data => {
            img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`       
            heding.textContent = `City:    ${data.name}`
            degree.textContent = `degree:  ${data.main.temp - 273 |0}°c`
            descript.textContent = `description: ${data.weather[0].description}`
            deg.textContent = `wind speed: ${data.wind.speed} m/s`
            hand.textContent = `humidity: ${data.main.humidity} %`
        })
    }
}













