
// Assign local variables to search.html using ID's
// Take in API info using fetch and .then
//      using getElementID for the input from the user and querySelector to append the input to an array
//      rinse and repeat for the final destination
// the submit button will take in the starting and ending locations into an array, and relocate to a 2nd screen


// Assign starting and ending city input
var inputEndingCity = document.getElementById('endingSearch');

var fetchButton = document.querySelector('#searchSubmitButton');

// Ending Airport API
// https://rapidapi.com/karanp41-eRiF1pYLK1P/api/world-airports-directory/
function getAirportApi(){
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
            searchFunction();
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
        window.location.href = 'https://awgore99.github.io/Rocinante-The-Vacation-Generator/Selections.html';
    }

function searchFunction(){

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

fetchButton.addEventListener('click', getAirportApi);

