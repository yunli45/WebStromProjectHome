window.onload = function(){
    $(function () {
        var index = 0;
        //------点击底部小圆点
        $(".bottom-btn").click(function () {
            index = $(this).index();                                //获取当前是第几个小圆点
            $(this).addClass("active").siblings().removeClass("active");   //给小圆点添加鼠标经过的class
            $(".item").eq(index).fadeIn().siblings().fadeOut();     //fadeIn是淡入    图片淡入淡出效果
        });
        //------右箭头
        $(".lr-tab .right").click(function () {
            index++;
            if (index > 4)index = 0;            //当到最后一张图，再跳转到第一张
            $(".item").eq(index).fadeIn().siblings().fadeOut();
            $(".bottom-btn").eq(index).addClass("active").siblings().removeClass("active");
        });
        //------左箭头
        $(".lr-tab .left").click(function () {
            index--;
            if (index < 0)index = 4;
            $(".item").eq(index).fadeIn().siblings().fadeOut();
            $(".bottom-btn").eq(index).addClass("active").siblings().removeClass("active");
        });
        //-------鼠标离开图片，再进行自动轮播
        function autoplay () {
            time = setInterval(function () {
                index++;
                if (index > 4)index = 0;
                $(".item").eq(index).fadeIn().siblings().fadeOut();
                $(".bottom-btn").eq(index).addClass("active").siblings().removeClass("active");
            },1000);
        }
        autoplay();                 //这里调用自动轮播函数，也就是默认的效果
        $("#banner").hover(function () {
            clearInterval(time);    //鼠标经过banner区域，清除计时器
        },autoplay);                //这里是鼠标退出banner区域，再进行轮播
    });
};

//todo setInterval(,) 函数，第一个是定时器触发的函数，第二个是时间
