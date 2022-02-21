/*
    Assignment #4
    {Charmy Sanjivbhai Patel}
*/

$(function () {
        navigator.geolocation.getCurrentPosition(success, () => {
        console.log("Please enable geolocation in order to see your coordinates");
    });

    function success(position) {
        console.log("Position object: ", position);
        console.log("latitude: ", position.coords.latitude, ", longitude: ", position.coords.longitude);
        $("#locationhere").html(position.timestamp);
    }

    $(function (localStorageCheck) {
        localStorage.setItem("localStorageCheck1", position.coords.latitude);
        localStorage.setItem("localStorageCheck2", position.coords.longitude);
        
        if("localStorageCheck" in localStorage) {
            console.log("Item exists in LocalStorage");
            // console.log(window.alert("Welcome Back!"));
            $("#h1").html("Welcome");
        } else {
            console.log("Item doesn't exists in LocalStorage");
            console.log(window.alert("Welcome!"));
        }
        localStorage.getItem("Lat1", position.coords.latitude);
        localStorage.getItem("Lat2", position.coords.longitude);
    });
    
    // function localStorageData(){
    //     localStorage.setItem("lat1", "42.258817");
    //    let item1 = localStorage.getItem("lat1");
    //    console.log(item1);
    
    //     localStorage.setItem("lon1", "-83.0043917");
    //     let item2 = localStorage.getItem("lon1");
    //    console.log(item2);
    
    //     localStorage.setItem("lat2", "43.6532");
    //     let item3 = localStorage.getItem("lat2");
    //     console.log(item3);
    
    //     localStorage.setItem("lon2", "79.3832");
    //     let item4 = localStorage.getItem("lon2");
    //     console.log(item4);
    
    //     calcDistanceBetweenPoints();
    //     console.log("New Latitude: ", Δφ);
    //     console.log("New Longitute: ", Δλ);
    // }
   
    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


