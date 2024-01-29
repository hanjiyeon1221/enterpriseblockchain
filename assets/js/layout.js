/* header */
clickCnt = 0;
$('.gnb .lang-main').click(function () {
    clickCnt++;
    if (clickCnt % 2 == 0) {
        $('.gnb .lang-list').hide();
    } else {
        $('.gnb .lang-list').show();
    }
});

// header show on&off
gsap.to('.header', {
    scrollTrigger: {
        trigger: '.sc-intro',
        start: '8% 0%',
        scrub: true,
        // markers: true,
        onEnter: function () {
            $('.header').addClass('show');
            $('.header').removeClass('dark');
        },
        onLeaveBack: function () {
            $('.header').removeClass('show');
        },
    },
});

/* footer */

// joinus banner
gsap.to('.joinbanner .loof', {
    xPercent: 50,
    duration: 30,
    // xPercent: 100,
    repeat: -1,
    ease: 'linear',
});

// quicktop & joinus banner
let lastScroll = 0;
$(window).scroll(function () {
    current = $(this).scrollTop();
    bottomScroll = $(document).height() - $(window).height();
    const scHowH = $('.sc-how').offset().top;
    // console.log(scHowH);

    //sc-intro 안에서는 안보이기
    //스크롤 내리면 숨기고, 올리면 보이기
    if (current > lastScroll) {
        $('.quicktop').removeClass('show');
    } else if (current < scHowH) {
        $('.quicktop').removeClass('show');
    } else {
        $('.quicktop').addClass('show');
    }
    lastScroll = current;

    // 바닥에 닿으면,
    if (Math.floor(current) + 1 >= bottomScroll) {
        $('.joinbanner').addClass('show');
        $('.quicktop').addClass('show');
    } else {
        $('.joinbanner').removeClass('show');
    }
});

$('.btn-top').click(function () {
    $('html').animate({ scrollTop: 0 }, 1000);
});
