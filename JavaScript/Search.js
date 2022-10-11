

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
            localStorage.setItem("cityArray", JSON.stringify(localStartingCity));
        }
        else{
            window.alert("City does not exist, please try again");
        }

    }
}
fetchButton.addEventListener('click', startingSearch, endingSearch,  );
