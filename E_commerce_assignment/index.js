$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
function searchProducts() {
    var input, filter, slider, wrappers, h1, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    slider = document.querySelector('.slider');
    wrappers = slider.querySelectorAll('.wrapper');
    for (i = 0; i < wrappers.length; i++) {
        h1 = wrappers[i].querySelector('h1');
        txtValue = h1.textContent || h1.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            wrappers[i].style.display = "";
        } else {
            wrappers[i].style.display = "none";
        }
    }
}

// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    var hamburgerMenu = document.getElementById('hamburger-menu');
    var navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});
