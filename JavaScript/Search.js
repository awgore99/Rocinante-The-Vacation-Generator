// Assign local variables to search.html using ID's
// Take in API info using fetch and .then
//      using getElementID for the input from the user and querySelector to append the input to an array
//      rinse and repeat for the final destination
// the submit button will take in the starting and ending locations into an array, and relocate to a 2nd screen


function startingSearch{
    let input = document.getElementById('startingSearch').value
    input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

    for (i = 0; i < data.length; i++){
        let startingLoc = data[i];

        if (startingLoc.city.includes(input)){
            localStartingCity.push(input);
            localStorage.setItem("cityArray", JSON.stringify(localStartingCity));
        }
        else{
            window.alert("City does not exist, please try again");
        }

    }
}

function endingSearch{
    let input = document.getElementById('endingSearch').value
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

