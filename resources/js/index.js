$(document).ready(function () {

  // Initiate the AOS
  AOS.init();

  // Hide Navbar-Collapse
  $(".nav-collapse").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("nav-sticky");
    } else {
      $(".navbar").removeClass("nav-sticky");
    }
  });

  // Back to Top Button
  $("#top-button").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  // Google Sheet
  var scriptURL = "https://script.google.com/macros/s/AKfycby9eHhkQ5BV-4Kuq6Fd0HyEhOJkrXh0mlxZzjWuHaAab5dzZ31WFJiOA84y_MxvuURn/exec";
  var form = document.forms['google-sheet'];
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
      .catch(error => console.error('Error!', error.message))
  });

  // Current Year
  document.getElementById("year").innerHTML = new Date().getFullYear();

});