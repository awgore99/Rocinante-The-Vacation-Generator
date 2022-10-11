

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


fetchButton.addEventListener('click', startingSearch, endingSearch, getHotelApi, getFlightApi, getStartingAirportApi, getEndingAirportApi, getTransitApi, getActivityApi, );

