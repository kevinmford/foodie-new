"use strict"
$(document).ready(function() {
  $(".social-buttons").hide();

  $(".whats-cooking-item")
    .on("mouseenter", function() {
      $(this).find(".social-buttons").show();
    })
    .on("mouseleave", function() {
    $(this).find(".social-buttons").hide();
  });

  var data = [
    {
      title: "Crispy Fried Chicken",
      subtext: "flaky greasy delicious",
      img: "https://static01.nyt.com/images/2015/07/02/multimedia/clark-fried-chicken/clark-fried-chicken-superJumbo.jpg"
    },

    {
      title: "Salmon on a Bagel",
      subtext: "you got lox",
      img: "https://static01.nyt.com/images/2013/08/06/dining/video-clark-bagels-and-lox/video-clark-bagels-and-lox-articleLarge.jpg"
    },

    {
      title: "Ribeye Steak",
      subtext: "you got meat",
      img: "https://assetcloud02.roccommerce.net/w750-h510-cpad//_rastelli/5/10/9/1508_eliteblackangusribeyesteak_cooked2.jpg"
    },

    {
      title: "Beef Wellington",
      subtext: "beef and pastry",
      img: "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/12/30/0/TU0602_Beef-Wellington.jpg.rend.hgtvcom.616.462.jpeg"
    },

    {
      title: "Chocolate Cake",
      subtext: "moist and fudgey",
      img: "https://d3awvtnmmsvyot.cloudfront.net/api/file/Jqoi44f2S6aGO6RXDja1/convert?fit=max&w=1450&quality=60&cache=true&rotate=exif&compress=true"
    },

    {
      title: "Vanilla Cake",
      subtext: "not as good as the Chocolate",
      img: "http://clv.h-cdn.co/assets/cm/15/10/980x490/landscape_54f4a5df2e61b_-_gettyimages_182875449.jpg"
    },

    {
      title: "Can of Spinach",
      subtext: "feel like popey",
      img: "http://www.meijer.com/assets/product_images/styles/xlarge/1001029_024000163183_A_400.jpg"
    },

    {
      title: "Burger",
      subtext: "eat it and be happy",
      img: "http://www.tastyburger.com/wp-content/themes/tastyBurger/images/home/img-large-burger.jpg"
    }
  ]

  function displayCards(){
    var html = "";
    for (var i = 0; i < data.length; i++) {
      if (i % 4 === 0) {
        html += "<div class='row'>"
      }
      html += `<div class="col-md-3 whats-cooking-item">
                <a class="whats-cooking-link">
                  <img class="whats-cooking-img"src="${data[i].img}">
                  <div class="row social-button-bar">
                    <div class="col-xs-12">
                      <button class="fa fa-facebook facebook-button social-buttons"></button>
                      <button class="fa fa-twitter twitter-button social-buttons"></button>
                      <button class="fa fa-envelope-o email-button social-buttons"></button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-12">
                      <button class="btn btn-block btn-primary book-button fa fa-book"></button>
                    </div>
                  </div>
                  <h3 class="whats-cooking-title text-center">${data[i].title}</h3>
                  <p class="whats-cooking-subtext text-center">${data[i].subtext}</p>
                </a>
              </div>`
      if ((i > 0) && ((i - 3) % 4 === 0)) {
        html += "</div>"
      }
    }
    $("#whats-cooking-grid").append(html);
  };
  displayCards();
});