$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        }
        else {
            $('.top').hide();
        }

    });

    // Smooth scroll to top
    $('.top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 800, 'swing');
    });

    // Smooth scroll for anchor links
    $('a[href*="#"]').on('click', function (event) {
        event.preventDefault();
        var target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800, 'swing');
        }
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggleCheckbox = document.getElementById('menuToggleCheckbox');
    const mobileMenu = document.querySelector('.mobile-menu');

    document.getElementById('menuToggle').addEventListener('click', function () {
        menuToggleCheckbox.checked = !menuToggleCheckbox.checked;
        mobileMenu.style.display = menuToggleCheckbox.checked ? 'flex' : 'none';
    });
});
