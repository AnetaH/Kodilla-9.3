$(function() {
  var carouselList = $("#carousel ul");

  function changeSlides() {
    carouselList.animate({'marginLeft': -400}, 600, moveFirstSlide);
  };

  setInterval(changeSlides, 2500);

  function moveFirstSlide() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft: 0});
  };
});