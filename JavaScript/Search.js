
// Assign local variables to search.html using ID's
// Take in API info using fetch and .then
//      using getElementID for the input from the user and querySelector to append the input to an array
//      rinse and repeat for the final destination
// the submit button will take in the starting and ending locations into an array, and relocate to a 2nd screen


// Assign starting and ending city input
var inputEndingCity = document.getElementById('endingSearch');
var inputStartingCity = document.getElementById('startingSearch');

var fetchButton = document.querySelector('#searchSubmitButton');

// Ending Airport API
// https://rapidapi.com/karanp41-eRiF1pYLK1P/api/world-airports-directory/
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

fetchButton.addEventListener('click', getAirportApi);

