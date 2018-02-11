$(document).ready(function () {

    // Overlay fitur produk
    $('.swiper-slide').hover(
        function () {
            $(this).find('.fitur-produk-overlay').show();
        },
        function () {
            $(this).find('.fitur-produk-overlay').hide();
        }
    );
});

