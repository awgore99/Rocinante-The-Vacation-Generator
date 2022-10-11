
// Assign local variables to search.html using ID's
// Take in API info using fetch and .then
//      using getElementID for the input from the user and querySelector to append the input to an array
//      rinse and repeat for the final destination
// the submit button will take in the starting and ending locations into an array, and relocate to a 2nd screen


// Assign starting and ending city input
var inputStartingCity = document.getElementById("inputStartingCity");
​
var inputEndingCity = document.getElementById("inputEndingCity");


var inputEndingCity = document.getElementById('endingSearch');


var startingAirportContainer = document.getElementById("startingAirport");


var endingAirportContainer = document.getElementById("endingAirport");

​var ​hotelContainer = document.getElementById("hotel");


var fetchButton = document.querySelector('#searchSubmitButton');

​var ​flightContainer = document.getElementById("flight");


​var ​activityContainer = document.getElementById("activity");

​var ​transitContainer = document.getElementById("transit");

var fetchButton = document.getElementById("fetch-button");


// Hotel API
// https://rapidapi.com/tipsters/api/priceline-com-provider/

function getHotelApi(){
   
   var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cecc5c6906msh1af22ff87f0f34ap105724jsn22ee0fec224a',
            'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
        }
    };
    
    var getHotelStatus = "https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations?name=" + inputEndingCity + "&search_type=HOTEL";
    fetch(getHotelStatus, options)
        .then(response => response.json())
        .then(function(dataHotel){
            console.log(dataHotel);
            for (var i=0; i<dataHotel.length; i++){
                
                var hotelName = document.createElement("h3");
                var hotelAddress = document.createElement("p");
                
                hotelName.textContent = dataHotel[i].itemName;
                hotelAddress.textContent = dataHotel[i].address;

                hotelContainer.append(hotelName);
                hotelContainer.append(hotelAddress);
            }
        })
        .catch(err => console.error(err));
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
var getStartingAirportStatus = "https://world-airports-directory.p.rapidapi.com/v1/airports/"+ inputStartingCity+ "?page=1&limit=20&sortBy=AirportName%3Aasc";
​
fetch(getStartingAirportStatus, options)
	.then(response => response.json())

    .then(function(dataAirport){
        console.log(dataAirport);
        for (var i=0; i<dataAirport.length; i++){
            searchFunction();
            var airportStatus = document.createElement("h3");
            var airportStatus = document.createElement("p");

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
    window.location.href = 'https://awgore99.github.io/Rocinante-The-Vacation-Generator/Selections.html';
}



function searchFunction(){

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
    var getEndingAirportStatus = "https://world-airports-directory.p.rapidapi.com/v1/airports/"+ inputEndingCity + "?page=1&limit=20&sortBy=AirportName%3Aasc";
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
                ​
                endingAirportContainer.append(endingAirportName);
                endingAirportContainer.append(endingAirportCode);
                endingAirportContainer.append(endingAirportLat);
                endingAirportContainer.append(endingAirportLong);    ​
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

    var getFlightStatus = "https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights?sourceAirportCode=" + startingAirportContainer[1] + "&destinationAirportCode=" + endingAirportContainer[1] + "&date=" + timeNow + "&itineraryType=ONE_WAY&sortOrder=PRICE&numAdults=1&numSeniors=0&classOfService=ECONOMY&returnDate="+ timeNow_ + "&currencyCode=USD";
    fetch(getFlightStatus, options)
        .then(response => response.json())
        .then(function(dataFlight){
            console.log(dataFlight);
            for (var i=0; i<dataFlight.length; i++){
                
                var flightDepartureTime = document.createElement("h3");
                var flightNumber = document.createElement("p");
                
                flightDepartureTime.textContent = dataFlight[i].data.flights[i].segments[0].legs[0].departureDateTime;
                flightNumber.textContent = dataFlight[i].data.flights[i].segments[0].legs[0].flightNumber;
    ​
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
​
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

var getTransitStatus = "https://multimodal-trip-planner.p.rapidapi.com/v1/routing?waypoints=" + startingAirportContainer[2] + "%2C" + startingAirportContainer[3] + "%7C" + endingAirportContainer[2] + "%2C" + endingAirportContainer[3] +"&mode=transit";

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


function endingSearch(){
    let input = inputEndingCity;
    input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

    for (i = 0; i < data.length; i++){
        let startingLoc = data[i];

        if (startingLoc.city.includes(input)){
            localEndingCity.push(input);
            localStorage.setItem("cityArray", JSON.stringify(localEndingCity));
        }
        else{
            window.alert("City does not exist, please try again");
        }

    }
}

function startingSearch(){

    let input = document.getElementById('startingSearch').value
    input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

    for (i = 0; i < data.length; i++){
        let startingLoc = data[i];

        if (startingLoc.city.includes(input)){
            localStartingCity.push(input);
            localStorage.setItem("startingCity", JSON.stringify(localStartingCity));
            let endingInput = inputEndingCity;
            endingInput = endingInput.charAt(0).toUpperCase() + endingInput.slice(1).toLowerCase();

            for (i = 0; i < data.length; i++){
                let endingLoc = data[i];

                if (startingLoc.city.includes(endingInput)){
                    localEndingCity.push(endingInput);
                    localStorage.setItem("endingCity", JSON.stringify(localEndingCity));
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

fetchButton.addEventListener('click', startingSearch, endingSearch,  );




fetchButton.addEventListener('click', getAirportApi);

fetchButton.addEventListener('click', startingSearch, endingSearch, getHotelApi, getFlightApi, getStartingAirportApi, getEndingAirportApi, getTransitApi, getActivityApi, );

