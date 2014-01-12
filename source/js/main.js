//= require "vendor/jquery-1.8.0.min"
//= require "vendor/jquery.fitvids"
//= require "vendor/instagram"
//= require "vendor/jquery.sticky"
//= require "vendor/animatescroll.noeasing"
//= require "vendor/jquery.isotope.min"
//= require "vendor/jquery.unveil.min"
//= require "vendor/fancybox/lib/jquery.mousewheel-3.0.6.pack"
//= require "vendor/fancybox/source/jquery.fancybox"
//= require "vendor/dropit/dropit"
//= require "vendor/imagesloaded"


//= require "partials/swapGIF"
//= require "partials/noconsole"
//= require "partials/newsletter_submit"
var $container1 = $('#stripesmania-list .list');
var $container2 = $('#summeressentials-list .list');
var $container3 = $('#ss-list .list');
var $container4 = $('#fw-list .list');
var $container5 = $('#people-list .list');

$(document).ready(function() {
    $("img").unveil();
    $('.fancybox').fancybox();
    $('.menu').dropit();

});


$container1.imagesLoaded( function() {
    $container1.isotope({ layoutMode : 'masonry' });
});

$container2.imagesLoaded( function() {
    $container2.isotope({ layoutMode : 'masonry' });
});

$container3.imagesLoaded( function() {
    $container3.isotope({ layoutMode : 'masonry' });
});

$container4.imagesLoaded( function() {
    $container4.isotope({ layoutMode : 'masonry' });
});

$container5.imagesLoaded( function() {
    $container5.isotope({ layoutMode : 'masonry' });
});


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
    main_menu();
    $("#nav-container").sticky({topSpacing:30});
    instagram_feed();

    $("#video").fitVids();
    var clientId = '974ab82ffc634d9eb5fc5e61f0df7023';
    ajaxform_subscribe();

    swapWithGIF();


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
        $("#instagram-link").click(function(event){
            event.preventDefault();
            $("#instagram-feed").animatescroll();
        });
    }
}








function overlay_shop(){
    $(".list div a").hover(function(){
        $(this).find(".overlay").fadeIn(400);
    }, function() {
        $(this).find(".overlay").fadeOut(400);
    });

}


