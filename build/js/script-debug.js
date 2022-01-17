"use strict";

// menu burger
$(document).ready(function () {
  $(".menu-burger-btn").on("click", function () {
    $(".menu-burger-btn, .header__blok-menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
  var btnCategories = $(".menu-burger-btn"); // указываем кнопку

  var categories = $(".header__blok-menu");
  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    if (!btnCategories.is(e.target) && btnCategories.has(e.target).length === 0 && // если клик был не по нашему блоку
    !categories.is(e.target) // &&
    // categories.has(e.target).length === 0
    // и не по его дочерним элементам
    ) {
      categories.removeClass("active");
      btnCategories.removeClass("active");
    }
  });
}); // accordion

$(document).ready(function () {
  $(".accordion-spoiler__title").on("click", function () {
    var parent = $(this).parent();

    if (parent.hasClass("accordion-spoiler__item-active")) {
      parent.removeClass("accordion-spoiler__item-active");
    } else {
      $(".accordion-spoiler__item").removeClass("accordion-spoiler__item-active");
      parent.addClass("accordion-spoiler__item-active");
    }
  });
}); // carousel

$(".stages-development__carousel-wrapper ").slick({
  infinite: true,
  slidesToShow: 1.65,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 1
    }
  }]
});
$(".flip-box-mob__carousel-wrapper ").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
}); // validation form;

var contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!validation(this)) {
    this.submit();
  }
});

function validation(contactForm) {
  var isError = false;

  for (var i = 0; i < contactForm.length; i++) {
    var elementForm = contactForm[i];

    if (elementForm.dataset.required && elementForm.value === "") {
      isError = true;
      elementForm.classList.add("error");
      elementForm.addEventListener("input", remuveErrorClass);
    }
  }

  return isError;
}

function remuveErrorClass() {
  this.classList.remove("error");
  this.removeEventListener("input", remuveErrorClass);
}