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
var checkInDate = moment().add(30, 'days').format('YYYY-MM-DD');
var checkOutDate = moment().add(30 + tripLength, 'days').format('YYYY-MM-DD'); 

var Fly = document.getElementById('Fly');
var Drive = document.getElementById('Drive');
var flyingCost = document.getElementById('flyingCost');
var drivingCost = document.getElementById('drivingCost');
var hotelOptionOne = document.getElementById('hotelOptionOne');
var hotelOptionOneCost = document.getElementById('hotelOptionOneCost');
var hotelOptionTwo = document.getElementById('hotelOptionTwo');
var hotelOptionTwoCost = document.getElementById('hotelOptionTwoCost');
var hotelOptionThree = document.getElementById('hotelOptionThree');
var hotelOptionThreeCost = document.getElementById('hotelOptionThreeCost');
var activityOptionOne = document.getElementById('activityOptionOne');
var activityOptionOneCost = document.getElementById('activityOptionOneCost');
var activityOptionTwo = document.getElementById('activityOptionTwo');
var activityOptionTwoCost = document.getElementById('activityOptionTwoCost');
var activityOptionThree = document.getElementById('activityOptionThree');
var activityOptionThreeCost = document.getElementById('activityOptionThreeCost');
var finalTransportationSelection = document.getElementById("finalTransportationSelection");
var finalHotelSelection = document.getElementById("finalHotelSelection");
var finalActivitySelection = document.getElementById("finalActivitySelection");

// Search Airport API
// https://https://api-ninjas.com/api/airports
function getSearchAirportApi(){
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '46e7505e3dmsh6a226f5ed56d4e4p148738jsnfd3fe16a8db6',
            'X-RapidAPI-Host': 'airports-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch(`https://airports-by-api-ninjas.p.rapidapi.com/v1/airports?city=${inputEndingCity.value}`, options)
        .then(response => response.json())
        .then(function(dataEndingAirport){
            searchFunction(dataEndingAirport);
            console.log(dataEndingAirport);
            
        });


        window.location.href = './Selections.html';
    }

function searchFunction(data){
    console.log(data);
    for (i = 0; i < data.length; i++){
        let startingLoc = data[i];
        if (startingLoc){
            localStorage.setItem('startingCity', inputStartingCity.value());
            localStartingCity = inputStartingCity.value;
            console.log(localStartingCity);
            for (i = 0; i < data.length; i++){
                let endingLoc = data[i];
                if (endingLoc){
                    localStorage.setItem('endingCity', inputEndingCity.value());
                    localEndingCity = inputEndingCity.value;
                    console.log(localEndingCity);
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



//Assign variables to IDs in selections.html 
//fetch and .then API's to search for information, taking in the aray of starting and endinglocations from search.js
//      populate the leftmost container with flight options, drive cost, and train cost
//          create a dropdown <select> menu for the user to select an option from one of these
//      populate the center container with hotel and airbnb information
//          create another dropdown <select> menu for the user to select housing accomidations
//      populate the rightmost container with information on things to do in the area
//          either a dropdown menu or checkboxes for the user to potentialy select multiple options.
//
//take in all selections from the user into an array, using a "submit" button that also relocates the user to the final "results.html" page

// Weather API
// https://rapidapi.com/weatherapi/api/weatherapi-com/


if (fetchButton){
    fetchButton.addEventListener('click', getSearchAirportApi);
}

var weatherContainer = document.getElementById("weather");
// Assign starting and ending city input

var startingAirportContainer = document.getElementById("startingAirport");

var endingAirportContainer = document.getElementById("endingAirport");

var hotelContainer = document.getElementById("hotel");

var flightContainer = document.getElementById("flight");

var activityContainer = document.getElementById("activity");

var transitContainer = document.getElementById("Drive");

var distanceContainer = document.getElementById("distance")

var hotelOptionOne = document.getElementById("hotelOptionOne");

var startingAirportInfo = [];

var endingAirportInfo = [];
var startingLat;
var startingLong;
var endingLat;
var endingLong;

var totalDistance;

if(transitContainer){
    getStartingAirportApi(localStorage.getItem('startingCity'));
    getEndingAirportApi(localStorage.getItem('endingCity'));
}
if(hotelOptionOne){
    getHotelApi(localStorage.getItem('endingCity'));
}

// Hotel API
// https://rapidapi.com/tipsters/api/priceline-com-provider/


// Distance API
// https://rapidapi.com/ApiOcean/api/distance-calculator


// Starting Airport API
// https://rapidapi.com/karanp41-eRiF1pYLK1P/api/world-airports-directory/


function getStartingAirportApi(startingCity){
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '46e7505e3dmsh6a226f5ed56d4e4p148738jsnfd3fe16a8db6',
            'X-RapidAPI-Host': 'airports-by-api-ninjas.p.rapidapi.com'
        }
    };
  
    fetch(`https://airports-by-api-ninjas.p.rapidapi.com/v1/airports?city=${startingCity}`, options)
    .then(response => response.json())
    .then(function(response){
    for (var i=0; i<response.length; i++){
        if(response[i].iata != ""){
        var startingAirportName = document.createElement("h3");
        var startingAirportCode = document.createElement("p");
        var startingAirportLat = document.createElement("p");
        var startingAirportLong = document.createElement("p");
        
        startingAirportName.textContent = response[i].name;
        startingAirportInfo[0] = (response[i].name);
        startingAirportCode.textContent = response[i].iata;
        startingAirportInfo[1] = (response[i].iata);
        startingAirportLat.textContent = response[i].latitude;
        startingAirportInfo[2] = (response[i].latitude);
        startingAirportLong.textContent = response[i].longitude;
        startingAirportInfo[3] = (response[i].longitude);


        //endingAirportContainer.append(endingAirportName);
        //endingAirportContainer.append(endingAirportCode);
        //endingAirportContainer.append(endingAirportLat);
        //endingAirportContainer.append(endingAirportLong);
        for (var j=0; j < startingAirportInfo.length; j++){
            if (startingAirportInfo[j] === undefined){
                startingAirportInfo = startingAirportInfo.slice(0,j) + startingAirportInfo.slice(j+1,startingAirportInfo.length);
            }
        }
        console.log(startingAirportInfo);

        startingLat = startingAirportInfo[2];
        startingLong = startingAirportInfo[3];
        console.log(startingLat);
        i = i + (response.length + 1);
        }
    }
})
.catch(err => console.error(err));
}



// Ending Airport API
// https://rapidapi.com/apininjas/api/airports-by-api-ninjas/
function getEndingAirportApi(endingCity){
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '46e7505e3dmsh6a226f5ed56d4e4p148738jsnfd3fe16a8db6',
            'X-RapidAPI-Host': 'airports-by-api-ninjas.p.rapidapi.com'
        }
    };
  
    fetch(`https://airports-by-api-ninjas.p.rapidapi.com/v1/airports?city=${endingCity}`, options)
    .then(response => response.json())
    .then(function(response){
    for (var i=0; i<response.length; i++){
        if(response[i].iata != ""){
        var endingAirportName = document.createElement("h3");
        var endingAirportCode = document.createElement("p");
        var endingAirportLat = document.createElement("p");
        var endingAirportLong = document.createElement("p");
        
        endingAirportName.textContent = response[i].name;
        endingAirportInfo[0] = (response[i].name);
        endingAirportCode.textContent = response[i].iata;
        endingAirportInfo[1] = (response[i].iata);
        endingAirportLat.textContent = response[i].latitude;
        endingAirportInfo[2] = (response[i].latitude);
        localStorage.setItem('endingLat', response[i].latitude);
        endingAirportLong.textContent = response[i].longitude;
        endingAirportInfo[3] = (response[i].longitude);
        localStorage.setItem('endingLong', response[i].longitude);


        //endingAirportContainer.append(endingAirportName);
        //endingAirportContainer.append(endingAirportCode);
        //endingAirportContainer.append(endingAirportLat);
        //endingAirportContainer.append(endingAirportLong);
        for (var j=0; j < endingAirportInfo.length; j++){
            if (endingAirportInfo[j] === undefined){
                endingAirportInfo = endingAirportInfo.slice(0,j) + endingAirportInfo.slice(j+1,endingAirportInfo.length);
            }
        }
        endingLat = endingAirportInfo[2];
        endingLong = endingAirportInfo[3];
        i = i + (response.length + 1);
        }
    }
    getDistanceApi();
})
.catch(err => console.error(err));
}
    




function getDistanceApi(){
    console.log(startingLat);
    console.log(startingLong);
    console.log(endingLat);
    console.log(endingLong);
    var options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': 'cecc5c6906msh1af22ff87f0f34ap105724jsn22ee0fec224a',
            'X-RapidAPI-Host': 'distance-calculator.p.rapidapi.com'
        }
    };
    
    fetch(`https://distance-calculator.p.rapidapi.com/distance/simple?lat_1=${startingLat}&long_1=${startingAirportInfo[3]}&lat_2=${endingAirportInfo[2]}&long_2=${endingAirportInfo[3]}&unit=miles&decimal_places=2`, options)
        .then(response => response.json())
        .then(function(response){
            console.log(response);
            totalDistance = response.distance;

            costToDrive(totalDistance);
            costToFly(totalDistance);
            getHotelApi()

})
}






function getHotelApi(endingCity){
   
    var options = {
         method: 'GET',
         headers: {
             'X-RapidAPI-Key': '46e7505e3dmsh6a226f5ed56d4e4p148738jsnfd3fe16a8db6',
             'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
         }
     };
 
     fetch(`https://hotels-com-provider.p.rapidapi.com/v1/hotels/nearby?latitude=${localStorage.getItem('endingLat')}&currency=USD&longitude=${localStorage.getItem('endingLong')}&checkout_date=${checkOutDate}&sort_order=BEST_SELLER&checkin_date=${checkInDate}&adults_number=1&locale=en_US&guest_rating_min=4&star_rating_ids=3%2C4%2C5&page_number=1&price_min=10&accommodation_ids=20%2C8%2C15%2C5%2C1&price_max=500&amenity_ids=527%2C2063`, options)
 
         .then(response => response.json())
         .then(function(dataHotel){
            console.log(dataHotel);
            let hotelOne = dataHotel.searchResults.results[0].name;
            hotelOptionOne.append(hotelOne);
            let hotelTwo = dataHotel.searchResults.results[1].name;
            hotelOptionTwo.append(hotelTwo);
            let hotelThree = dataHotel.searchResults.results[2].name;
            hotelOptionThree.append(hotelThree);
         })
         // .catch(err => console.error(err));
 }



// Flight API
// https://rapidapi.com/DataCrawler/api/tripadvisor16

// function getFlightApi(){
//     var options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'cecc5c6906msh1af22ff87f0f34ap105724jsn22ee0fec224a',
//             'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
//         }
//     };

// // function getFlightApi(){
//     var options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'cecc5c6906msh1af22ff87f0f34ap105724jsn22ee0fec224a',
//             'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
//         }
//     };

//     var getFlightStatus = "https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights?sourceAirportCode=${startingAirportContainer[1]}&destinationAirportCode=${endingAirportContainer[1]}&date=${timeNow}&itineraryType=ONE_WAY&sortOrder=PRICE&numAdults=1&numSeniors=0&classOfService=ECONOMY&returnDate=${timeNow}&currencyCode=USD";
//     fetch(getFlightStatus, options)
//         .then(response => response.json())
//         .then(function(dataFlight){
//             console.log(dataFlight);
//             for (var i=0; i<dataFlight.length; i++){
             
//                 var flightDepartureTime = document.createElement("h3");
//                 var flightNumber = document.createElement("p");
                
// //                 flightDepartureTime.textContent = dataFlight[i].data.flights[i].segments[0].legs[0].departureDateTime;
// //                 flightNumber.textContent = dataFlight[i].data.flights[i].segments[0].legs[0].flightNumber;
// //                 flightContainer.append(flightDepartureTime);
// //                 flightContainer.append(flightNumber);

// //             }
// //         })
// //         .catch(err => console.error(err));

// // }















//getHotelApi();
//function getHotelPriceApi(){
    //var options = {
        //method: 'GET',
        //headers: {
            //'X-RapidAPI-Key': 'cecc5c6906msh1af22ff87f0f34ap105724jsn22ee0fec224a',
            //'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
       // }
   // };
   // fetch(`https://priceline-com-provider.p.rapidapi.com/v1/hotels/booking-details?date_checkout=${timeNow}&date_checkin=${timeNow_}&hotel_id=${hotelContainer[2].value}&rooms_number=1`, options)
        //.then(response => response.json())
        //.then(function(dataHotelPrice){
           // console.log(dataHotelPrice);
           // for (var i=0; i<dataHotelPrice.length; i++){
               // var hotelPrice = document.createElement("p");
              //  var hotelStar = document.createElement("p");
              //  var hotelRating = document.createElement("p");
              //  hotelPrice.textContent = dataHotel[i].bookings.offerPrice;
               // hotelStar.textContent = dataHotel[i].starRating;
              // hotelRating.textContent = dataHotel[i].overallGuestRating;
               // hotelContainer.append(hotelPrice);
              //  hotelContainer.append(hotelStar);
              //  hotelContainer.append(hotelRating);
           // }
       // })
      //  .catch(err => console.error(err));
//}







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

	body: `{"query":"{ getPlaces(categories:[\"NATURE\"],lat:${airportInfo[1][2]},lng:${airportInfo[1][3]},maxDistMeters:50000) { name,lat,lng,abstract,distance,categories } }"}`
};

fetch('https://travel-places.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(function(dataActivity){
        console.log(dataActivity);
        for (var i=0; i<dataActivity.length; i++){
            
            var activityName = document.createElement("h3");
            var activityTag = document.createElement("p");
            
            activityName.textContent = dataActivity[i].data.getPlaces[i].name;
            activityTag.textContent = dataActivity[i].data.getPlaces[i].categories.object[i];
            activityContainer.append(activityName);
            activityContainer.append(activityTag);
        }
    })
    .catch(err => console.error(err));

}


















// Transit API
// https://rapidapi.com/geoapify-gmbh-geoapify/api/multimodal-trip-planner/

// // function getTransitApi(){
// // var options = {
// // 	method: 'GET',
// // 	headers: {
// // 		'X-RapidAPI-Key': '46e7505e3dmsh6a226f5ed56d4e4p148738jsnfd3fe16a8db6',
// // 		'X-RapidAPI-Host': 'multimodal-trip-planner.p.rapidapi.com'
// // 	}
// // };

// var getTransitStatus = `https://multimodal-trip-planner.p.rapidapi.com/v1/routing?waypoints=${startingAirportContainer[2].value}%2C${startingAirportContainer[3].value}%7C${endingAirportContainer[2].value}%2C${endingAirportContainer[3].value}&mode=transit`;

// fetch(getTransitStatus, options)
// 	.then(response => response.json())
//     .then(function(dataTransit){
//         console.log(dataTransit);
//         for (var i=0; i<dataTransit.length; i++){
         
//             var transitMode = document.createElement("h3");
//             var transitTime = document.createElement("p");
//             var transitDistance = document.createElement("p")

// //             transitMode.textContent = dataTransit[i].feature[0].properties.mode;
// //             transitTime.textContent = dataTransit[i].feature[0].properties.time;
// //             transitDistance.textContent = dataTransit[i].feature[0].properties.distance;
// //             transitContainer.append(transitMode);
// //             transitContainer.append(transitTime);
// //             transitContainer.append(transitDistance)
// //         }
// //     })
// //     .catch(err => console.error(err));

// // }



function getWeatherApi() {
    var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cecc5c6906msh1af22ff87f0f34ap105724jsn22ee0fec224a',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};    

fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${inputEndingCity.value}`, options)
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

function costToFly(length){
    var distance = (length * 0.13) + 100;
    flyingCost.append(distance);
}

function costToDrive(length){
    var driveDistance = ((length/23)*3.3);
    drivingCost.append(driveDistance);
}

