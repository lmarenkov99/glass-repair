$(document).ready(function () {
  (YaMapsShown = !1),
    $(window).scroll(function () {
      var n;
      YaMapsShown ||
        ($(window).scrollTop() + $(window).height() > $(document).height() - 700 &&
          (((n = document.createElement("script")).type = "text/javascript"),
            (n.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8b195222ba404b22de60441249b91dcfb680d877c9300ce59ff276b408c8e4b3&amp;height=600&amp;lang=ru_RU&amp;scroll=false"),
            document.getElementById("YaMaps").appendChild(n),
            (YaMapsShown = !0)));
    }),

    $(".slider__wrapper").slick({ slidesToShow: 1, slidesToScroll: 1, autoplay: !0, autoplaySpeed: 5e3, dots: !0, prevArrow: $(".slider__control_left"), nextArrow: $(".slider__control_right") }),
    $(".runLine__slider").slick({
      infinite: !0,
      dots: !1,
      arrows: !1,
      autoplay: !0,
      autoplaySpeed: 5e3,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        { breakpoint: 1090, settings: { slidesToShow: 4, slidesToScroll: 4 } },
        { breakpoint: 860, settings: { slidesToShow: 3, slidesToScroll: 3 } },
        { breakpoint: 550, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      ],
    });

  $(".header__bottom-nav").on("click", function () {
    $(".header__bottom-nav__list").toggleClass("dn");
  });

});