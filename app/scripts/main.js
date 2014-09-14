$(function() {
  var local = window.location.pathname.split("/")[1];
  console.log('local: ', local);
  if (local === home) {
    $('nav a[href^="#' + local + '"]').addClass('home');
  }


  $(".home-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 1000);
  });
  $(".services-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#services").offset().top
    }, 1000);
  });
  $(".about-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
  });
  $(".space-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#space").offset().top
    }, 1000);
  });
  $(".contact-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
  });
});