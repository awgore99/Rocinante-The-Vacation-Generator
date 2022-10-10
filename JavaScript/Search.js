// Assign local variables to Search.html using ID's
// Take in API info using fetch and .then
//      using getElementID for the input from the user and querySelector to append the input to an array
//      rinse and repeat for the final destination
// the submit button will take in the starting and ending locations into an array, and relocate to a 2nd screen


// Assign ending city input

var inputEndingCity = document.getElementById("inputEndingCity");
module.exports = {inputEndingCity};


// Flight API

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
