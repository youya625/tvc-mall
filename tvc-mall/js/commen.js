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

    },


    //属性筛选
    atrributesFilter: function (data) {
        data = jQuery.extend({
            defaultWidth: 218,
            colWidth: 150
        }, data || {});

        var $dom = $(this);
        var $checkBoxs = $dom.find("input[type=checkbox]");
        var $filterWrap = $dom.parent(".filter-wrap");
        var $topClose = $filterWrap.find(".close");
        var $bottomClose = $filterWrap.find(".btn-close");
        var $boxShowLink = $filterWrap.next(".filter-botom-section").find(".more-link");
        var $selectedCount = $filterWrap.find(".select-count");

        var colCount = $dom.children().length;

        var bodyWidth = data.defaultWidth;
        if (colCount > 1) {
            bodyWidth = colCount * data.colWidth;
        }

        $filterWrap.show();
        //打开
        var boxShow = function () {
            $filterWrap.addClass("filter-select");
            $filterWrap.prev(".filter-item-name").hide();
            $filterWrap.next(".filter-botom-section").hide();
            $filterWrap.width(bodyWidth);

            colCount == 1 ? $topClose.hide() : $topClose.show();
        }
        //关闭
        var boxClose = function () {
            $filterWrap.removeClass("filter-select");
            $filterWrap.width(data.defaultWidth);
            $filterWrap.prev(".filter-item-name").show();
            $filterWrap.next(".filter-botom-section").show();
            $checkBoxs.iCheck('uncheck');
            $selectedCount.html(0);
        }

        //点击选项和更多链接时打开容器
        $checkBoxs.on('ifChecked', boxShow);
        $boxShowLink.click(boxShow);

        //清除所有选项
        $filterWrap.find(".clear-link").click(function () {
            $checkBoxs.iCheck('uncheck');
            $selectedCount.html(0);
        })
        //统计选择了的选项个数
        $checkBoxs.on('ifToggled', function (event) {
            var selectCount = $dom.find("input[type=checkbox]:checked").length;
            $selectedCount.html(selectCount);
            console.log($selectedCount);
        });

        $topClose.click(boxClose);
        $bottomClose.click(boxClose);
    }
});


$(function () {
    $("[data-type='j-collapse']").click(function () {
        var $item = $(this).next("[data-type='j-collapse-item']");

        if ($(this).attr("data-status") == "open") {
            $(this).find("i").attr("class", "icon-triangle-top");
            $(this).attr("data-status", "close");
            $item.next(".filter-botom-section").find(".more-link").hide();
            $item.hide();
        } else {
            $(this).find("i").attr("class", "icon-triangle-down");
            $(this).attr("data-status", "open");
            $item.next(".filter-botom-section").find(".more-link").show();
            $item.show();
        }
    })
})