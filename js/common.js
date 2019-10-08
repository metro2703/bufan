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
    } else {
        $(this).addClass('close').removeClass('open');
        $('.nav').removeClass('open');
        $('.nav-item').each(function (index, el) {
            el.style.animationDelay = ($('.nav-item').length - index) / 10 + 's';
        })
        $('.nav-item').addClass('fadeOutRight')
        $('.nav-item').removeClass('fadeInRight')
    }
});
// 课程页面中,导航不跟随
if ($('.sub-nav')[0]) {
    $('.header').css('position', 'absolute');
}

window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // tab 导航
    if (scrollTop > 0) {
        $('.header').addClass('mini');
    }
    if (scrollTop == 0) {
        $('.header').removeClass('mini');
    }
    if (scrollTop > 398 && $('.sub-nav')[0]) {
        $('.sub-nav').addClass('sub-nav-fixed');
        // $('.header').css('display', 'none');
        $('.main').css('paddingTop', '68px')
    } else {
        $('.sub-nav').removeClass('sub-nav-fixed');
        $('.header').css('display', 'block');
        $('.main').css('paddingTop', '0')
    }

    // 滚动视差
    var temp = 1000 - scrollTop / 1.7;
    $('.enviroment-c').css('background-position', 'calc(50% - 450px) ' + temp + 'px');

}

// 课程hover效果

// $('.detail.left').mouseenter(function () {
//     $(this).children('.mask').addClass('fadeInLeft');
// })
// $('.detail.left').mouseleave(function () {
//     $(this).children('.mask').removeClass('fadeInLeft');
// })
// $('.detail.right').mouseenter(function () {
//     $(this).children('.mask').addClass('fadeInRight');
// })
// $('.detail.right').mouseleave(function () {
//     $(this).children('.mask').removeClass('fadeInRight');
// })