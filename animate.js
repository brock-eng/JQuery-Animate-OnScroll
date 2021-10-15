/**
 * Applies a specified animation class to a target class on scroll reveal.
 * @author Zach Brock
 * @param {string} targetClass           Class to be animated.
 * @param {string} animationClass        Animation class to be applied on scroll.
 */
function Animate(targetClass, animationClass) {
    jQuery(function($) {
        $(window).on("load",function() {
            $(window).scroll(function() {
                var windowBottom = $(this).scrollTop() + $(this).innerHeight();
                $(targetClass).each(function() {
                    /* Check the location of each desired element */
                    var objectBottom = $(this).offset().top + $(this).outerHeight();
                    
                    if (objectBottom < windowBottom) {
                        $(this).addClass(animationClass);
                    }
                });
            }).scroll(); //invoke scroll-handler on page-load
        });
    });
};

$(document).ready(function() {
    Animate(".logos", "slide-in")
});
