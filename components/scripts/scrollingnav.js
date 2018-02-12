$(function () {
    var header = $('#header');
    var paddingTop = header.outerHeight();

    var breadcrumb = $('mybreadcrumb');
    if (breadcrumb.length) {
        var paddingBreadcrumb = breadcrumb.outerHeight();
        paddingTop = paddingTop + paddingBreadcrumb;
    }
    $('body').css('padding-top', paddingTop);

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
    });

});
