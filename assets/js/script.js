new WOW().init();
AOS.init({
  disable: window.innerWidth < 0
});

/* slider slick */
$(document).ready(function () {
  $('.responsive').slick({
    dots: false,
    infinite: true,
   /*  cssEase: 'linear', */
    pauseOnHover: true,
    pauseOnFocus: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
/*     nextArrow: `<button type="button" class="btn-outline-primary slick-arrow btn-rounded waves-effect">></button>`,  */
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          //infinite: true,
          // dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst:true
        }
      }
    ]
  });


});



//text typing

$(document).ready(function () {

  textTyping(['George...', 'Front-End...', 'Web developer'], 'text');

  function textTyping(words, id, colors) {
    colors = ['#fff'];
    var visible = true;
    var con = $('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    window.setInterval(function () {

      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount)
        window.setTimeout(function () {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          letterCount += x;
          waiting = false;
        }, 1500) //Starting Delay
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 2500) //Display delay at end
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += x;
      }
    }, 65) //Typing Delay
    window.setInterval(function () {
      if (visible === true) {
        con.className = 'console-underscore hidden'
        visible = false;

      } else {
        con.className = 'console-underscore'
        visible = true;
      }
    }, 100) //Underscore Delay
  }


});

//hide scroll navbar / menu

$(document).ready(function () {
  let prev = 0;
  let $window = $(window);
  let nav = $('#mainNav');

  $window.on('scroll', function () {
    let scrollTop = $window.scrollTop();
    nav.toggleClass('hidden', scrollTop > prev);
    prev = scrollTop;
  });

});

/* button fixed */
/* $(document).ready(function () {
  $('.fixed-action-btn').floatingActionButton({
    hoverEnabled: false
  });

}); */

$(window).scroll(function () {
 
  if ($(document).scrollTop() > 200) {
    $('#mainNav').addClass('navbar-shrink');

  } else {
    $('#mainNav').removeClass('navbar-shrink');
    // $('.nav').style('transform: none;')
  }
});

$(document).ready(function () {
  const y = (new Date).getFullYear();
  $(document).ready(function () {
    $("#anio").text((new Date).getFullYear());
    $("#anio").addClass("font-weight-bold");
  });

});

(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });


  // Modal popup$(function () {
  /*  $('.portfolio-item').magnificPopup({
     type: 'inline',
     preloader: false,
     focus: '#username',
     modal: true
   }); */
  $(document).on('click', '.portfolio-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  // Floating label headings for the contact form
  $(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict


$(document).ready(function () { //tiene que carga el documento para que se ejecute

  $.validator.setDefaults({
    submitHandler: function () {
      alert("submitted!");
     
    }
  });

  $(document).ready(function () {
    $("#formValidate").validate({
      debug: true,
      rules: {
        name: {
          required: true,
          minlength: 2,


        },
        email: {
          required: true,
          email: true,

        },
        cel: {
          required: true,
          number: true,


          /*    depends: $( "#cel" ).focus(function() {
               $("#cel").val("+51");
               $("#cel").unbind();
             }) */
        },
        mensaje: {
          required: true,
          maxlength: 500,

        }
      },
      messages: {

        name: {
          required: "Escriba su nombre",
          minlength: "No es un nombre correcto"
        },
        email: {
          required: "Escriba su Email",
          email: "No es un Email valido"
        },
        cel: {
          required: "Escriba su numero de telefono",
          number: "No es numero valido"
        },
        mensaje: {
          required: "Escriba un mensaje",
          maxlength:"Maximo 500 caracteres"

        }

      },
      errorElement: 'div',

     

      //,highlight: function(element, errorClass, validClass) {
      //  $(element).addClass(errorClass).removeClass(validClass);
      //   $(element.form).find("input-field>i.material-icons").addClass('error-icon').removeClass('valid-icon');
      // },
      // unhighlight: function(element, errorClass, validClass) {
      //   $(element).removeClass(errorClass).addClass(validClass);
      //   $(element.form).find("input-field>i.material-icons").removeClass('error-icon').addClass('valid-icon');
      // }



    })

  })
});

