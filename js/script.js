$(document).ready(function(){

    // Toggle Menu
    $(".siteHeader .headerMenu .menu-handler").click(function(){
        $(this).toggleClass('toggleActive');
        $(".siteHeader .headerWrap .headerMenu ul").toggleClass('active');
        $(".siteHeader .headerWrap .headerMenu ul").slideToggle('active');
    });
    
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


    // Sticky Header
    window.onscroll = function(){
        myFunction();
    }

    let header = document.getElementById("myHeader");
    sticky = header.offsetTop;

    function myFunction(){
        if(window.pageYOffset>sticky){
            header.classList.add("headerSticky");
        }else{
            header.classList.remove("headerSticky");
        }
    }

    // $(".siteHeader .headerWrap .headerMenu ul li").click(function(){		
	// 	$(this).addClass("active");
    //     $(this).siblings().removeClass("active");
    // });
    
    
});


