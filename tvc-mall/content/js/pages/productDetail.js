$(function () {

    $('#images-slider').carousel({
        interval: false
    });

    //选项卡
    $('#info-tab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

    $(".tab-wrap").pin({
        containerSelector: ".info-right"
    })

    //放大镜
    $('.jqzoom').jqzoom({
        zoomType: 'standard',
        lens: true,
        preloadImages: false,
        alwaysOn: false,
    });

    //延迟加载
    $("img.lazy").lazyload({
        effect: "fadeIn"
    });

    //checkbox初始化
    $("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_flat-orange',
        radioClass: 'iradio_flat-orange'
    });
})