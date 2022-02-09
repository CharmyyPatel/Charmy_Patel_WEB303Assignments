// WEB303 Assignment 2
// Student Name: Charmy Sanjivbhai Patel
// Student ID: 0775861

$("#prospect").on("click", function(){
    $("#prospect").load("prospect.html", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success") {
        console.log(`Content loaded successfully!`);
        $("#content").hide().fadeIn(500);
    }
    else {
        console.log(`Something is wrong!`);
    }
}); 
xhr.send("search=ardiuno");
});

$("#convert").on("click", function(){
    $("#convert").load("convert.html", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success") {
        console.log(`Content loaded successfully!`);
        $("#content").hide().fadeIn(500);
    }
    else {
        console.log(`Something is wrong!`);
    }
}); 
xhr.send("search=ardiuno");
});

$("#retain").on("click", function(){
    $("#retain").load("retain.html", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success") {
        console.log(`Content loaded successfully!`);
        $("#content").hide().fadeIn(500);
    }
    else {
        console.log(`Something is wrong!`);
    }
}); 
xhr.send("search=ardiuno");
});









// Solution of Assignment 2 by sir during Lab.

// $(function() {
//     $('#content-wrapper a').on('click', function() {
//        let ids = this.id;
//        console.log('the is is: ', ids);
               
//        let xhr = new XMLHttpRequest;
       
//        xhr.open('GET', ids + '.html', true);
       
//        xhr.onload = function () {
//        if (xhr.status === 200) {
//            $("#content").empty().html(xhr.responseText).hide().fadeIn(2000);
//         } 
//      };
//      xhr.send();
//     });
//  });
