jQuery.fn.extend({
    //属性筛选显示隐藏
    filterToggle: function (data) {
        data = jQuery.extend({
            defaultCount: 8
        }, data || {});

        var $items = $(this).find("[data-type='j-toggle-item']");
        var $more = $(this).find(".show-toggle.more");
        var $less = $(this).find(".show-toggle.less")

        $items.slice(data.defaultCount).addClass("hide");

        $more.click(function () {
            $items.removeClass("hide");
            $more.addClass("hide");
            $less.removeClass("hide");
        });

        $less.click(function () {
            $items.slice(data.defaultCount).addClass("hide");
            $less.addClass("hide");
            $more.removeClass("hide");
        });
    }
});
