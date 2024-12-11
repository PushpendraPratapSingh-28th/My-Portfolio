// AOS
AOS.init();

$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.navbar').addClass('nav-sticky');
    } else {
        $('.navbar').removeClass('nav-sticky');
    }
});

//Current Year
document.getElementById("year").innerHTML = new Date().getFullYear();