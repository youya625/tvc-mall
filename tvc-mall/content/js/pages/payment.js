"use strict";
$(function () {
    //checkbox初始化
    $("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_flat-orange',
        radioClass: 'iradio_flat-orange'
    });

    $(".order-detail").pin({
        containerSelector: ".content"
    })

    $("#TTPubDate,#MGPubDate,#MGPubDate").datetimepicker({
        format: 'mm/dd/yyyy',
        autoclose: true,
        todayBtn: true
    });

    $('.collapse').collapse();

    //切换支付方式
    $(".methods-wrap").on("click", ".p-item.pic-payment", function () {
        if ($(this).attr("data-able") == "false")
            return;
        else {
            $(".methods-wrap .p-item").removeClass("select");
            $(this).addClass("select");

            $("[data-payform]").hide();
            if ($(this).attr("data-payment") != undefined || $(this).attr("data-payment") != "") {
                $("[data-payform=" + $(this).attr("data-payment") + "]").show();
            }
        }
    })

    //显示所有地址
    $("#changeAddress").click(function () {
        $("#addressInfo").toggle();
    })
})