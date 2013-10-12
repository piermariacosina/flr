//= require "vendor/jquery-1.8.0.min"
//= require "vendor/jquery.fitvids"
//= require "vendor/instagram"
//= require "vendor/jquery.sticky"
//= require "vendor/animatescroll.noeasing"
//= require "vendor/jquery.isotope.min"
//= require "vendor/jquery.unveil.min"

$(document).ready(function() {
    $("img").unveil();
});
var $container1 = $('#stripesmania-list .list');
var $container2 = $('#summeressentials-list .list');


$container1.isotope({ layoutMode : 'masonry' });
$container2.isotope({ layoutMode : 'masonry' });

function createPhotoElement(photo) {

    var innerHtml = $('<img>')
        .addClass('instagram-image')
        .attr('src', photo.images.low_resolution.url);

    innerHtml = $('<a>')
        .attr('target', '_blank')
        .attr('href', photo.link)
        .append(innerHtml);

    return $('<div>')
        .addClass('instagram-placeholder')
        .attr('id', photo.id)
        .append(innerHtml);
}

function didLoadInstagram(event, response) {
    var that = this;
    var counter = 0;
    $.each(response.data, function(i, photo) {
        if (counter < 6 ){
            $(that).append(createPhotoElement(photo));
        }
        counter++;
    });
}

$(document).ready(function() {
    overlay_shop()
    ajaxform_subscribe();
    main_menu();
    $("#nav-container").sticky({topSpacing:30});
    instagram_feed();

    $("#video").fitVids();
    var clientId = '974ab82ffc634d9eb5fc5e61f0df7023';



    $(document).ready(function() {
        swapWithGIF();
    });

});

function instagram_feed(){
    $('.instagram').on('didLoadInstagram', didLoadInstagram);
    $('.instagram').instagram({
        userId: 198986402,
        accessToken: '397090.974ab82.d25665182e544cb8aacd0bb88e758f5d'
    });
}

function main_menu(){
    var pathname = window.location.pathname;

    if(pathname == "/"){
        $("#concept-link").click(function(event){
            event.preventDefault();
            $("#video-container").animatescroll();
        });
        $("#preview-link").click(function(event){
            event.preventDefault();
            $("#collection-gallery").animatescroll();
        });
        $("#instagram-link").click(function(event){
            event.preventDefault();
            $("#instagram-feed").animatescroll();
        });
    }
}

function ajaxform_subscribe(){
    $("#signup-form").submit(function(e){
        e.preventDefault();

        var $form = $(this),
            name = $form.find('input[name="name"]').val(),
            email = $form.find('input[name="email"]').val(),
            list = $form.find('input[name="list"]').val(),
            url = $form.attr('action');

        $.post(url, {name:name, email:email, list:list, boolean:true},
            function(data) {
                console.log(data);
                if(data)
                {
                    if(data=="Some fields are missing.")
                    {
                        $("#status").text("Please fill in your name and email.");
                        $("#status").css("color", "red");
                    }
                    else if(data=="Invalid email address.")
                    {
                        $("#status").text("Your email address is invalid.");
                        $("#status").css("color", "red");
                    }
                    else if(data=="Invalid list ID.")
                    {
                        $("#status").text("Your list ID is invalid.");
                        $("#status").css("color", "red");
                    }
                    else if(data=="Already subscribed.")
                    {
                        $("#status").text("You're already subscribed!");
                        $("#status").css("color", "red");
                    }
                    else
                    {
                        $("#status").text("You're subscribed!");
                        $("#status").css("color", "green");
                    }
                }
                else
                {
                    alert("Sorry, unable to subscribe. Please try again later!");
                }
            }
        );
    });
    $("#signup-form").keypress(function(e) {
        if(e.keyCode == 13) {
            e.preventDefault();
            $(this).submit();
        }
    });
    $("#submit-btn").click(function(e){
        e.preventDefault();
        $("#signup-form").submit();
    });
}


function swapWithGIF(){
    $("#photo1").hover(
        function() {
            $(this).children(".img").attr("src", "img/collection-gallery/photo1.gif");
        },
        function() {
            $(this).children(".img").attr("src", "img/collection-gallery/photo1.jpg");
        }
    );
    $("#photo2").hover(
        function() {
            $(this).children(".img").attr("src", "img/collection-gallery/photo2.gif");
        },
        function() {
            $(this).children(".img").attr("src", "img/collection-gallery/photo2.jpg");
        }
    );
    $("#photo3").hover(
        function() {
            $(this).children(".img").attr("src", "img/collection-gallery/photo3.gif");
        },
        function() {
            $(this).children(".img").attr("src", "img/collection-gallery/photo3.jpg");
        }
    );
    $("#photo4").hover(
        function() {
            $(this).children(".img").attr("src", "img/collection-gallery/photo4.gif");
        },
        function() {
            $(this).children(".img").attr("src", "img/collection-gallery/photo4.jpg");
        }
    );
}



function overlay_shop(){
    $(".list div a").hover(function(){
        $(this).find(".overlay").fadeIn(400);
    }, function() {
        $(this).find(".overlay").fadeOut(400);
    });

}


