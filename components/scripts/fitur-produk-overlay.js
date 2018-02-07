
(function() {
  var myNode = document.querySelector('.s-fitur-produk');

  if (myNode) {
      // console.log(myNode);
      myNode.addEventListener('click', function(e) {
        if (e.target.tagName === 'svg') {
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

          // console.log();
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
