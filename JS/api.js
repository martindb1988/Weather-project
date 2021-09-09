function weather(){
    // Determination of all fields needed
    let Temperature = document.getElementById("Temperature")
    let feelsLike =  document.getElementById("feelsLike")
    let weatherIcon = document.getElementById("weatherIcon")
    

    // API Fetch call
    fetch('http://api.weatherapi.com/v1/current.json?key=3fda992ef93f4eb4b4e54823210809&q=Leeuwarden&aqi=no')
        .then(response => response.json())
        .then(character => {
            Temperature.innerText = "Temperature " + character.current.temp_f + " F°"
            feelsLike.innerText = "Feels like " + character.current.feelslike_f + " F°"
                let imageUrl = weatherIcon.innerText = "http:" + (character.current.condition.icon)
                document.getElementsByClassName("test").src(imageUrl)
        })
}

weather()
