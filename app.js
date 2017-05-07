"use strict"
$(document).ready(function() {

  $('.menu-item').click(function() {
    $('.menu-item').removeClass('active');
    $(this).addClass('active');
    var selected = $(this).text();
    console.log(selected);
  });
  $( ".whats-cooking-item" )
    .on("mouseenter", function() {
      $(".social-buttons").show();
    })
    .on("mouseleave", function() {
    $(".social-buttons").hide();
  });
});