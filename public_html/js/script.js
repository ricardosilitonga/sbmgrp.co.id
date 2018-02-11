

//---------------------------

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


//---------------------------
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


//---------------------------
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


//---------------------------
$(document).ready(function() {
  // if ($('#map_canvas').length) {
  //   console.log("Maps");
  // } else {
  //   console.log("No Maps");
  // }

  if ($('#map_canvas').length) {
    // Asynchronously Load the map API
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAF33SEqBrJJSqCSKSSERAUpswzMC665SE&sensor=false&callback=initialize";
    document.body.appendChild(script);
  }
});
    


function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };

    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);

    // Multiple Markers
    var markers = [
      ['Mitsubishi Bukit Tinggi - Andalas Berlian Motors', -0.3326917, 100.379164],
      ['Mitsubishi Padang - Andalas Berlian Motors', -0.9284731, 100.3439291],
      ['Mitsubishi Pasaman - Andalas Berlian Motors', 0.0868907, 99.8217019],
      ['Mitsubishi Pondok - Andalas Berlian Motors', -0.6450573, 100.0977539],
      ['Mitsubishi Aceh - Bintang Perkasa Indah Motors', 5.5366374, 95.3391781],
      ['Mitsubishi Meulaboh - Bintang Perkasa Indah Motors', 4.1217849, 96.1817223],
      ['Mitsubishi Cideng - Ciwangi Berlian Motors', -6.174612, 106.8091938],
      ['Mitsubishi Kelapa Gading - Ciwangi Berlian Motors', -6.1557803, 106.8928353],
      ['Mitsubishi Pecenongan - Ciwangi Berlian Motors', -6.1555837, 106.8315489],
      ['Mitsubishi Pondok Indah - Ciwangi Berlian Motors', -6.1552332, 106.8315487],
      ['Mitsubishi Garut - Dahana Berlian Motor', -7.2086848, 107.8907941],
      ['Mitsubishi Tasikmalaya - Dahana Berlian Motor', -7.3453146, 108.2157],
      ['Mitsubishi Muara Bungo - Kerinci Permata Motors', -1.5114448, 102.1224461],
      ['Mitsubishi Sarolangun - Kerinci Permata Motors', -2.2965391, 102.6964626],
      ['Mitsubishi Sungai Penuh - Kerinci Permata Motors', -2.0563279, 101.3892307],
      ['Mitsubishi Jambi - Kerinci Permata Motors', -1.6159561, 103.6001011],
      ['Mitsubishi Banyuwangi - Mayangsari Berlian Motor', -8.1901013, 114.3758262],
      ['Mitsubishi Jember - Mayangsari Berlian Motor', -8.1778777, 113.6776623],
      ['Mitsubishi Sidoarjo - Mayangsari Berlian Motor', -7.3542647, 112.693071],
      ['Mitsubishi Tangerang - Paja Raya Motor', -6.2482022, 106.4850068],
      ['Mitsubishi Bagan Batu - Pekanperkasa Berlian Motor', 1.7217867, 100.3871621],
      ['Mitsubishi Batam - Pekanperkasa Berlian Motor', 1.0966211, 103.9724527],
      ['Mitsubishi Pekanbaru - Pekanperkasa Berlian Motor', 0.5147108, 101.3702673],
      ['Mitsubishi Madiun - Prabasonta Berlian Motor', -7.6274847, 111.5050063],
      ['Mitsubishi Slipi - Prabu Mandiri Motor', -6.2032042, 106.7991553],
      ['Mitsubishi Cilegon - Setiakawan Menara Motor', -6.0196917, 106.058616],
      ['Mitsubishi Malimping - Setiakawan Menara Motor', -6.8047172, 106.0074848],
      ['Mitsubishi Rangkas Bitung - Setiakawan Menara Motor', -6.3431324, 106.2323055],
      ['Mitsubishi Serang - Setiakawan Menara Motor', -6.1769141, 106.152506],
      ['Mitsubishi Bandengan - Setiakawan Pahala Motor', -6.1354473, 106.802802],
      ['Mitsubishi Pluit - Setiakawan Pahala Motor', -6.1304997, 106.7958121],
      ['Mitsubishi Krakatau - Sumatera Berlian Motors', 3.648836, 98.679172],
      ['Mitsubishi Medan - Sumatera Berlian Motors', 3.537186, 98.7066583],
      ['Mitsubishi Padang Sidempuan - Sumatera Berlian Motors', 1.3914234,99.2493091],
      ['Mitsubishi Rantau Prapat - Sumatera Berlian Motors', 2.1075217, 99.7853313]
    ];

    // Info Window Content
    var infoWindowContent = [
      ['<div class="info_content">' +
      '<h3>Mitsubishi Bukit Tinggi - Andalas Berlian Motors</h3>' +
      '<p>JL. Kapas Pandji, Km. 3, Ladang Laweh, Banuhampu, Kab. Agam Sumatera Barat.</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Padang - Andalas Berlian Motors</h3>' +
      '<p>Jalan By Pass Km 11, Sungai Sapih, Kuranji, Sungai Sapih, Kuranji, Kota Padang<br>Sumatera Barat 25173</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Pasaman - Andalas Berlian Motors</h3>' +
      '<p>Jln. Jend. Sudirman KM 1 Batang Haluan, Lingkuang Aua, Pasaman, Kabupaten Pasaman Barat<br>Sumatera Barat 26566</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Pondok - Andalas Berlian Motors</h3>' +
      '<p>Jl. Niaga No.199, Kp. Pd., Padang Bar., Kota Padang<br>Sumatera Barat 25134</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Aceh - Bintang Perkasa Indah Motors</h3>' +
      '<p>Jl. Raya Banda Aceh Km 35, Cot Mesjid, Lueng Bata, Cot Mesjid, Lueng Bata, Kota Banda Aceh<br>Nanggroe Aceh Darussalam 23123</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Meulaboh - Bintang Perkasa Indah Motors</h3>' +
      '<p>Jl. Nasional Meulaboh- Tapaktuan, Gunong Kleng, Meureubo, Gunong Kleng, Aceh Barat, Kabupaten Aceh Barat<br>Nanggroe Aceh Darussalam 23681</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Cideng - Ciwangi Berlian Motors</h3>' +
      '<p>Jl. Cideng Barat No.65, RT.14/RW.2, Cideng, Gambir, Kota Jakarta Pusat<br>DKI Jakarta 10150</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Kelapa Gading - Ciwangi Berlian Motors</h3>' +
      '<p>Jl Bulevard timur raya blok NC 1 no 29 RT.1/RW.12, Pegangsaan Dua, Kelapa Gading, RT.1/RW.12, Pegangsaan Dua, Klp. Gading, Kota Jkt Utara<br>DKI Jakarta 14250</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Pecenongan - Ciwangi Berlian Motors</h3>' +
      '<p>Jalan.Pecenongan Raya No.72 Blok A 1-2 Komplek Ruko Red Top, RT.2/RW.4, Kb. Klp., Gambir, Kota Jakarta Pusat<br>DKI Jakarta 10120</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Pondok Indah - Ciwangi Berlian Motors</h3>' +
      '<p>Jl. Sultan Iskandar Muda No.28-29, RT.8/RW.1, Kby. Lama Sel., Kby. Lama, Kota Jakarta Selatan<br>DKI Jakarta 12240</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Garut - Dahana Berlian Motor</h3>' +
      '<p>Jl Cimanuk No 19 Pedes Garut<br>Jawa Barat 44118</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Tasikmalaya - Dahana Berlian Motor</h3>' +
      '<p>Jl. K. H. Z. Mustofa No.347, Kahuripan, Tawang, Tasikmalaya<br>Jawa Barat 46115</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Muara Bungo - Kerinci Permata Motors</h3>' +
      '<p>JL Lintas Sumatra, Km 1, Muara Bungo, 37213, Manggis, Batin III, Bungo Regency<br>Jambi 37211</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Sarolangun - Kerinci Permata Motors</h3>' +
      '<p>Jl. Lintas Tengah Sumatera KM.1, Aur Gading, Kec. Sarolangun, Kabupaten Sarolangun<br>Jambi 37381</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Sungai Penuh - Kerinci Permata Motors</h3>' +
      '<p>Jl. Depati Parbo No.182, Buluran Kenali, Telanaipura, Kota Jambi<br>Jambi 36361</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Jambi - Kerinci Permata Motors</h3>' +
      '<p>Jl. Kol. Abunjani, No. 10, Simp. 3, Selamat, Telanaipura, Selamat, Jambi, Kota Jambi<br>Jambi 36129</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Banyuwangi - Mayangsari Berlian Motor</h3>' +
      '<p>Jl. Yos Sudarso No. 69 A, Klatak, Kec. Banyuwangi, Kabupaten Banyuwangi<br>Jawa Timur 68421</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Jember - Mayangsari Berlian Motor</h3>' +
      '<p>Jl. Gajah Mada No.224A, Kaliwates, Kabupaten Jember<br>Jawa Timur 68133</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Sidoarjo - Mayangsari Berlian Motor</h3>' +
      '<p>Jl. Raya Taman No.48c, Taman, Kabupaten Sidoarjo<br>Jawa Timur 61257</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Tangerang - Paja Raya Motor</h3>' +
      '<p>Jalan Daan Mogot No.36, RW.2, Tanah Tinggi, Kecamatan Tangerang, Tanah Tinggi, Kec. Tangerang, Kota Tangerang<br>Banten 15119</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Bagan Batu - Pekanperkasa Berlian Motor</h3>' +
      '<p>JL Lintas Riau Sumatera, KM. 8, Bagan Batu, Bagan Sinembah, Kabupaten Rokan Hilir<br>Riau 21464</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Batam - Pekanperkasa Berlian Motor</h3>' +
      '<p>Jl. Yos Sudarso, Sungai Panas, Batam Kota, Kota Batam<br>Kepulauan Riau 29444</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Pekanbaru - Pekanperkasa Berlian Motor</h3>' +
      '<p>JL. Jend Sudirman No.230, Tengkerang Selatan, Bukit Raya, Pekanbaru City<br>Riau 28128</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Madiun - Prabasonta Berlian Motor</h3>' +
      '<p>Jl. Urip Sumoharjo No.68, Manguharjo, Mangu Harjo, Kota Madiun<br>Jawa Timur 63128</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Slipi - Prabu Mandiri Motor</h3>' +
      '<p>Jalan Jendral Gatot Subroto Kav. 50-52, Slipi, RW.7, Petamburan, Kota Jakarta Pusat<br>DKI Jakarta 10260</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Cilegon - Setiakawan Menara Motor</h3>' +
      '<p>Jl Raya Cilegon 36, Masigit Sukmajaya Cibeber, Sukmajaya, Kec. Cilegon, Kota Cilegon<br>Banten 42416</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Malimping - Setiakawan Menara Motor</h3>' +
      '<p>JL Raya Simpang Binuangeun, Lebak, Bayah, Tangerang, Sukamanah, Malingping, Kabupaten Lebak<br>Banten 42391</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Rangkas Bitung - Setiakawan Menara Motor</h3>' +
      '<p>Jl. Raya Soekarno Hatta, Kaduagung Tengah, Rangkasbitung, Kabupaten Lebak<br>Banten 42317</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Serang - Setiakawan Menara Motor</h3>' +
      '<p>Jl. Syech Nawawi Al-Bantani KP3B Palima, Sindangsari, Pabuaran, Serang<br>Banten 42171</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Bandengan - Setiakawan Pahala Motor</h3>' +
      '<p>Jl. Bandengan Utara No.36, RT.6/RW.11, Pekojan, Tambora, Kota Jakarta Barat<br>DKI Jakarta 11240</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Pluit - Setiakawan Pahala Motor</h3>' +
      '<p>Jalan Pluit Selatan Raya, No. 6 RT.9/RW.10, Kel. Penjaringan, Kec. Penjaringan, Jakata Utara<br>DKI Jakarta 14440</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Krakatau - Sumatera Berlian Motors</h3>' +
      '<p>Alamat Belum Lengkap</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Medan - Sumatera Berlian Motors</h3>' +
      '<p>Jl. Sisimangaraja KM.7, No. 34, Harjosari II, Medan Amplas, Kota Medan<br>Sumatera Utara 20148</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Padang Sidempuan - Sumatera Berlian Motors</h3>' +
      '<p>JL. Sm Raja Batu Nadua, No. 6 Km. 6, Padang Sidempuan Selatan, Aek Tampang, Padangsidimpuan Sel., Kota Padang Sidempuan<br>Sumatera Utara 22723</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>Mitsubishi Rantau Prapat - Sumatera Berlian Motors</h3>' +
      '<p>JL H.Adam Malik, Padang Bulan, Rantauprapat, Rantau Utara, Labuhanbatu<br>Sumatera Utara 21411</p>' + '</div>'],

    ];

    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;

    // Loop through our array of markers & place each one on the map
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });

        // Allow each marker to have an info window
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(5);
        google.maps.event.removeListener(boundsListener);
    });

}


//---------------------------
// Select all links with hashes
$('.navbar-nav li a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });