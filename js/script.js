$(function () {
    $('#rec-slick').slick({

        centerMode: true,
        centerPadding: '7%',
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        infinite: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: 0,
                    centerMode: true,
                }
            }
        ]


    });
});


$(function () {
    $('#nav-btn').on('click', function () {
        $(this).toggleClass('-active');
        $('#nav').toggleClass('-active');
      
    
    });

    $('#nav-list').on('click', function () {
        $('#nav-btn').toggleClass('-active');
        $('#nav').toggleClass('-active');
    });


});



$(function () {
    new WOW().init();
});

// 変数宣言と代入
var pageTop = $('#page-top');
// ボタン非表示
pageTop.hide();


// 80pxスクロールしたらボタン表示
$ (window).scroll(function () {
    if ($(this).scrollTop() > 80) {
    // 0.3秒でフェードイン
    pageTop.fadeIn(300);
} else {
    // 0.3秒でフェードアウト
    pageTop.fadeOut(300);
}
});
// 0.5秒でページトップへ戻る
pageTop.click(function () {
    $("html").animate({ scrollTop: 0}, 500);
    return false;
})

/*
Background Gradients From -- 
https://uigradients.com
*/