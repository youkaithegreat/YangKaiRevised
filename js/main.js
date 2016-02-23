/**
 * Created by Kevin on 2/22/2016.
 */

$("#photoNavBut").click(function(){
    $('html, body').animate({
        scrollTop: $('#photography').offset().top
    }, 'slow');
});

$("#homeNavBut").click(function(){
    $('html, body').animate({
        scrollTop: $('#home').offset().top
    }, 'slow');
});
$("#fendNavBut").click(function(){
    $('html, body').animate({
        scrollTop: $('#fendPortfolio').offset().top
    }, 'slow');
});
$("#otherNavBut").click(function(){
    $('html, body').animate({
        scrollTop: $('#otherPortfolio').offset().top
    }, 'slow');
});
$("#aboutNavBut").click(function(){
    $('html, body').animate({
        scrollTop: $('#aboutMe').offset().top
    }, 'slow');
});

$("#aboutNavBut").click(function(){
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


