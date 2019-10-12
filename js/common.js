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

window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if( $('.sub-nav')[0]){
        if (scrollTop > 398) {
            $('.sub-nav').addClass('sub-nav-fixed');
            // $('.header').css('display', 'none');
            $('.main').css('paddingTop', '68px')
        } else {
            $('.sub-nav').removeClass('sub-nav-fixed');
            $('.header').css('display', 'block');
            $('.main').css('paddingTop', '16px')
        }
    }
    

    // 滚动视差
    var h = window.innerHeight;
    if(scrollTop>(1300-h)){
        var temp = h - scrollTop / 2; 
        $('.enviroment-c').css({
            'background-attachment':'fixed',
            'background-position': 'calc(50% - 500px) ' + temp + 'px',
        });
    }
   
    // $('.enviroment-c').css('background-position', 'calc(50% - 500px) ' + temp + 'px');

}
