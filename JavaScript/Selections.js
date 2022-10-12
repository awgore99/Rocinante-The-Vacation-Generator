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

<<<<<<< HEAD

startingCity = 'Austin';
console.log(startingCity);
endingCity = 'Chicago';
console.log(endingCity);
=======
>>>>>>> edeea37ff9b679a34ba78cc26060c17c0ee14657



var weatherContainer = document.getElementById("weather")

var inputStartingCity = document.getElementById("inputStartingCity");
var inputEndingCity = document.getElementById("inputEndingCity");

var startingAirportContainer = document.getElementById("startingAirport");

var endingAirportContainer = document.getElementById("endingAirport");

var hotelContainer = document.getElementById("hotel");

var flightContainer = document.getElementById("flight");

var activityContainer = document.getElementById("activity");

var transitContainer = document.getElementById("transit");

var distanceContainer = document.getElementById("distance");

var fetchButton = document.getElementById("fetch-button");

var timeNow = moment().format(YYYY-MM-DD);   

var timeNow_ = moment().add(1, 'days').format(YYYY-MM-DD); 





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
    
    var getHotelStatus = `https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations?name=${inputEndingCity.value}&search_type=HOTEL`;
    fetch(getHotelStatus, options)
        .then(response => response.json())
        .then(function(dataHotel){
            console.log(dataHotel);
            for (var i=0; i<dataHotel.length; i++){
                
                var hotelName = document.appendElement("li");
                var hotelAddress = document.createElement("p");
                
                hotelName.textContent = dataHotel[i].itemName;
                hotelAddress.textContent = dataHotel[i].address;

                hotelContainer.append(hotelName);
                hotelContainer.append(hotelAddress);
            }
        })
        .catch(err => console.error(err));
}

<<<<<<< HEAD
=======

// Hotel Price API

function getHotelPriceApi(){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cecc5c6906msh1af22ff87f0f34ap105724jsn22ee0fec224a',
            'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
        }
    };
    
    fetch(`https://priceline-com-provider.p.rapidapi.com/v1/hotels/booking-details?date_checkout=${timeNow_}&date_checkin=${timeNow}&hotel_id=${hotelContainer[2].value}&rooms_number=1`, options)
        .then(response => response.json())
        .then(function(dataHotelPrice){
            console.log(dataHotelPrice);
            for (var i=0; i<dataHotelPrice.length; i++){
                
                var hotelPrice = document.createElement("p");
                var hotelStar = document.createElement("p");
                var hotelRating = document.createElement("p");                
                
                hotelPrice.textContent = dataHotel[i].bookings.offerPrice;
                hotelStar.textContent = dataHotel[i].starRating;
                hotelRating.textContent = dataHotel[i].overallGuestRating;

                hotelContainer.append(hotelPrice);
                hotelContainer.append(hotelStar);
                hotelContainer.append(hotelRating);
            }
        })
        .catch(err => console.error(err));
}
>>>>>>> edeea37ff9b679a34ba78cc26060c17c0ee14657


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
var getStartingAirportStatus = `https://world-airports-directory.p.rapidapi.com/v1/airports/${inputStartingCity.value}?page=1&limit=20&sortBy=AirportName%3Aasc`;

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
    var getEndingAirportStatus = `https://world-airports-directory.p.rapidapi.com/v1/airports/${inputEndingCity.value}?page=1&limit=20&sortBy=AirportName%3Aasc`;
    
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

    var getFlightStatus = `https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights?sourceAirportCode=${startingAirportContainer[1].value}&destinationAirportCode=${endingAirportContainer[1].value}&date=${timeNow}&itineraryType=ONE_WAY&sortOrder=PRICE&numAdults=1&numSeniors=0&classOfService=ECONOMY&returnDate=${timeNow_}&currencyCode=USD`;
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

	body: `{"query":"{ getPlaces(categories:[\"NATURE\"],lat:${endingAirportContainer[2].value},lng:${endingAirportContainer[3].value},maxDistMeters:50000) { name,lat,lng,abstract,distance,categories } }"}`
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

// Distance API
// https://rapidapi.com/ApiOcean/api/distance-calculator

function getDistanceApi(){

    var options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': 'cecc5c6906msh1af22ff87f0f34ap105724jsn22ee0fec224a',
            'X-RapidAPI-Host': 'distance-calculator.p.rapidapi.com'
        }
    };
    
    fetch(`https://distance-calculator.p.rapidapi.com/distance/simple?lat_1=${startingAirportContainer[2].value}&long_1=${startingAirportContainer[3]}&lat_2=${endingAirportContainer[2].value}&long_2=${endingAirportContainer[3].value}&unit=miles&decimal_places=2`, options)
        .then(response => response.json())
        .then(function(dataDistance){
            console.log(dataDistance);
            for (var i=0; i<dataDistance.length; i++){
                
                var distance = document.createElement("p");
                var distanceUnit = document.createElement("p");
                
                distance.textContent = dataDistance[i].distance;
                distanceUnit.textContent = dataDistance[i].unit;
    
                distanceContainer.append(distance);
                distanceContainer.append(distanceUnit);
    
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

var getTransitStatus = `https://multimodal-trip-planner.p.rapidapi.com/v1/routing?waypoints=${startingAirportContainer[2].value}%2C${startingAirportContainer[3].value}%7C${endingAirportContainer[2].value}%2C${endingAirportContainer[3].value}&mode=transit`;

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



<<<<<<< HEAD
=======
function getDriveApi(){
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cecc5c6906msh1af22ff87f0f34ap105724jsn22ee0fec224a',
            'X-RapidAPI-Host': 'multimodal-trip-planner.p.rapidapi.com'
        }
    };
    
    var getDriveStatus = `https://multimodal-trip-planner.p.rapidapi.com/v1/routing?waypoints=${startingAirportContainer[2].value}%2C${startingAirportContainer[3].value}%7C${endingAirportContainer[2].value}%2C${endingAirportContainer[3].value}&mode=drive`;
    
    fetch(getDriveStatus, options)
        .then(response => response.json())
        .then(function(dataDrive){
            console.log(dataDrive);
            for (var i=0; i<dataDrive.length; i++){
                
                var driveMode = document.createElement("h3");
                var driveTime = document.createElement("p");
                var driveDistance = document.createElement("p")
    
                driveMode.textContent = dataDrive[i].feature[0].properties.mode;
                driveTime.textContent = dataDrive[i].feature[0].properties.time;
                driveDistance.textContent = dataDrive[i].feature[0].properties.distance;
    
                driveContainer.append(driveMode);
                driveContainer.append(driveTime);
                driveContainer.append(driveDistance)
            }
        })
        .catch(err => console.error(err));
    
    }

// Weather API
// https://rapidapi.com/weatherapi/api/weatherapi-com/
>>>>>>> edeea37ff9b679a34ba78cc26060c17c0ee14657

function getWeatherApi(){
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cecc5c6906msh1af22ff87f0f34ap105724jsn22ee0fec224a',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};    
<<<<<<< HEAD
var getWeatherStatus = "https://weatherapi-com.p.rapidapi.com/current.json?q=" + inputEndingCity.value;
=======
var getWeatherStatus = `https://weatherapi-com.p.rapidapi.com/current.json?q=${inputEndingCity.value}`;
>>>>>>> edeea37ff9b679a34ba78cc26060c17c0ee14657

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
<<<<<<< HEAD
	.catch(err => console.error(err));
}
=======
    .catch(err => console.error(err));

    }

	
>>>>>>> edeea37ff9b679a34ba78cc26060c17c0ee14657
