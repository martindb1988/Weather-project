
function weather(){

    // Location
    let City = document.getElementById("City")
    let Region = document.getElementById("Region")
    let Country = document.getElementById("Country")

    // Condition
    let temp_c = document.getElementById("Temp_c")
    let temp_f = document.getElementById("Temp_f")
    let Condition = document.getElementById("Condition")

    // API Fetch call
    const value = document.getElementById("search").value
    let searchPhrase = value;
    
    fetch(`https://api.weatherapi.com/v1/current.json?key=3fda992ef93f4eb4b4e54823210809&q=${searchPhrase}&aqi=no`)
        .then(response => response.json())
        .then(character =>  {
            City.innerText =  "City:  " + character.location.name
            Region.innerText =  "Region:  " + character.location.region
            Country.innerText = "Country: " + character.location.country
            temp_c.innerText = "Temperature Celcius: " + character.current.temp_c + " C°"
            temp_f.innerText = "Temperature Fahrenheit: " + character.current.temp_f + " F°"
            Condition.innerText = "Condition: " + character.current.condition.text
        }) 
}


