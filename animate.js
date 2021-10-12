$(document).ready(function() {

    $(window).on("load",function() {
        $(window).scroll(function() {
            var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            $(".to-animate").each(function() {
                /* Check the location of each desired element */
                var objectBottom = $(this).offset().top + $(this).outerHeight();
                
                if (objectBottom < windowBottom) {
                    $(this).addClass("animation-effect");
                }
            });
        }).scroll(); //invoke scroll-handler on page-load
    });

});
