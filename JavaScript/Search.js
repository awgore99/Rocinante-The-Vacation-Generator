// Assign local variables to search.html using ID's
// Take in API info using fetch and .then
//      using getElementID for the input from the user and querySelector to append the input to an array
//      rinse and repeat for the final destination
// the submit button will take in the starting and ending locations into an array, and relocate to a 2nd screen


// Assign starting and ending city input
var inputEndingCity = document.getElementById('endingSearch');
var inputStartingCity = document.getElementById('startingSearch');
var tripLength = document.getElementById('lengthOfStay');
var fetchButton = document.querySelector('#searchSubmitButton');

// Ending Airport API
// https://https://api-ninjas.com/api/airports
function getAirportApi(){
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '46e7505e3dmsh6a226f5ed56d4e4p148738jsnfd3fe16a8db6',
            'X-RapidAPI-Host': 'airports-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch('https://airports-by-api-ninjas.p.rapidapi.com/v1/airports?city=' + inputEndingCity.value, options)
        .then(response => response.json())
        .then(function(dataEndingAirport){
            searchFunction(dataEndingAirport);
            console.log(dataEndingAirport);
            
        })
        .catch(err => console.error(err));
        window.location.href = 'https://awgore99.github.io/Rocinante-The-Vacation-Generator/Selections.html';
        
    }

function searchFunction(data){

    for (i = 0; i < data.length; i++){
        let startingLoc = data[i];
        if (startingLoc){
            localStartingCity = inputStartingCity.value;
            console.log(localStartingCity)
            for (i = 0; i < data.length; i++){
                let endingLoc = data[i];
                if (endingLoc){
                    localEndingCity = inputEndingCity.value;
                    console.log(localEndingCity)
                }
                else{
                    window.alert("City does not exist, please try again");
                }

            }   
        }
        else{
            window.alert("City does not exist, please try again");
        }

    }
}

if (window.location.href = 'https://awgore99.github.io/Rocinante-The-Vacation-Generator/Search.html'){
    fetchButton.addEventListener('click', getAirportApi);
}



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




var weatherContainer = document.getElementById("weather");
// Assign starting and ending city input

var startingAirportContainer = document.getElementById("startingAirport");

var endingAirportContainer = document.getElementById("endingAirport");

var hotelContainer = document.getElementById("hotel");

var flightContainer = document.getElementById("flight");

var activityContainer = document.getElementById("activity");

var transitContainer = document.getElementById("transit");


var hotelOptionOne = document.getElementById("hotelOptionOne");




// Hotel API
// https://rapidapi.com/tipsters/api/priceline-com-provider/

function getHotelApi(){
   
   var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '46e7505e3dmsh6a226f5ed56d4e4p148738jsnfd3fe16a8db6',
            'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
        }
    };
    


    var getHotelStatus = "https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations?name=" + inputEndingCity.value + "&search_type=HOTEL";

    // fetch('https://world-airports-directory.p.rapidapi.com/v1/airports?page=1&sortBy=name%3Aasc&limit=20', options)

    fetch(getHotelStatus, options)

        .then(response => response.json())
        .then(function(dataHotel){
            console.log(dataHotel);
            for (var i=0; i<dataHotel.length; i++){
                
                var hotelName = document.createElement("h3");
                var hotelAddress = document.createElement("p");
                
                hotelName.textContent = dataHotel[i].itemName;
                hotelAddress.textContent = dataHotel[i].address;

                hotelContainer.appendChild(hotelName);
                hotelContainer.append(hotelAddress);
            }
        })
        // .catch(err => console.error(err));
}




// StartingAirport API
// https://rapidapi.com/karanp41-eRiF1pYLK1P/api/world-airports-directory/
function getStartingAirportApi(){
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cecc5c6906msh1af22ff87f0f34ap105724jsn22ee0fec224a',
		'X-RapidAPI-Host': 'world-airports-directory.p.rapidapi.com'
	}
};
var getStartingAirportStatus = "https://world-airports-directory.p.rapidapi.com/v1/airports/${inputStartingCity}?page=1&limit=20&sortBy=AirportName%3Aasc";

fetch(getStartingAirportStatus, options)
	.then(response => response.json())
    .then(function(dataStartingAirport){
        console.log(dataStartingAirport);
        for (var i=0; i<dataStartingAirport.length; i++){
            
            var startingAirportName = document.createElement("h3");
            var startingAirportCode = document.createElement("p");
            var startingAirportLat = document.createElement("p");
            var startingAirportLong = document.createElement("p");
            
            startingAirportName.textContent = dataStartingAirport[i].results[0].AirportName;
            startingAirportCode.textContent = dataStartingAirport[i].results[0].AirportCode;
            startingAirportLat.textContent = dataStartingAirport[i].results[0].lat;
            startingAirportLong.textContent = dataStartingAirport[i].results[0].long;


            startingAirportContainer.append(startingAirportName);
            startingAirportContainer.append(startingAirportCode);
            startingAirportContainer.append(startingAirportLat);
            startingAirportContainer.append(startingAirportLong);


        }
    })
	.catch(err => console.error(err));
}



// Ending Airport API
// https://rapidapi.com/karanp41-eRiF1pYLK1P/api/world-airports-directory/
function getStartingAirportApi(){
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cecc5c6906msh1af22ff87f0f34ap105724jsn22ee0fec224a',
            'X-RapidAPI-Host': 'world-airports-directory.p.rapidapi.com'
        }
    };
    var getEndingAirportStatus = "https://world-airports-directory.p.rapidapi.com/v1/airports/${inputEndingCity}?page=1&limit=20&sortBy=AirportName%3Aasc";
    
    fetch(getEndingAirportStatus, options)
        .then(response => response.json())
        .then(function(dataEndingAirport){
            console.log(dataEndingAirport);
            for (var i=0; i<dataEndingAirport.length; i++){
                
                var endingAirportName = document.createElement("h3");
                var endingAirportCode = document.createElement("p");
                var endingAirportLat = document.createElement("p");
                var endingAirportLong = document.createElement("p");
                
                endingAirportName.textContent = dataEndingAirport[i].results[0].AirportName;
                endingAirportCode.textContent = dataEndingAirport[i].results[0].AirportCode;
                endingAirportLat.textContent = dataEndingAirport[i].results[0].lat;
                endingAirportLong.textContent = dataEndingAirport[i].results[0].long;
                
                endingAirportContainer.append(endingAirportName);
                endingAirportContainer.append(endingAirportCode);
                endingAirportContainer.append(endingAirportLat);
                endingAirportContainer.append(endingAirportLong);    
            }
        })
        .catch(err => console.error(err));
    }
    
















// Flight API
// https://rapidapi.com/DataCrawler/api/tripadvisor16

function getFlightApi(){
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cecc5c6906msh1af22ff87f0f34ap105724jsn22ee0fec224a',
            'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
        }
    };

// How assign time to current time (var timeNow) and +7 days (var timeNow_)

    var getFlightStatus = "https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights?sourceAirportCode=${startingAirportContainer[1]}&destinationAirportCode=${endingAirportContainer[1]}&date=${timeNow}&itineraryType=ONE_WAY&sortOrder=PRICE&numAdults=1&numSeniors=0&classOfService=ECONOMY&returnDate=${timeNow}&currencyCode=USD";
    fetch(getFlightStatus, options)
        .then(response => response.json())
        .then(function(dataFlight){
            console.log(dataFlight);
            for (var i=0; i<dataFlight.length; i++){
                
                var flightDepartureTime = document.createElement("h3");
                var flightNumber = document.createElement("p");
                
                flightDepartureTime.textContent = dataFlight[i].data.flights[i].segments[0].legs[0].departureDateTime;
                flightNumber.textContent = dataFlight[i].data.flights[i].segments[0].legs[0].flightNumber;
                flightContainer.append(flightDepartureTime);
                flightContainer.append(flightNumber);

            }
        })
        .catch(err => console.error(err));

}






















// Activity API 
// https://rapidapi.com/sharemap-sharemap-default/api/travel-places/

function getActivityApi(){
var options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'cecc5c6906msh1af22ff87f0f34ap105724jsn22ee0fec224a',
		'X-RapidAPI-Host': 'travel-places.p.rapidapi.com'
	},

	body: '{"query":"{ getPlaces(categories:[\"NATURE\"],lat:' + endingAirportContainer[2] + ',lng:' + endingAirportContainer[3] + ',maxDistMeters:50000) { name,lat,lng,abstract,distance,categories } }"}'
};

fetch('https://travel-places.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(function(dataActivity){
        console.log(dataActivity);
        for (var i=0; i<dataActivity.length; i++){
            
            var activityName = document.createElement("h3");
            var activityTag = document.createElement("p");
            
            activityName.textContent = dataActivity[i].data.getPlaces[i].name;
            activityTag.textContent = dataActivity[i].data.getPlaces[i].categories;
            activityContainer.append(activityName);
            activityContainer.append(activityTag);
        }
    })
    .catch(err => console.error(err));

}


















// Transit API
// https://rapidapi.com/geoapify-gmbh-geoapify/api/multimodal-trip-planner/

function getTransitApi(){
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cecc5c6906msh1af22ff87f0f34ap105724jsn22ee0fec224a',
		'X-RapidAPI-Host': 'multimodal-trip-planner.p.rapidapi.com'
	}
};

var getTransitStatus = "https://multimodal-trip-planner.p.rapidapi.com/v1/routing?waypoints=${startingAirportContainer[2]}%2C${startingAirportContainer[3]}%7C${endingAirportContainer[2]}%2C${endingAirportContainer[3]}&mode=transit";

fetch(getTransitStatus, options)
	.then(response => response.json())
    .then(function(dataTransit){
        console.log(dataTransit);
        for (var i=0; i<dataTransit.length; i++){
            
            var transitMode = document.createElement("h3");
            var transitTime = document.createElement("p");
            var transitDistance = document.createElement("p")

            transitMode.textContent = dataTransit[i].feature[0].properties.mode;
            transitTime.textContent = dataTransit[i].feature[0].properties.time;
            transitDistance.textContent = dataTransit[i].feature[0].properties.distance;
            transitContainer.append(transitMode);
            transitContainer.append(transitTime);
            transitContainer.append(transitDistance)
        }
    })
    .catch(err => console.error(err));

}




function getWeatherApi() {var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cecc5c6906msh1af22ff87f0f34ap105724jsn22ee0fec224a',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};    
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
	.catch(err => console.error(err));}