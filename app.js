"use strict"
$(document).ready(function() {
  $( "#whats-cooking-1" )
    .on("mouseenter", function() {
      $(".button-set-1").show();
    })
    .on("mouseleave", function() {
    $(".button-set-1").hide();
  });
  $( "#whats-cooking-2" )
    .on("mouseenter", function() {
      $(".button-set-2").show();
    })
    .on("mouseleave", function() {
    $(".button-set-2").hide();
  });
  $( "#whats-cooking-3" )
    .on("mouseenter", function() {
      $(".button-set-3").show();
    })
    .on("mouseleave", function() {
    $(".button-set-3").hide();
  });
  $( "#whats-cooking-4" )
    .on("mouseenter", function() {
      $(".button-set-4").show();
    })
    .on("mouseleave", function() {
    $(".button-set-4").hide();
  });
});