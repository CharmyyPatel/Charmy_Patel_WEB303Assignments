/*
    Assignment #4
    {Charmy Sanjivbhai Patel}
*/

$(function () {
    //your code here
        navigator.geolocation.getCurrentPosition(success, () => {
        console.log("Please enable geolocation in order to see your coordinates");
    
        setLocalStorage();
    });

    function success(position) {

        console.log("Position object: ", position);
        console.log("latitude: ", position.coords.latitude, ", longitude: ", position.coords.longitude);
        $("#loctaionhere").html(position.timestamp);

    }

    function setLocalStorage() {
        var currentLatitude= localStorage.getItem(position.coords.latitude);
        var currentLongitude = localStorage.getItem(position.coords.longitude);
        var currentTimeStamp = localStorage.getItem(position.timestamp);
        
        document.getElementsByName() = currentLatitude;
        document.getElementsByName() = currentLongitude;
        document.getElementsByName() = currentTimeStamp;
      
        // htmlElem.style.backgroundColor = '#' + currentColor;
        // pElem.style.fontFamily = currentFont;
        // imgElem.setAttribute('src', currentImage);
      }
    // localStorage.setItem("food", "apple");
    let foodItem = localStorage.getItem("food");
    console.log(foodItem);

    let apple = {
        type: "fruit",
        name: "apple",
        taste: "sweet"
    };
    localStorage.setItem("foodObject", JSON.stringify(apple));
    let foodJSONStringObject = localStorage.getItem("foodObject");
    let foodObject = JSON.parse(foodJSONStringObject);
    console.log("my food object: ", foodObject.name);

    $('#prizes').accordion();

});


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


