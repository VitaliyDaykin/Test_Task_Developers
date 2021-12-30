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
});