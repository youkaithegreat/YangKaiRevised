/**
 * Created by Kevin on 2/22/2016.
 */

$("#splashButDown").click(function(){
    $('html, body').animate({
        scrollTop: $('#aboutMe').offset().top
    }, 'slow');
});

$(document).ready(function() {
    var $header = $("header"),
        $clone = $header.before($header.clone().addClass("clone"));
    $(window).on("scroll", function() {
        var fromTop = $("body").scrollTop();
        $('body').toggleClass("down", (fromTop > $(window).height()));
        console.log($(window).height());
    });
});


