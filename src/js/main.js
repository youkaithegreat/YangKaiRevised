/**
 * Created by Kevin on 2/22/2016.
 */

$("#splashButDown").click(function(){
    $('html, body').animate({
        scrollTop: $('#aboutMe').offset().top
    }, 'slow');
});