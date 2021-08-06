$(document).ready(function () {
    $('.counters').countUp({
        delay: 10,
        time: 1000
    });


    $('[data-fancybox="images"]').fancybox({
        margin: [44, 0, 22, 0],
        thumbs: {
            autoStart: true,
            axis: 'x'
        }
    })
    // active
    $('.nav li').click(
        function () {
            $('.nav li ').removeClass('active');
            $(this).addClass('active');
        }
    )
    $('.link').click(
        function () {
            $('.link').addClass('opacity-0');
            $('iframe').addClass('opacity');
        }
    )
    // count

    function bannerSwitcher() {
        next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
        if (next.length) next.prop('checked', true);
        else $('.sec-1-input').first().prop('checked', true);
    }

    var bannerTimer = setInterval(bannerSwitcher, 5000);

    $('nav .controls label').click(function () {
        clearInterval(bannerTimer);
        bannerTimer = setInterval(bannerSwitcher, 5000)
    });


});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
        $(".navbar-default").addClass('bg-nav');
    } else {

        $(".navbar-default").removeClass('bg-nav');
    }
});