/*--------------------------------------------------------------
  Cookie Consent
--------------------------------------------------------------*/
window.addEventListener("load", function(){
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#efefef",
        "text": "#404040"
      },
      "button": {
        "background": "#b77e40",
        "text": "#ffffff"
      }
    },
    "theme": "classic"
  });
});

/*--------------------------------------------------------------
  IE 11 Conditional Statement
--------------------------------------------------------------*/
$(function(){

// Turn off Smooth Scrolling to remove "jitter" from Fixed Bg Attachment
  // Turn off Smooth Scroll (working as of 2017-09-29)
  if(navigator.userAgent.match(/Trident\/7\./)) {
    $('body').on("mousewheel", function () {
      event.preventDefault();
      var wheelDelta = event.wheelDelta;
      var currentScrollPosition = window.pageYOffset;
      window.scrollTo(0, currentScrollPosition - wheelDelta);
    });
  }
});

/*--------------------------------------------------------------
  General
--------------------------------------------------------------*/
// $(window).scroll(function() {
//   var wScroll = $(this).scrollTop();
//   $('.cog').css({
//     'transform': 'rotate(' + wScroll / 5 + 'deg)'
//   });
//   $('.cog-opp').css({
//     'transform': 'rotate(-' + wScroll / 5 + 'deg)'
//   });
// });
