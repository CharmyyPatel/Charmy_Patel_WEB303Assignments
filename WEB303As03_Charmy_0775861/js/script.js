let getJsonObject = $.getJSON("team.json", function (data) {
    $.each(data.members, function (key, val) {
    console.log("data key: ", key, " and data value: ", val);

    $('#team').append(`<h2>${val.name}</h2><h5>${val.position}</h5><p>${val.bio}</p>`);
    });
});

console.log("The getjson object: ", getJsonObject);

$.get("team.json", function (data) {
    console.log("The data returned is: ", data);
    $("#team").json(data);
}, "html");

$.ajax('team.json', 
{
    dataType: 'json',
    timeout: 500,    
    success: function (data,status,xhr) {   
        $('p').append(data.name + ' ' + data.position + ' ' + data.bio);
    },
    error: function (jqXhr, textStatus, errorMessage) {  
        $('p').append('Loading... ' + errorMessage);
    }
});
