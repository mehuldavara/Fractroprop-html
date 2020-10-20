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

    // Home Technology Part Slider   
    $('.technologyLeftSlider .leftTechSlider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
});