$('.menu-items').mouseenter(function() {
    // $('.next-ul').css('display')
    $(this).find('.next-ul').fadeIn(400)

})
$('.menu-items').mouseleave(function() {
    // $('.next-ul').css('display')
    $(this).find('.next-ul').fadeOut(400)

})

;
(function() {
    if ($(this).scrollTop() >= 100) {
        $('.line-tip').addClass('line-tip-fixed')
        $('nav').addClass('nav-fixed')
        $('.backToTop').css('display', 'block')

    } else {
        $('nav').removeClass('nav-fixed')
        $('.line-tip').removeClass('line-tip-fixed')
        $('.backToTop').css('display', 'none')

    }
})();
$(window).scroll(function() {
    console.log($(this).scrollTop)
    if ($(this).scrollTop() >= 100) {
        $('.line-tip').addClass('line-tip-fixed')

        $('nav').addClass('nav-fixed')
        $('.backToTop').css('display', 'block')

    } else {
        $('nav').removeClass('nav-fixed')
        $('.line-tip').removeClass('line-tip-fixed')

        $('.backToTop').css('display', 'none')

    }
})

$('.backToTop').click(function() {

    var run = setInterval(function() {
        $(window).scrollTop($(window).scrollTop() - 150)
        if ($(window).scrollTop() <= 0) {
            clearInterval(run)
        }
    }, 20)


})

//footer-js

$('.calender .month').text(moment().format('MMMM'));
$('.calender .day').text(moment().format('D'))