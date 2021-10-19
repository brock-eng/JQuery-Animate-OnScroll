/**
 * Applies a specified animation class to a target classes on scroll reveal.
 * @author Zach Brock -> https://github.com/brock-eng/JQuery-Animate-OnScroll/edit/main/animate.js
 * @param {string} targetClass           Class to be animated.
 * @param {string} animationClass        Animation class to be applied on scroll.
 * @param {boolean} resetOnScrollUp      Set to true to reset the animation when scrolling back up the page
 */
function AnimateOnScroll(targetClass, animationClass, resetOnScrollUp) {
    targetClass = "." + targetClass;
    jQuery(function($) {
        $(window).on("load",function() {
            $(window).scroll(function() {
                var windowBottom = $(this).scrollTop() + $(this).innerHeight();
                $(targetClass).each(function() {
                    /* Check the location of each desired element */
                    var objectBottom = $(this).offset().top;
                    
                    if (objectBottom < windowBottom) {
                        $(this).addClass(animationClass);
                    } else if (resetOnScrollUp) {
                        $(this).removeClass(animationClass);
                    }
                });
            }).scroll(); //invoke scroll-handler on page-load
        });
    });
};


// Sample usage.  Replace classes with your own CSS animations
$(document).ready(function() {
    AnimateOnScroll("logos", "slide-in", true)
});

