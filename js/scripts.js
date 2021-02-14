// Copyright
$("#year").text(new Date().getFullYear());

// Hamburger Nav
function toggleMobileNav() {
    document.querySelector("#menu").classList.toggle("active");
    document.querySelector(".mobile-nav").classList.toggle("active");
}

// close menu on link click

$(".menu-link").click(function() {
    $("#menu").toggleClass("active");
});

// Close menu on scroll
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $("#menu").removeClass("active");
    }
});