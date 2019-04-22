var index = 0;  //初始话一个变量 指向下标
$(".tab-btn .btn").click(function () {
    index = $(this).index();//获取点击元素的下标
    $(this).addClass("active").siblings().removeClass("active");
    $(".item").eq(index).fadeIn().siblings().fadeOut();
    //eq方法 找到第 下标 个图片，让他淡入,
    //同时为了避免每张图片只能点击一次，所以找到其他图片，让他们淡出
    // alert(index);
});//通过点击事件 点击到小按钮
//siblings().  当我们点击给他添加样式的时候，
//找到除了点击以外的其他的兄弟元素，删除他的class名字
$(".lr-tab .you-btn").click(function () {
    index++;//下标变大
    if (index > 4) {
        index = 0;
    }
    $(".item").eq(index).fadeIn().siblings().fadeOut();
    //找到图片，找到现在index指向的那张图片，让他淡入，并将其他的图片淡出
    $(".tab-btn .btn").eq(index).addClass("active").siblings().removeClass("active");
    //这里和之前类似，找到当前下标的按钮，给他添加显示样式，给其他兄弟移除样式。
});//通过点击事件 点击到小按钮
//siblings().  当我们点击给他添加样式的时候，
//找到除了点击以外的其他的兄弟元素，删除他的class名字
$(".lr-tab .zuo-btn").click(function () {
    index--;
    if (index < 0) {
        index = 4;
    }
    $(".item").eq(index).fadeIn().siblings().fadeOut();
    //找到图片，找到现在index指向的那张图片，让他淡入，并将其他的图片淡出
    $(".tab-btn .btn").eq(index).addClass("active").siblings().removeClass("active");
    //这里和之前类似，找到当前下标的按钮，给他添加显示样式，给其他兄弟移除样式。
});//通过点击事件 点击到小按钮
//siblings().  当我们点击给他添加样式的时候，
//找到除了点击以外的其他的兄弟元素，删除他的class名字
var timer = setInterval(function () {
    index++;//下标变大
    if (index > 4) {
        index = 0;
    }
    $(".item").eq(index).fadeIn().siblings().fadeOut();
    //找到图片，找到现在index指向的那张图片，让他淡入，并将其他的图片淡出
    $(".tab-btn .btn").eq(index).addClass("active").siblings().removeClass("active");
    //这里和之前类似，找到当前下标的按钮，给他添加显示样式，给其他兄弟移除样式。
    //通过点击事件 点击到小按钮
    //siblings().  当我们点击给他添加样式的时候，
    //找到除了点击以外的其他的兄弟元素，删除他的class名字
}, 3000);//定时器
