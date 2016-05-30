$(function () {
    //轮播图
    $('#banner').carousel();
    $('#featured-banner').carousel({
        interval: false
    });
    $('#compare-banner').carousel({
        interval: false
    });

    //倒计时
    $(".s-time").countdowntimer({
        hours: 3,
        minutes: 10,
        seconds: 10,
        size: "lg",
    });

    //延迟加载
    $("img.lazy").lazyload({
        effect: "fadeIn"
    });
    setInterval(function () { $(window).scroll(); }, 1000)
})