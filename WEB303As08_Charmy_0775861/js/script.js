function a_to_m() {
    doSearch({
        search: "a_to_m"
    })
}

function n_to_z() {
    doSearch({
        search: "n_to_z"
    })
}

$(document).ready(function() {
    doSearch({
        search: ""
    })
    $(".search").change(function() {
        var search = $(this).val(); // this.value
        doSearch({
            search: search
        });
    });

});

function doSearch(data) {

    $.ajax({
        url: 'config.php',
        data: data,
        type: 'post'
    }).done(function(responseData) {
        var data = JSON.parse(responseData)
        var tr = ''
        data.forEach(element => {
            var cl = element['class']
            var color = cl == "active" ? 'color:#fff' : ''
            tr += '<tr style="'+color+'">'
            var keys = Object.keys(element)
            
            keys.forEach(key => {
                if (key != "class") {
                    tr += '<td class="' + cl + '">' + element[key.toString()] + '</td>'
                }
            })
            tr += '</tr>'
        })

        document.getElementById("tbody").innerHTML = tr;

        console.log('Done: ', responseData);
    }).fail(function() {
        console.log('Failed');
    });
}

/////////////////////////////////////////////////////////////////////////////////
slider.js

$(function () {
    $('.slider').each(function () {
        var $this = $(this);
        var $group = $this.find('.slide-group');
        var $slides = $this.find('.slide');
        var buttonArray = [];
        var currentIndex = 0;
        var timeout;

        // the main method defining animation of the sliders when they transition
        function move(newIndex) {
            var animateLeft, slideLeft; 
            advance();
            if ($group.is(':animated') || currentIndex === newIndex) { 
                return; 
            }
            buttonArray[currentIndex].removeClass('active');
            buttonArray[newIndex].addClass('active');
            if (newIndex > currentIndex) {
                slideLeft = '100%'; 
                animateLeft = '-100%'; 
            } else { 
                slideLeft = '-100%'; 
                animateLeft = '100%'; 
            }

            $slides.eq(newIndex).css({
                left: slideLeft,
                display: 'block'
            });
            $group.animate({
                left: animateLeft
            }, function () {
                $group.css({
                    left: 0
                });
                $slides.eq(currentIndex).css( {display: 'none'} );
                $slides.eq(newIndex).css({
                    left: 0
                });
                currentIndex = newIndex;
            });
        }

        // automatically advance the slide on an interval
        function advance() {
            clearTimeout(timeout);

            timeout = setTimeout(function () {
                if (currentIndex < ($slides.length - 1)) {
                    move(currentIndex + 1); 
                }
                else{
                    move(0);
                }
            }, 5000);
        }

        // create pagination for each slide
        $.each($slides, function (index) {
            var $button = $('<a href="#" class="slide-btn">&bull;</a>');
            if (index === currentIndex) { 
                $button.addClass('active'); 
            }
            $button.on('click', function (e) {
                move(index); 

            }).appendTo('.slide-buttons');
            buttonArray.push($button);  
        });


        advance(); 
    });
});

/////////////////////////////////////////////////////////////////////////////////
sort.js

$(function () {

    let compare = {
        alphabetical: function (a, b) {
            if (a < b) {
                return -1;
            } else {
                return a > b ? 1 : 0;
            }
        },
        number: function (a, b) {
            return a - b;
        },
        date: function (a, b) {
            a = new Date(a);
            b = new Date(b);
            return a - b;
        }
    }

    $('th').on('click', function (e) {
        e.preventDefault();
        let $tbody = $('table').find('tbody'); // Table body
        let rows = $tbody.find('tr').toArray(); // don't move this out of this function
        //sorting code goes here      
              
            var $header = $(this); // Get header
            var order = $header.data('sort'); // Get data type
            var column;
            if ($header.is('.ascending') || $header.is('.descending')) {
                // Toggle to other class
                $header.toggleClass('ascending descending');
                // Reverse the array
                $tbody.append(rows.reverse());
            } else {
                $header.addClass('ascending'); // Add class to header
                // Remove asc or desc from all other headers
                $header.siblings().removeClass('ascending descending');
                // If compare object has method of that name
                if (compare.hasOwnProperty(order)) {
                    column = $controls.index(this); // Column’s index no
                    rows.sort(function (a, b) { // Call sort() on rows
                        a = $(a).find('td').eq(column).text();// Text of column row a
                        b = $(b).find('td').eq(column).text();// Text of column row b
                        return compare[order](a, b); // Call compare method
                    });
                    $tbody.append(rows);
                }

            }
    });

});

/////////////////////////////////////////////////////////////////////////////////
validation.js

$(function(){
    let usernameValid = false;
    let passwordValid = false;
    let dateOfBirthValid = false;

    $('form').on('submit', function(e){
        e.preventDefault();
        //validation code goes here
        if($("#username").val().length > 0){
            usernameValid = true;
        }
        if($("#password").val().length > 12){
            passwordValid = true;
        }
        if($("#dateOfBirth").val().length > 0){
            dateOfBirthValid = true;
        }
        

        if (usernameValid && passwordValid && dateOfBirthValid){
            e.preventDefault();
            $('tbody').append(`<tr><td>${$('#username').val()}</td><td>${$('#password').val().length}</td><td>${$('#dateOfBirth').val()}</td></tr>`)
            $('th').removeClass('ascending descending'); //new row added, so the table isn't sorted anymore
        }
    });

});

/////////////////////////////////////////////////////////////////////////////////
slider.css

.slider{
    width: 400px;
    margin: 0 auto;
    text-align: center;
}
.slide-viewer {
    position: relative;
    overflow: hidden;
    width: 400px;
    height: 204px;
}
.slide-group {
    width: 400px;
    height: 204px;
    position: relative;
}
.slide {
    width: 400px;
    height: 204px;
    display: none;
    position: absolute;
}
.slide img{
    width: 400px;
    height: 204px;
}
.slide:first-child {
    display: block;
}
.slide-buttons{

}
.slide-btn{
    width: 32px;
    height: 32px;
    font-size: 32px;
    line-height: 32px;
    margin: 5px 8px;
    text-decoration: none;
    display: inline-block;
    color: #777;
}
.slide-btn:hover{
    color: #810909;
}
.slide-btn.active{
    color: #d51212;
}

/////////////////////////////////////////////////////////////////////////////////
style.css

#london-wrapper, #windsor-wrapper{
    display: none;
    height: 500px;
}
table{
    border: 1px solid #000;
}
tr{
    border: 1px solid #000;
}
th, td{
    position: relative;
    padding: 10px 24px;
}
th.ascending::after {
    content: '\25BC';
    position: absolute;
    right: 0px;
}
th.descending::after {
    content: '\25B2';
    position: absolute;
    right: 0px;
}

/////////////////////////////////////////////////////////////////////////////////
index.html

<html>

<head>
    <link href="css/style.css" rel="stylesheet">
    <link href="css/slider.css" rel="stylesheet">
</head>

<body>

    <div class="slider">
        <div class="slide-viewer">
            <div class="slide-group">
                <div class="slide"><img src="img/html5.png" /></div>
                <div class="slide"><img src="img/jquery.png" /></div>
                <div class="slide"><img src="img/angular.jpg" /></div>
            </div>
        </div>
        <div class="slide-buttons"></div>
    </div>


    <div>
        <form action="/register" method="post">
            <fieldset>
                <div>
                    <label for="username">Username: </label>
                    <input id="username" name="username" type="text">
                </div>
                <div>
                    <label for="password">Password: </label>
                    <input id="password" name="password" type="password">
                </div>

                <div>
                    <label for="dateOfBirth">Date of Birth: </label>
                    <input id="dateOfBirth" name="dateOfBirth" type="date">
                </div>
                <div>
                    <input type="submit" value="Register">
                </div>
            </fieldset>
        </form>
    </div>

    <table id="userInfo">
        <thead>
            <tr>
                <th data-order="alphabetical">Username</th>
                <th data-order="number">Password Length</th>
                <th data-order="date">Date of Birth</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>

    <script src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/slider.js"></script>
    <script type="text/javascript" src="js/validation.js"></script>
    <script type="text/javascript" src="js/sort.js"></script>

</body>

</html>
