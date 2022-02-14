let getJsonObject = $.getJSON("team.json", function (data) {
    $.each(data.members, function (key, val) {
    console.log("data key: ", key, " and data value: ", val);

    $('#content').append(`<div id="${val.name.toLowerCase()}" class="city">
        <div class="name"><h2>${val.name}</h2></div>
        <div class="position"><h5>${val.position}</h5></div>
        <div class="bio"><p>${val.bio}</p></div>
        </div>`);
    });
});

console.log("The getjson object: ", getJsonObject);

$.get("team.json", function (data) {
    console.log("The data returned is: ", data);
    $("#team").json(data);
}, "html");