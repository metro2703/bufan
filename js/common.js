var navStatus = false;
// 快捷导航
$('.m-nav-icon').click(function () {
    if ($(this).hasClass('close')) {
        $(this).addClass('open').removeClass('close');
        $('.nav').addClass('open');
        $('.nav-item').each(function (index, el) {
            el.style.animationDelay = (index / 10) + 's';
        })
        $('.nav-item').removeClass('fadeOutRight')
        $('.nav-item').addClass('fadeInRight')
        navStatus = true;
    } else {
        $(this).addClass('close').removeClass('open');
        $('.nav').removeClass('open');
        $('.nav-item').each(function (index, el) {
            el.style.animationDelay = ($('.nav-item').length - index) / 10 + 's';
        })
        $('.nav-item').addClass('fadeOutRight')
        $('.nav-item').removeClass('fadeInRight')
        navStatus = false;
    }
});

window.onscroll = function () {
    if (navStatus) {
        $('.m-nav-icon').click();
    }
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var h = $('.header').outerHeight(true) + $('.banner').outerHeight(true);
    // console.log(h)
    if ($('.sub-nav')[0]) {
        if (scrollTop > h) {
            $('.sub-nav').addClass('sub-nav-fixed');
            // $('.header').css('display', 'none');
            $('.main').css('paddingTop', '68px')
        } else {
            $('.sub-nav').removeClass('sub-nav-fixed');
            $('.header').css('display', 'block');
            $('.main').css('paddingTop', '16px')
        }
    }
}