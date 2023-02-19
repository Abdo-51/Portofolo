$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('uil uil-times-square');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load', function(){
        $('#menu').toggleClass('uil uil-times-square');
        $('header').toggleClass('toggle');
    });
});



