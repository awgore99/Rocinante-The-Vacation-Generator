// Assign local variables to search.html using ID's
// Take in API info using fetch and .then
//      using getElementID for the input from the user and querySelector to append the input to an array
//      rinse and repeat for the final destination
// the submit button will take in the starting and ending locations into an array, and relocate to a 2nd screen


function startingSearch{
    let input = document.getElementById('startingSearch').value
    input = input.charAt(0).toUpperCase() + input.slice(1);

    for (i = 0; i < data.length; i++){
        let startingLoc = data[i];

        if (startingLoc.city.includes(input)){
            localCities.push(input);
            localStorage.setItem("cityArray", JSON.stringify(localCities));
        }

    }
}

function endingSearch{
    let input = document.getElementById('endingSearch').value
    input = input.charAt(0).toUpperCase() + input.slice(1);

    for (i = 0; i < data.length; i++){
        let startingLoc = data[i];

        if (startingLoc.city.includes(input)){
            localCities.push(input);
            localStorage.setItem("cityArray", JSON.stringify(localCities));
        }

    }
}


// Assign ending city input

var inputEndingCity = document.getElementById("inputEndingCity");
module.exports = {inputEndingCity};


// Flight API
// https://rapidapi.com/tipsters/api/priceline-com-provider/

var fetchButton = document.getElementById("fetch-button")

function getFlightApi(){
   
   var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cecc5c6906msh1af22ff87f0f34ap105724jsn22ee0fec224a',
            'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
        }
    };
    
    var getFlightStatus = "https://priceline-com-provider.p.rapidapi.com/v1/flights/locations?name=" + inputEndingCity;
    fetch(getFlightStatus, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
fetchButton.addEventListener('click', getFlightApi);


// Airport API
// https://rapidapi.com/karanp41-eRiF1pYLK1P/api/world-airports-directory/
function getAirportApi(){
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cecc5c6906msh1af22ff87f0f34ap105724jsn22ee0fec224a',
		'X-RapidAPI-Host': 'world-airports-directory.p.rapidapi.com'
	}
};
var getAirportStatus = "https://world-airports-directory.p.rapidapi.com/v1/airports/"+ inputEndingCity+ "?page=1&limit=20&sortBy=AirportName%3Aasc";

fetch(getAirportStatus, options)
	.then(response => response.json())
    .then(function(dataAirport){
        console.log(dataAirport);
        for (var i=0; i<dataAirport.length; i++){
            
            var airportStatus = document.createElement("h3");
            var airportStatus = document.createElement("p");
            
            airportStatus.textContent = dataAirport[i].Condition.text;
            airportStatus.textContent = dataAirport[i].Condition.icon;

            airportContainer.append(airportStatus);
            airportContainer.append(airportStatus);

        }
    })
	.catch(err => console.error(err));
}

fetchButton.addEventListener('click', getAirportApi);