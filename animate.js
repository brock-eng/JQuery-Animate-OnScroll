$(document).ready(function() {

    $(window).on("load",function() {
        $(window).scroll(function() {
            var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            $(".logos").each(function() {
                /* Check the location of each desired element */
                var objectBottom = $(this).offset().top + $(this).outerHeight();
                
                if (objectBottom < windowBottom) {
                    $(this).addClass("slide-in");
                }
            });
        }).scroll(); //invoke scroll-handler on page-load
    });

});