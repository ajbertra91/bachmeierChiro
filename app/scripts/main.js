'use strict';

$(function() {
  // init foundation
  $(document).foundation();

  // change the colors of the navigation when a link is clicked

  // utility functions
  function activateHomeTab() {
    nav.removeClass('home services about space contact');
    navLinks.removeClass('active');
    nav.find('.home-btn').addClass('active');
    nav.addClass('home');
  }
  function activateServicesTab() {
    nav.removeClass('home services about space contact');
    navLinks.removeClass('active');
    nav.find('.services-btn').addClass('active');
    nav.addClass('services');
  }
  function activateAboutTab() {
    nav.removeClass('home services about space contact');
    navLinks.removeClass('active');
    nav.find('.about-btn').addClass('active');
    nav.addClass('about');
  }
  function activateSpaceTab() {
    nav.removeClass('home services about space contact');
    navLinks.removeClass('active');
    nav.find('.space-btn').addClass('active');
    nav.addClass('space');
  }
  function activateContactTab() {
    nav.removeClass('home services about space contact');
    navLinks.removeClass('active');
    nav.find('.contact-btn').addClass('active');
    nav.addClass('contact');
  }


  var nav = $('.top-bar-section');
  var navLinks = nav.find('li');

  $('.home-btn').click(function() {
    activateHomeTab();
    $('html, body').animate({
        scrollTop: $('#home').offset().top
    }, 1000);
  });
  $('.services-btn').click(function() {
    activateServicesTab();
    $('html, body').animate({
        scrollTop: $('#services').offset().top
    }, 1000);
  });
  $('.about-btn').click(function() {
    activateAboutTab();
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 1000);
  });
  $('.space-btn').click(function() {
    activateSpaceTab();
    $('html, body').animate({
        scrollTop: $('#space').offset().top
    }, 1000);
  });
  $('.contact-btn').click(function() {
    activateContactTab();
    $('html, body').animate({
        scrollTop: $('#contact').offset().top
    }, 1000);
  });

  // waypoint.js used to set color of navigation links at top of each page
  
  // ============
  // HOME TAB
  // ============
  // set home tab color when home is scrolled too
  $('#home').waypoint(function() {
    activateHomeTab();
  }), { offset: 60 };
  // set home tab when the home page is in view
  $('#services').waypoint(function() {
    activateHomeTab();
  }), { offset: 250 };

  // ============
  // SERVICES TAB
  // ============
  // set services tab color when services is scrolled too
  $('#services').waypoint(function() {
    activateServicesTab();
  }), { offset: 60 };
  // set services tab when the home page is in view
  $('#about').waypoint(function() {
    activateServicesTab();
  }), { offset: 250 };


  // ============
  // ABOUT TAB
  // ============
  // set about tab color when about is scrolled too
  $('#about').waypoint(function() {
    activateAboutTab();
  }), { offset: 60 };
  // set about tab when the home page is in view
  $('#space').waypoint(function() {
    activateAboutTab();
  }), { offset: 250 };

  // ============
  // SPACE TAB
  // ============
  // set space tab color when space is scrolled too
  $('#space').waypoint(function() {
    activateSpaceTab();
  }), { offset: 60 };
  // set space tab when the home page is in view
  $('#contact').waypoint(function() {
    activateSpaceTab();
  }), { offset: 250 };


  // ============
  // CONTACT TAB
  // ============
  // set contact tab color when contact is scrolled too
  $('#contact').waypoint(function() {
    activateContactTab();
  }), { offset: 60 };
  

  // =========================================
  // Random home page image
  // =========================================
  function randomImgLink() {
    
    var myImages = [];
    //specify random images below. You can have as many as you wish
    myImages[1]='drdixie_yoga1.jpg';
    myImages[2]='drdixie_yoga2.jpg';
    myImages[3]='drdixie_yoga3.jpg';
    var ry = Math.floor(Math.random() * myImages.length);

    if (ry === 0) {
      ry = 1;
      $('#home').css('background', 'url(./images/' + myImages[ry] + ') no-repeat 50% 0').css('background-size', '100% auto');
    } else {
      $('#home').css('background', 'url(./images/' + myImages[ry] + ') no-repeat 50% 0 ').css('background-size', '100% auto');
    }
  }
  randomImgLink();

});