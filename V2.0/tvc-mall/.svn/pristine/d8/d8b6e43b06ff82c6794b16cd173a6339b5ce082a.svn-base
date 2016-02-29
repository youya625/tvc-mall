/* global jQuery */
/* global $ */
/*
 * Author - Rumble
 * Version - 1.0.0
 * Release - 7th 2 2016
*/

+function ($) {
    "use strict";

    $.fn.proSlider = function (options) {
        var html = "";
        var count = this.find(".pro-items").length;
        for (var i = 0; i <= count - 1; i++) {
            if (i == 0) {
                html += "<li data-slide-to='" + i + "' class='tab-active'></li>";
            } else {
                html += "<li data-slide-to='" + i + "' ></li>";
            }
        }
        this.find(".items-tab ol").html(html);

        var defaults = {
            loop: true
        };
        this.settings = $.fn.extend([], defaults, options);

        var $dom = this;
        var $btnLeft = this.find(".left");
        var $btnRight = this.find(".right");
        var $items = this.find(".pro-items");
        var $tabs = this.find("li[data-slide-to]");
        var loop = this.settings.loop;


        var slideTo = function (to) {
            $tabs.removeClass("tab-active");
            $tabs.eq(to).addClass("tab-active");
            // $items.removeClass("active");
            // $items.eq(to).addClass("active");
            $items.removeClass("active");
            $items.eq(to).addClass("active");
        };

        //选项卡点击事件
        var tabClick = function () {
            var $dom = $(this);
            var to = $dom.attr("data-slide-to");
            return slideTo(to);
        };

        //向左切换
        var leftSlide = function () {
            var currentIndex = parseInt($dom.find("li[class='tab-active']").attr("data-slide-to"));
            var to = currentIndex - 1;

            if (currentIndex == 0 && !loop) {
                return;
            }
            if (currentIndex == 0 && loop) {
                to = $items.length - 1;
            }

            return slideTo(to);
        }

        //向右切换
        var rightSlide = function () {
            var currentIndex = parseInt($dom.find("li[class='tab-active']").attr("data-slide-to"));
            var to = currentIndex + 1;

            if (currentIndex == $items.length - 1 && !loop) {
                return;
            }
            if (currentIndex == $items.length - 1 && loop) {
                to = 0;
            }
            return slideTo(to);
        }

        $tabs.click(tabClick);
        $btnLeft.click(leftSlide);
        $btnRight.click(rightSlide);
    };
} (jQuery);


// +function ($) {
//     'use strict';
// 
//     $.fn.proSlider = function (option) {
//         this.$indicator = this.find(".items-tab li");
//         this.$btnLeft = this.find(".left");
//         this.$btnRight = this.find(".right");
//         this.$items = this.find(".pro-items");
//         this.$tabs = this.find("li[data-slide-to]");
//         $.fn.proSlider.prototype.slide = function (to) {
//             this.$tabs.removeClass("tab-active");
//             this.$tabs.eq(to).addClass("tab-active");
//             this.$items.removeClass("active");
//             this.$items.eq(to).addClass("active");
//         }
//         this.currentIndex = function () {
//             return this.find("li[class='tab-active']").attr("data-slide-to");
//         }
//         this.tabClick = function () {
//             var $dom = $(this);
//             var to = $dom.attr("data-slide-to");
//             this.$items.eq(to).addClass("active");
//         }
// 
//         var count = this.find(".pro-items").length;
//         var html = "";
//         for (var i = 0; i <= count - 1; i++) {
//             if (i == 0) {
//                 html += "<li data-slide-to='" + i + "' class='tab-active'></li>";
//             } else {
//                 html += "<li data-slide-to='" + i + "' ></li>";
//             }
//         }
//         this.find(".items-tab ol").html(html);
// 
//         var defaults = {
//             loop: true
//         };
//         this.settings = $.fn.extend([], defaults, option);
// 
//         this.$indicator.click(this.tabClick);
//         this.$indicator.on("click", this.tabClick());
//         this.$btnLeft.on("click", this.leftSlide);
//         this.$btnRight.on("click", this.rightSlide);
//     }
// 
//     $.fn.proSlider.prototype.currentIndex = function () {
//         return this.find("li[class='tab-active']").attr("data-slide-to");
//     }
// 
//     $.fn.proSlider.prototype.slide = function (to) {
//         this.$tabs.removeClass("tab-active");
//         this.$tabs.eq(to).addClass("tab-active");
//         this.$items.removeClass("active");
//         this.$items.eq(to).addClass("active");
//     }
// 
//     $.fn.proSlider.prototype.tabClick = function () {
//         var $dom = $(this);
//         var to = $dom.attr("data-slide-to");
//         this.$items.eq(to).addClass("active");
//     }
// 
//     $.fn.proSlider.prototype.leftSlide = function () {
//         var to = parseInt(this.currentIndex) + 1;
// 
//         if (this.currentIndex == this.$items.length - 1 && !this.loop) {
//             return false;
//         }
//         if (this.currentIndex == this.$items.length - 1 && this.loop) {
//             to = 0;
//         }
//         return this.slide(to);
//     }
// 
//     $.fn.proSlider.prototype.rightSlide = function () {
//         var to = parseInt(this.currentIndex) + 1;
// 
//         if (this.currentIndex == this.$items.length - 1 && !this.loop) {
//             return false;
//         }
//         if (this.currentIndex == this.$items.length - 1 && this.loop) {
//             to = 0;
//         }
//         return this.slide(to);
//     }
// 
// 
// } (jQuery);




// (function ($) {
// 
// 
//     var loop = true; 
//     //initialization
//     $(".pro-slider").each(function () {
//         var $dom = $(this).find(".items-tab ol");
//         var count = $(this).find(".pro-items").length;
//         var html = "";
//         for (var i = 0; i <= count - 1; i++) {
//             if (i == 0) {
//                 html += "<li data-slide-to='" + i + "' class='tab-active'></li>";
//             } else {
//                 html += "<li data-slide-to='" + i + "' ></li>";
//             }
//         }
//         $dom.html(html);
//     })
// 
//     $(".pro-slider .items-tab li").click(function () {
//         var $dom = $(this);
//         var to = $dom.attr("data-slide-to");
//         $dom.siblings("li").removeClass("tab-active");
//         $dom.addClass("tab-active");
//         var $items = $dom.parents(".pro-slider").find(".pro-items");
//         $items.removeClass("active");
//         $items.eq(to).addClass("active");
//     })
// 
//     $(".pro-slider .left").click(function () {
//         var $dom = $(this);
//         var $items = $dom.parents(".pro-slider").find(".pro-items");
//         var $tabs = $dom.parents(".pro-slider").find("li[data-slide-to]");
//         var current = $dom.parents(".pro-slider").find("li[class='tab-active']").attr("data-slide-to");
//         var to = current - 1;
// 
//         if (current == 0 && !loop) {
//             return false;
//         }
//         if (current == 0 && loop) {
//             to = $items.length - 1;
//         }
// 
//         $tabs.removeClass("tab-active");
//         $tabs.eq(to).addClass("tab-active");
//         $items.removeClass("active");
//         $items.eq(to).addClass("active");
//     })
//     $(".pro-slider .right").click(function () {
//         var $dom = $(this);
//         var current = $dom.parents(".pro-slider").find("li[class='tab-active']").attr("data-slide-to");
//         var $items = $dom.parents(".pro-slider").find(".pro-items");
//         var $tabs = $dom.parents(".pro-slider").find("li[data-slide-to]");
//         var to = parseInt(current) + 1;
// 
//         if (current == $items.length - 1 && !loop) {
//             return false;
//         }
//         if (current == $items.length - 1 && loop) {
//             to = 0;
//         }
// 
//         $tabs.removeClass("tab-active");
//         $tabs.eq(to).addClass("tab-active");
//         $items.removeClass("active");
//         $items.eq(to).addClass("active");
//     })
// })($)// JavaScript source code
