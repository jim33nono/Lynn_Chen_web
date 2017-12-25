$(document).ready(function () {

    $('nav').on('click', 'a', function (event) {
        event.preventDefault(); //prevents previous event
        smoothScroll($(this.hash));
    });

    function smoothScroll(target) {
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 600);
    }

    $("#submitMessage").click(function () {
        var inputEmail = $('#inputEmail1').val();
        var userName = $('#userName').val();
        var messageTextarea = $('#messageTextarea').val();

        console.log(`${inputEmail} ${userName} ${messageTextarea}`);
        if (inputEmail == '' || userName == '' || messageTextarea == '') {
            alert('information must be fill up!');
            return false;
        }

        $.ajax({
            type: 'POST',
            url: 'https://mandrillapp.com/api/1.0/messages/send.json',
            data: {
                'key': 'E07DUkbmRAAJKU7zJ7TFnA',
                'message': {
                    'from_email': 'jim33nono@gmail.com',
                    'to': [{
                        'email': $('#inputEmail1').val(),
                        'name': $('#userName').val(),
                        'type': 'to'
                                              }],
                    'autotext': 'true',
                    'subject': 'Customer Message',
                    'html': $('#messageTextarea').val()
                }
            }
        }).done(function (response) {
            console.log($('#inputEmail1').val());
            console.log($('#userName').val());
            console.log($('#messageTextarea').val());
            console.log(response);
            alert('Emial be sent')
        }).fail(function (response) {
            alert("System error");




        });

    });

    var navigation = $('nav');
    navigation.on('click', '.option', function (event) {
        topIconFunction();

    });
});

function topIconFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }

}
