$(document).ready(function() {

  // Overlay fitur produk
  $('.swiper-slide').hover(
    function(){
      $(this).find('.fitur-produk-overlay').show();
    },
    function(){
      $(this).find('.fitur-produk-overlay').hide();
    }
  );


  // Dynamic body padding depends on height of "header nav".

  var motorsHeader = $('.navbar.motors');
  if (motorsHeader) {
    var paddingTop = motorsHeader.outerHeight();
    $('body').css('padding-top', paddingTop);
  };

  $( window ).resize(function() {
    var motorsHeader = $('#motors-header nav');
    if (motorsHeader) {
      var paddingTop = motorsHeader.outerHeight();
      $('body').css('padding-top', paddingTop);
    };
  });
});
