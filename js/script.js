$(document).ready(function(){
    // Site Equal Height Jquery
    equalize = function(container){
        var maxHeight = 0;
        $(container).each(function(){
            if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
        });
        $(container).height(maxHeight);  
    }

    // Home Page Banner Content
    $(window).on('load', function() {
        equalize('.homeTestimonialSection .testimonailMainWrap .testiBox p');
    });
    $(window).resize(function(){
        equalize('.homeTestimonialSection .testimonailMainWrap .testiBox p');
    });
    
});