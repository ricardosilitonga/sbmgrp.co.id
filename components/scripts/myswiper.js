    var serviceAtHome = new Swiper('.s-serviceAtHome', {
      slidesPerView: 1,
      autoplay: {
        delay: 7000,
      },
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      clickable: true,
    });


    var swiper3 = new Swiper('.s-myslideshow', {
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
    // Responsive breakpoints

    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    });


var swiper = new Swiper('.s-produk', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    autoplay: {
      delay: 5000,
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is <= 320px
        480: {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1
        },
        // when window width is <= 480px
        640: {
            slidesPerView: 2,
            spaceBetween: 0,
            slidesPerGroup: 2
        },
        // when window width is <= 640px
        960: {
            slidesPerView: 3,
            spaceBetween: 0,
            slidesPerGroup: 3
        }
    },
    loop: true,
    loopFillGroupWithBlank: true,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    // pagination: {
    //     el: '.swiper-pagination',
    //   },
});

var swiper8 = new Swiper('.s-fuso', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  }
});


var swiper2 = new Swiper('.s-promo', {

slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
    // Responsive breakpoints

    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

var service = new Swiper('.s-ourservice', {
    slidesPerView: 4,
    spaceBetween: 0,
    // autoplay: {
    //   delay: 5000,
    // },
    // Responsive breakpoints
    breakpoints: {
        // when window width is <= 320px
        480: {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1
        },
        // when window width is <= 480px
        640: {
            slidesPerView: 2,
            spaceBetween: 0,
            slidesPerGroup: 2
        },
        // when window width is <= 640px
        960: {
            slidesPerView: 3,
            spaceBetween: 0,
            slidesPerGroup: 3
        }
    },
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

var swiper8 = new Swiper('.s-fitur-produk2', {
  slidesPerView: 2,
  slidesPerColumn: 2,
  spaceBetween: 0,
});



var swiper5 = new Swiper('.s-fitur-produk', {
  slidesPerView: 4,
  slidesPerColumn: 2,
  spaceBetween: 1,
  // Responsive breakpoints
  breakpoints: {
      // when window width is <= 320px
      480: {
          slidesPerView: 1,
          spaceBetween: 0,
          slidesPerGroup: 1
      },
      // when window width is <= 480px
      640: {
          slidesPerView: 2,
          spaceBetween: 0,
          slidesPerGroup: 2
      },
      // when window width is <= 640px
      960: {
          slidesPerView: 3,
          spaceBetween: 0,
          slidesPerGroup: 3
      }
  },
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  }
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // }
});

var swiper6 = new Swiper('.s-gallery-produk', {
  slidesPerView: 1,
  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

var opsiWarna = new Swiper('.s-opsi-warna', {
  pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          var mirageColor = 'mirageColor';
          return '<span class="' + className + ' ' + mirageColor + '-' + index +'">' + (index + 1) + '</span>';
        }
      },
});
