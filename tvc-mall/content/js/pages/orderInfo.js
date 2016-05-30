"use strict"
$(function () {
    //checkbox初始化
    $("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_flat-orange',
        radioClass: 'iradio_flat-orange'
    });
    $("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_flat-orange',
        radioClass: 'iradio_flat-orange'
    });

    $("[data-type='order-bulk-toggler']").click(function () {
        var $dom = $(this);
        var $orderBulk = $dom.parents("[data-type='order-bulk']");

        $orderBulk.hide();
        $orderBulk.siblings("[data-type='order-bulk']").show();
    })

    $(".order-list-wrap").filterToggle({
        defaultCount: 3
    });

    $(".order-detail").pin({
        containerSelector: ".content"
    })

    //计算更新，并更新工具条状态
    var calChange = function () {
        var counts = $("[data-type='order-item-revoke']").length;
        $("#itemUpdateCount").html(counts);
        if (counts == 0) {
            $(".order-update-option").hide();
        } else {
            $(".order-update-option").show();
        }
    }

    //删除商品
    $(".list-item").on("click", "[data-type='order-item-delete']", function () {
        $(this).parents(".list-item").addClass("removed-item");
        $(this).removeClass("icon-delete");
        $(this).addClass("icon-revoke");
        $(this).attr("data-type", "order-item-revoke");
        //统计被修改的商品数量
        calChange();
    });

    //撤销删除
    $(".list-item").on("click", "[data-type='order-item-revoke']", function () {
        $(this).parents(".list-item").removeClass("removed-item");
        $(this).removeClass("icon-revoke");
        $(this).addClass("icon-delete");
        var $countInput = $(this).parents(".list-item").find("[data-original-number]");
        $countInput.val($countInput.attr("data-original-number"));
        $(this).attr("data-type", "order-item-delete");
        //统计被修改的商品数量
        calChange();
    });

    //更改商品购买数量
    $(".list-item").on("change", "[data-original-number]", function () {
        var $icon = $(this).parents(".list-item").find(".delete-item");
        $icon.removeClass("icon-delete");
        $icon.addClass("icon-revoke");
        $icon.attr("data-type", "order-item-revoke");
        //统计被修改的商品数量
        calChange();
    });

    //撤销所有订单修改
    $("#undoChange").click(function () {
        var text = "Do you comfirm undo the changes of " + $("#itemUpdateCount").html();
        var r = confirm(text);
        if (r == true) {
            $("[data-type='order-item-revoke']").click();
        } else {
            return;
        }

    })
    //提示信息
    $('#placeOrder').on('click', function (e) {
        e.preventDefault();
        $.scojs_message('This is an info message', $.scojs_message.TYPE_OK);
    });
})