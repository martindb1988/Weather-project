function weather(){
    // Determination of all fields needed
    let Temperature = document.getElementById("Temperature")
    let feelsLike =  document.getElementById("feelsLike")
    let locationPrompt = prompt("Please enter the name of the city you would like to check ?")
    let location = `https://api.weatherapi.com/v1/current.json?key=3fda992ef93f4eb4b4e54823210809&q=${locationPrompt}&aqi=no`
    let locationDisplay = document.getElementById("locationDisplay")
    let region = document.getElementById("region")
    
    // API Fetch call"
    fetch(location)
        .then(response => response.json())
        .then(character => {
            Temperature.innerText = character.current.temp_f + " F°"
            feelsLike.innerText = character.current.feelslike_f + " F°"
            locationDisplay.innerText = character.location.name
            region.innerText = character.location.region
        })
}

weather()
