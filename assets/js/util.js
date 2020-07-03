(function () {
    var Util = {
        /*
            top-nav的下拉菜单功能
        */
        topDrop: function () {
            // 实现下拉菜单
            var
                tab_lis = $('.tab-title > li:even'),
                tab_drop_lis = $($('.tab-title> li:even').splice(1)),
                tab_items = $('.tab-item')
            tab_line_width = $('.tab-card .line').width()
            tab_lis_width = tab_lis.width()

            tab_lis.mouseover(function () {
                $(this)
                    .addClass('tab-active')
                    .siblings()
                    .removeClass('tab-active')
            })
            tab_drop_lis.mouseover(function () {
                var index = $(this).index() / 2 - 1
                $(tab_items[index])
                    .show()
                    .css({
                        left: -(index + 1) * (tab_lis_width + tab_line_width) + 'px'
                    })
                    .parent()
                    .siblings()
                    .find('.tab-item')
                    .hide()
            })
            tab_drop_lis.mouseout(function () {
                $(this)
                    .find('.tab-item')
                    .hide()
            })
        },

        /*
            三级路由实现判断p标签的行高
            @parmas 
        */
        changePLH: function (lh) {
            var
                p_s = $('.instructions-content p:nth-child(odd)'),
                plh = parseInt($('.instructions-content p').css('line-height'))
            $.each(p_s, function (i, item) {
                $(item).height() > plh ? $(this).css('line-height', lh + 'px') : plh
            });
        },
        /*
            使用jcarousel插件实现轮播图
        */   
        bannerRolling: function () {
            // 初始化插件
            $('.jcarousel')
                .jcarousel({
                    wrap: 'circular',
                })
                // 自动轮播
                .jcarouselAutoscroll({
                    interval: 1000,
                    target: '+=1',
                    autostart: true
                });

            // 点击右侧按钮实现切换
            $('.next')
                .on('jcarouselcontrol:active', function () {
                    $(this).removeClass('inactive');
                })
                .on('jcarouselcontrol:inactive', function () {
                    $(this).addClass('inactive');
                })
                .jcarouselControl({
                    target: '+=1'
                });
            // 点击小点实现切换
            $('.controls')
                .on('jcarouselpagination:active', 'a', function () {
                    $(this).addClass('active');
                })
                .on('jcarouselpagination:inactive', 'a', function () {
                    $(this).removeClass('active');
                })
                .jcarouselPagination();
            // 给banner注册mouseenter
            $('.banner').mouseenter(function () {
                // 停止自动轮播
                $('.jcarousel').jcarouselAutoscroll('stop');
            });
            // 给banner注册mouseleave
            $('.banner').mouseleave(function () {
                // 开始自动轮播
                $('.jcarousel').jcarouselAutoscroll('start');
            });
        },

        /*
            兄弟关系的标签 当前元素加类名，其他标签移除内名

            
        */ 
       siblingsToggleClass:function(ele,className){
            $(ele)
            .addClass(className)
           
            .siblings()
            .removeClass(className)
           
       },
     
    }
    window.Util = Util

})(window, $)