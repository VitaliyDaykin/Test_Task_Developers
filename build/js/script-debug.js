"use strict";

$(document).ready(function () {
  $(".accordion__title").on("click", function (event) {
    $(this).toggleClass("active").next().slideToggle(300);
  });
});