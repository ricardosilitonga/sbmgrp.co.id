
(function() {

  // Overlay fitur produk
  $('.swiper-slide').hover(
      function () {
          $(this).find('.fitur-produk-overlay').show();


          // Height of .swiper-slide in "rem"
          var swiperSlideHeight = $(this).height() / 16;
          //  Centering horizontally position
          var axisYContainer = swiperSlideHeight / 2;




          var text = $(this).find('.text-fitur-produk-overlay');
          var textHeight = text.height() / 16;
          var axisYText = textHeight / 2;


          var centerHorizontally = axisYContainer - axisYText;

          // console.log(containerHeight);
          // console.log(axisYContainer);
          // console.log(axisYText);

          text.css('position', 'relative');
          text.css('top', centerHorizontally + 'rem');


      },
      function () {
          $(this).find('.fitur-produk-overlay').hide();
      }
  );




  var myNode = document.querySelector('.s-fitur-produk');

  if (myNode) {
      // console.log(myNode);
      myNode.addEventListener('click', function(e) {
        console.log(e.target.tagName);
        if (e.target.tagName === 'I') {
          var myOverlay = document.createElement('div');
          myOverlay.id = 'fullscreen-overlay';
          document.body.appendChild(myOverlay);

          // set up overlay styles
          myOverlay.style.position = 'absolute';
          myOverlay.style.top = 0;
          myOverlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
          myOverlay.style.cursor = 'pointer';
          myOverlay.style.zIndex = 99999;

          // resize and position overlay
          myOverlay.style.width = window.innerWidth + 'px';
          myOverlay.style.height = window.innerHeight + 'px';
          myOverlay.style.top = window.pageYOffset + 'px';
          myOverlay.style.left = window.pageXOffset + 'px';

          //create image element
          var imgSrc = e.target.parentElement.parentElement.parentElement.getElementsByTagName('IMG')[0].src;
          var largeImage = document.createElement('img');
          largeImage.id = 'largeImage';
          largeImage.src  = imgSrc;
          largeImage.style.display = 'block';
          largeImage.style.position = 'absolute';

          // Wait until image has loaded
          largeImage.addEventListener('load', function() {
            // Resize if taller
            if (this.height > window.innerHeight) {
              this.ratio = window.innerHeight / this.height;
              this.height = this.height * this.ratio;
              this.width = this.width * this.ratio;
            }

            // Resize if wider
            if (this.width > window.innerWidth) {
              this.ratio = window.innerWidth / this.width;
              this.height = this.height * this.ratio;
              this.width = this.width * this.ratio;
            }

            centerImage(this);
            myOverlay.appendChild(largeImage);
          }); // image has loaded

          largeImage.addEventListener('click', function() {
            if (myOverlay) {
              myOverlay.parentNode.removeChild(myOverlay);
            }
          }, false);

          window.addEventListener('scroll', function() {
            if (myOverlay) {
              myOverlay.style.top = window.pageYOffset + 'px';
              myOverlay.style.left = window.pageXOffset + 'px';
            }
          }, false);

        } // target is an svg
      }, false); // image is clicked
  }


  function centerImage(theImage) {
    var myDifX = (window.innerWidth - theImage.width) / 2;
    var myDifY = (window.innerHeight - theImage.height) / 2;

    theImage.style.top = myDifY + 'px';
    theImage.style.left = myDifX + 'px';

    return theImage;
  }

})(); // self executing function
