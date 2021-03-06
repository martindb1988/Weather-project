
function weather(){

    // Variables
    let City = document.getElementById("City")
    let Region = document.getElementById("Region")
    let Country = document.getElementById("Country")
    let Temperature = document.getElementById("Temperature")
    let Condition = document.getElementById("Condition")
    let weatherIcon = document.getElementById("weatherIcon")

    // Celsius or Fahrenheit
    let tempUnit = document.querySelector('input[name="temperatureUnit"]:checked').value;
    
    // Assign search phrase to variable
    const value = document.getElementById("search").value
    let searchPhrase = value;
    
    // Check if value is provided in search box
    if(value === ""){
        alert("Please provide an city name")
                    }
    
    // Api Call
    fetch(`https://api.weatherapi.com/v1/current.json?key=3fda992ef93f4eb4b4e54823210809&q=${searchPhrase}&aqi=no`)
        .then(response => response.json())
        .then(character =>  {
            City.innerText =  "City:  " + character.location.name
            Region.innerText =  "Region:  " + character.location.region
            Country.innerText = "Country: " + character.location.country
            Condition.innerText = character.current.condition.text

            // Assigning weather icon to IMG element
            let weatherIconJson = character.current.condition.icon
            let imageUrl = "http:" + (weatherIconJson)
            weatherIcon.src=(imageUrl)

            
            // Determination if user chose Celsius or Fahrenheit
            if(tempUnit == "Celsius"){
                return Temperature.innerText = character.current.temp_c + "° C"
            } else
                return Temperature.innerText = character.current.temp_f + "° F"
            }) 
    }

        


