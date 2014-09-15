$(function() {

  var nav = $('.top-bar-section');
  var navLinks = nav.find('li');
  $(".home-btn").click(function() {
    nav.removeClass('home services about space contact');
    navLinks.removeClass('active');
    nav.find('.home-btn').addClass('active');
    nav.addClass('home');
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 1000);
  });
  $(".services-btn").click(function() {
    nav.removeClass('home services about space contact');
    navLinks.removeClass('active');
    nav.find('.services-btn').addClass('active');
    nav.addClass('services');
    $('html, body').animate({
        scrollTop: $("#services").offset().top
    }, 1000);
  });
  $(".about-btn").click(function() {
    nav.removeClass('home services about space contact');
    navLinks.removeClass('active');
    nav.find('.about-btn').addClass('active');
    nav.addClass('about');
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
  });
  $(".space-btn").click(function() {
    nav.removeClass('home services about space contact');
    navLinks.removeClass('active');
    nav.find('.space-btn').addClass('active');
    nav.addClass('space');
    $('html, body').animate({
        scrollTop: $("#space").offset().top
    }, 1000);
  });
  $(".contact-btn").click(function() {
    nav.removeClass('home services about space contact');
    navLinks.removeClass('active');
    nav.find('.contact-btn').addClass('active');
    nav.addClass('contact');
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
  });

});