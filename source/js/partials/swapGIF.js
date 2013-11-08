
function swapWithGIF(){
    $("#photo1").hover(
        function() {
            $(this).children(".img").attr("src", "img/collections/cover/photo1.gif");
        },
        function() {
            $(this).children(".img").attr("src", "img/collections/cover/photo1.jpg");
        }
    );
    $("#photo2").hover(
        function() {
            $(this).children(".img").attr("src", "img/collections/cover/photo2.gif");
        },
        function() {
            $(this).children(".img").attr("src", "img/collections/cover/photo2.jpg");
        }
    );
    $("#photo3").hover(
        function() {
            $(this).children(".img").attr("src", "img/collections/cover/photo3.gif");
        },
        function() {
            $(this).children(".img").attr("src", "img/collections/cover/photo3.jpg");
        }
    );
    $("#photo4").hover(
        function() {
            $(this).children(".img").attr("src", "img/collections/cover/photo4.gif");
        },
        function() {
            $(this).children(".img").attr("src", "img/collections/cover/photo4.jpg");
        }
    );
}