$(document).ready(function () {
  $(".accordion-spoiler__title").on("click", function () {
    const parent = $(this).parent();

    if (parent.hasClass("accordion-spoiler__item-active")) {
      parent.removeClass("accordion-spoiler__item-active");
    } else {
      $(".accordion-spoiler__item").removeClass(
        "accordion-spoiler__item-active"
      );
      parent.addClass("accordion-spoiler__item-active");
    }
  });
});

// carousel

$(".stages-development__carousel-wrapper ").slick({
  infinite: true,
  slidesToShow: 1.65,
  slidesToScroll: 1,
  // autoplay: true,
});
