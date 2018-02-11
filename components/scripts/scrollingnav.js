//$(document).ready(function () {
//    
//    // Select all links with hashes
//    $('.navbar-nav li a[href*="#"]')
//        // Remove links that don't actually link to anything
//        .not('[href="#"]')
//        .not('[href="#0"]')
//        .click(function (event) {
//            // On-page links
//            if (
//                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
//                location.hostname == this.hostname
//            ) {
//                // Figure out element to scroll to
//                var target = $(this.hash);
//                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//                // Does a scroll target exist?
//                if (target.length) {
//                    // Only prevent default if animation is actually gonna happen
//                    event.preventDefault();
//                    $('html, body').animate({
//                        scrollTop: target.offset().top - topoffset
//                    }, 1000, function () {
//                        // Callback after animation
//                        // Must change focus!
//                        var $target = $(target);
//                        $target.focus();
//                        if ($target.is(":focus")) { // Checking if the target was focused
//                            return false;
//                        } else {
//                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
//                            $target.focus(); // Set focus again
//                        };
//                    });
//                }
//            }
//        });
//});
$(function () {
    var header = $('#header');
    var paddingTop = header.outerHeight();

    var breadcrumb = $('mybreadcrumb');
    if (breadcrumb.length) {
        var paddingBreadcrumb = breadcrumb.outerHeight();
        paddingTop = paddingTop + paddingBreadcrumb;
    }
    $('body').css('padding-top', paddingTop);
    console.log(paddingTop);

    $(function () {
        $('#header nav.navbar a[href*="#"]:not([href="#"])').click(function () {

            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - paddingTop
                    }, 1000);
                    return false;
                }
            }
        });
    });

    // Dynamic body padding depends on height of "header nav".
    $(window).resize(function () {
        var header = $('#header');
        var paddingTop = header.outerHeight();

        var breadcrumb = $('mybreadcrumb');
        if (breadcrumb.length) {
            var paddingBreadcrumb = breadcrumb.outerHeight();
            paddingTop = paddingTop + paddingBreadcrumb;
        }
        $('body').css('padding-top', paddingTop);
        console.log(paddingTop);
    });

});
