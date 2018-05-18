/*--------------------------------------------------------------
  Vanilla
--------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function() {

  var RELICS = window.RELICS || {};

  /*--------------------------------------------------------------
    Cookie Consent
  --------------------------------------------------------------*/
  RELICS.consent = function() {

    /* Variables
    ================================================== */
    var gaID = 'UA-69351152-2',
        gaDisable = 'ga-disable-' + gaID,
        consent = document.getElementById('consent'),
        consentHeight = consent.scrollHeight,
        options = document.getElementById('options'),
        optionsHeight = options.offsetHeight,
        accept = document.getElementById('accept'),
        decline = document.getElementById('decline'),
        content = document.getElementById('content');

    function consentToggle() {
      consent.classList.toggle('active');
    }
    function optionsToggle() {
      options.classList.toggle('active');
    }
    function contentToggle() {
      content.classList.toggle('active');
      console.log("content working");
    }

    function createCookie(name, value, days) {
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
      }
      else var expires = "";
      document.cookie = name + "=" + value + expires + "; path=/";
    }
    function deleteCookie(name) {
      createCookie(name, "", -1);
      console.log("Cookie will be deleted on refresh.");
    }


    /* Let's a go, Mario!
    ================================================== */
    window.addEventListener('load', function() {

      /* ---------- Are there any cookies? ---------- */
      if (document.cookie.indexOf('consentAccept') >= 0 || document.cookie.indexOf('consentDecline') >= 0) {
        if (!options.classList.contains('active')) {
          options.classList.add('active');
        }
        consent.style.maxHeight = consentHeight;
      } else {
        if (!consent.classList.contains('active')) {
          consent.style.maxHeight = consentHeight + "px";
        }
      }

    }); // load


    /* Accepted Consent
    ================================================== */
    accept.addEventListener('click', yesToConsent);

    function yesToConsent() {

      /* ---------- Create Cookies ---------- */
      if (document.cookie.indexOf('consentDecline') >= 0) {
        deleteCookie("consentDecline");
        createCookie("consentAccept", "accept", 365);
      } else {
        createCookie("consentAccept", "accept", 365);
      }

      /* ---------- Google Cookies ---------- */
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'UA-70459575-1');
      // Let's test your nonsense
      console.log("cookies accepted");

      /* ---------- Banner, please leave ---------- */
      consent.style.maxHeight = "0";
      console.log("banner: hiding");

      /* ---------- Tab, do your thing ---------- */
      optionsToggle();
      console.log("tab: showing");
    } // yesToConsent


    /* Declined Consent
    ================================================== */
    decline.addEventListener('click', noToConsent);

    function noToConsent() {

      if (document.cookie.indexOf('consentAccept') >= 0) {
        deleteCookie("consentAccept");
      }

      /* ---------- Delete Cookies ---------- */
      deleteCookie("_ga");
      deleteCookie("_gid");
      deleteCookie("_gat_gtag_" + gaID);

      /* ---------- Banner, please leave ---------- */
      consent.style.maxHeight = "0";
      console.log("banner: hiding");

      /* ---------- Tab, do your thing ---------- */
      optionsToggle();
      console.log("tab: showing");
    } // noToConsent

    /* Options Tab
    ================================================== */
    options.addEventListener('click', openOptions);

    function openOptions() {
      consent.style.maxHeight = consentHeight + "px";
      console.log("banner: showing");
      optionsToggle();
      console.log("tab: hiding");
    } // openOptions

  };
  RELICS.consent();

}); // end
