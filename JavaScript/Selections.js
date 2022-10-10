//Assign variables to IDs in selections.html
//fetch and .then API's to search for information, taking in the aray of starting and endinglocations from search.js
//      populate the leftmost container with flight options, drive cost, and train cost
//          create a dropdown <select> menu for the user to select an option from one of these
//      populate the center container with hotel and airbnb information
//          create another dropdown <select> menu for the user to select housing accomidations
//      populate the rightmost container with information on things to do in the area
//          either a dropdown menu or checkboxes for the user to potentialy select multiple options
//
//take in all selections from the user into an array, using a "submit" button that also relocates the user to the final "results.html" page

// Weather API
// https://rapidapi.com/weatherapi/api/weatherapi-com/

var weatherContainer = document.getElementById("weather")
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cecc5c6906msh1af22ff87f0f34ap105724jsn22ee0fec224a',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


// How do I get the var of inputEndingCity from Search.html?
var inputEndingCity = "London"

var getWeatherStatus = "https://weatherapi-com.p.rapidapi.com/current.json?q=" + inputEndingCity;

fetch(getWeatherStatus, options)
	.then(response => response.json())
	.then(function(dataWeather){
        console.log(dataWeather);
        for (var i=0; i<dataWeather.length; i++){
            
            var weatherStatus = document.createElement("h3");
            var weatherIcon = document.createElement("p");
            
            weatherStatus.textContent = dataWeather[i].Condition.text;
            weatherIcon.textContent = dataWeather[i].Condition.icon;

            weatherContainer.append(weatherStatus);
            weatherContainer.append(weatherIcon);

        }
    })
	.catch(err => console.error(err));
