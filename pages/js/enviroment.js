// 学校环境轮播
var enSwiper = new Swiper('.en-swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChangeTransitionEnd: function () {
            // alert(this.activeIndex);
            var title = $('.swiper-slide-active').data('title');
            var txt = $('.swiper-slide-active').data('txt');
            $('.desc h3').text(title);
            $('.desc p').text(txt);
        },
    },
});