$(function () {
    $('a[href^="#"]').on('click', function () {
        let speed = 400;
        let headerHight = 94;
        let href = $(this).attr('href');
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top - headerHight;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
    /* ＝＝＝＝＝スライダー＝＝＝＝＝＝ */
    // トップ
    $('.is-slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        slidesToShow: 5,
        centerMode: true,
        centerPadding: "5%",
        cssEase: 'ease-in',
        dots: true,
        //レスポンシブでの動作を指定
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,

                }
            }
        ]

    });
    $('.is-slider-voice').slick({
        autoplay: false,
        arrows: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "0px",


        prevArrow: '<div class="p-slider__prev-arrow"><img src="./img/prev.png" alt=""></div>',
        nextArrow: '<div class="p-slider__next-arrow"><img src="./img/next.png" alt=""></div>',

    });




});
