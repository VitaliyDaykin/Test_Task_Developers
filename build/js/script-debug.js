"use strict";

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