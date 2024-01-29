/* sc-intro */
const intDesc = $('.sc-intro .desc');
let introTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-intro',
        start: 'top top',
        end: '100% 100%',
        scrub: true,
    },
});

introTl.to('.sc-intro .txt-box .desc:nth-child(1)', { autoAlpha: 1 }, 'a');
introTl.to('.sc-intro', { '--bg': 'rgba(0, 0, 0, 0.6)' }, 'a');
introTl.to('.sc-intro .txt-box .desc:nth-child(1)', { autoAlpha: 0 });

introTl.to('.sc-intro .txt-box .desc:nth-child(2)', { autoAlpha: 1 });
introTl.to('.sc-intro .txt-box .desc:nth-child(2)', { autoAlpha: 0 });

introTl.to('.sc-intro .txt-box .desc:nth-child(3)', { autoAlpha: 1 });
introTl.to('.sc-intro .txt-box .desc:nth-child(3)', { autoAlpha: 0 });

introTl.to('.sc-intro .txt-box .desc:nth-child(4)', { autoAlpha: 1 });

/* sc-how */
const howImg = $('.sc-how .img-box picture');
const howTitle = $('.sc-how .tit-box .title');
let howTl = gsap.timeline();
howTl.to('.sc-how .sticky-wrap', { '--bg': 'rgba(0, 0, 0, 0.5)' }, 'a');
howTl.to('.sc-how .tit-box .box', { autoAlpha: 1 }, 'a');
howTl.to('.sc-how .sticky-wrap', { '--bg': 'rgba(0, 0, 0, 0)' }, 'b');
howTl.to(howTitle[0], { xPercent: 100 }, 'b');
howTl.to(howTitle[2], { xPercent: -100 }, 'b');
howTl.to('.sc-how .tit-box .box', { autoAlpha: 0 });

howTl.to(howImg[2], { height: 0 });
howTl.to(howImg[1], { height: 0 });

howTl.to('.sc-how .sticky-wrap', { '--bg': 'rgba(0, 0, 0, 0.4)' }, 'c');
howTl.to('.sc-how .txt-box', { autoAlpha: 1 }, 'c');

ScrollTrigger.create({
    animation: howTl,
    trigger: '.sc-how',
    start: 'top top',
    end: '100% 100%',
    scrub: true,
});

/* Horizontal Text : sc-htxt htxt1*/
function horizontalText(htxt) {
    let htxtTl = gsap.timeline();
    const htxtLine = $(`${htxt} .line span`);
    let txtW1 = htxtLine[0].clientWidth / 2;
    let txtW2 = htxtLine[1].clientWidth / 2;
    let txtW3 = htxtLine[2].clientWidth / 2;

    htxtTl.to(htxtLine[0], { x: -(txtW2 + txtW1) }, 'w');
    htxtTl.to(htxtLine[2], { x: txtW2 + txtW3 }, 'w');

    htxtTl.from(`${htxt} .wht-box-right`, { width: '0%' }, 'w');
    htxtTl.from(`${htxt} .wht-box-left`, { width: '0%' }, 'w');

    ScrollTrigger.create({
        animation: htxtTl,
        trigger: htxt,
        start: '35% bottom',
        end: '110% bottom',
        scrub: true,
        // markers: true,
    });
}
horizontalText('.htxt1');

// body dark on
gsap.to('.sc-possibility', {
    scrollTrigger: {
        trigger: '.sc-possibility',
        start: 'top 60%',
        // end: '',
        onEnter: function () {
            $('body').addClass('dark');
            $('.header').removeClass('dark');
        },
        onLeaveBack: function () {
            $('body').removeClass('dark');
            $('.header').addClass('dark');
        },
    },
});

/* .sc-possibility */
const possSlideBoxW = $('.sc-possibility .slide-top').width();
let possTl = gsap.to('.sc-possibility .slide-box', {
    x: function () {
        return -(possSlideBoxW + 100);
    },
    scrollTrigger: {
        trigger: '.sc-possibility',
        start: 'top top',
        end: '+=3000',
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        ease: 'none',
        invalidateOnRefresh: true, //변수값 수시변환 잡아줌
        // markers: true,
    },
});

/* banner */
const bannerBg = $('.banner-area .banner-bg div');
let bannerTl = gsap.timeline();
bannerTl.from(bannerBg[0], { xPercent: -50 }, 'b');
bannerTl.from(bannerBg[1], { xPercent: -50 }, 'b');
bannerTl.from(bannerBg[2], { xPercent: 50 }, 'b');

ScrollTrigger.create({
    animation: bannerTl,
    trigger: '.banner-area',
    start: '0% 90%',
    end: '100% 80%',
    scrub: true,
    // markers: true,
});
gsap.from('.banner-area .banner-tit', {
    scrollTrigger: {
        trigger: '.banner-area',
        start: '0% 40%',
        end: '100% 30%',
        scrub: true,
        // markers:true,
        onEnter: function () {
            gsap.to('.banner-area .banner-bg', { '--opacity': 1 });
        },
        onLeaveBack: function () {
            gsap.to('.banner-area .banner-bg', { '--opacity': 0 });
        },
    },
    autoAlpha: 0,
});

/* sc-card */
/* ---card-top */
const cardSlideItem = gsap.utils.toArray('.sc-card .card-top .slide-item');
const slideWrapW = $('.card-top .slide-wrap').outerWidth();
// const slideTitW = $('.card-top .slide-tit').innerWidth(); 👈제이쿼리 값 오류
const slideTitW = document.querySelector('.card-top .slide-tit').clientWidth;
const slideTitW2 = document.querySelector('.card-top .slide-tit');
console.log(slideWrapW, slideTitW, slideTitW2);
// content 전체 너비 - 뷰포트 너비
const cardWidth = slideWrapW + slideTitW + 100 - $(window).width();
const cardItemW = $('.sc-card .slide-box .slide-item').outerWidth(true);
// card1Tl.to('.sc-card .card-top .slide-box', { x: -cardWidth });

// 카드 move
const ctl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-card .card-top',
        start: '0% 0%',
        end: '100% 100%',
        scrub: 0,
        invalidateOnRefresh: true,
    },
});
ctl1.to('.card-top .slide-box', {
    x: function () {
        return -cardWidth;
    },
    ease: 'none',
});
ctl1.to(
    '.card-top .slide-box',
    {
        x: -'100vw',
        x: function () {
            return -slideTitW;
        },
        ease: 'none',
    },
    'a',
);
ctl1.to(
    cardSlideItem[1],
    {
        x: function () {
            return -cardItemW;
        },
        ease: 'none',
    },
    'a',
);
ctl1.to(
    cardSlideItem[2],
    {
        x: function () {
            return -cardItemW * 2;
        },
        ease: 'none',
    },
    'a',
);
ctl1.to(
    cardSlideItem[3],
    {
        x: function () {
            return -cardItemW * 3;
        },
        ease: 'none',
    },
    'a',
);

cardSlideItem.forEach((item, i) => {
    ctl1.to(item, {
        scrollTrigger: {
            trigger: item,
            start: `${i * 200 - 20} 50%`,
            delay: 1 * i,
            // markers: true,
            onEnter: function () {
                $(item).addClass('active');
            },
        },
    });
});

const colorCardImg = $('.card-top .color-box .card-img img');
// console.log(colorCardImg[0]);
ctl1.to(
    colorCardImg[0],
    {
        duration: 0.2,
        opacity: 0,
    },
    'a',
);
ctl1.to(
    colorCardImg[1],
    {
        delay: 0.2,
        duration: 0.1,
        opacity: 1,
    },
    'a',
);
ctl1.to(colorCardImg[1], {
    opacity: 0,
});

/* ---card-center */
const ctl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-card .card-center',
        start: '0% 0%',
        end: '100% 100%',
        scrub: 0,
        // markers: true,
        onEnter: function () {
            $('.sc-card .card-top').addClass('hide');
            $('.sc-card .card-center').removeClass('hide');
            gsap.from('.sc-card .card-center .grad-txt', { autoAlpha: 0 });
        },
        onLeaveBack: function () {
            $('.sc-card .card-top').removeClass('hide');
            $('.sc-card .card-center').addClass('hide');
        },
    },
});

/* ---card-bottom */
const ctl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-card .card-bottom',
        start: '0% 0%',
        end: '100% 100%',
        scrub: 0,
        // markers: true,
        onEnter: function () {
            $('.sc-card .card-center').addClass('hide');
            $('.sc-card .card-bottom .data-card').removeClass('hide');
        },
        onLeaveBack: function () {
            $('.sc-card .card-center').removeClass('hide');
            $('.sc-card .card-bottom .data-card').addClass('hide');
        },
    },
});

let card3Tl = gsap.timeline();
const cardSlideItem2 = gsap.utils.toArray('.sc-card .card-bottom .slide-item');
// console.log(cardSlideItem);
cardSlideItem2.forEach((item, i) => {
    card3Tl.to(item, {
        scrollTrigger: {
            trigger: item,
            start: `${i * 200} 50%`,
            delay: 1 * i,
            // markers: true,
            onEnter: function () {
                $(item).addClass('active');
            },
        },
    });
});
card3Tl.to('.sc-card .card-bottom .slide-list', { xPercent: -10 });
card3Tl.to('.sc-card .card-bottom .slide-list', { duration: 1, xPercent: 0 }, 'a');
card3Tl.to(
    cardSlideItem2[1],
    {
        x: function () {
            return -cardItemW;
        },
    },
    'a',
);
card3Tl.to(
    cardSlideItem2[2],
    {
        x: function () {
            return -cardItemW * 2;
        },
    },
    'a',
);
card3Tl.to(
    cardSlideItem2[3],
    {
        x: function () {
            return -cardItemW * 3;
        },
    },
    'a',
);

ScrollTrigger.create({
    animation: card3Tl,
    trigger: '.sc-card .card-bottom',
    start: 'top top',
    end: '100% 100%',
    // pin: true,
    // anticipatePin: 1,
    scrub: true,
    invalidateOnRefresh: true,
    // markers: true,
});

/* ---card-footer */
const ctl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-card .card-footer',
        start: '0% 0%',
        end: '100% 100%',
        scrub: 0,
        // markers: true,
        onEnter: function () {
            $('.sc-card .card-bottom').addClass('hide');
            $('.sc-card .card-footer .card-box').removeClass('hide');
        },
        onLeaveBack: function () {
            $('.sc-card .card-bottom').removeClass('hide');
            $('.sc-card .card-footer .card-box').addClass('hide');
        },
    },
});
ctl4.to('.card-footer .card-box', { '--opacity': 1 });
ctl4.to('.card-footer .txt-box .title', { autoAlpha: 1 });

// body dark off
gsap.to('.basic3', {
    scrollTrigger: {
        trigger: '.basic3',
        start: 'top 30%',
        // end: '',
        // markers: true,
        onEnter: function () {
            $('body').removeClass('dark');
            $('.header').addClass('dark');
        },
        onLeaveBack: function () {
            $('body').addClass('dark');
            $('.header').removeClass('dark');
        },
    },
});

// header dark on
gsap.to('.basic1', {
    scrollTrigger: {
        trigger: '.basic1',
        start: 'top top',
        // end: '',
        // markers: true,
        onEnter: function () {
            $('.header').addClass('dark');
        },
        onLeaveBack: function () {
            $('.header').removeClass('dark');
        },
    },
});

/* Horizontal Text : sc-htxt htxt2*/
horizontalText('.htxt2');

/* sc-future */
let futureTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-future',
        start: 'top top',
        end: '100% 100%',
        scrub: 0,
        invalidateOnRefresh: true,
        // markers: true,
        onEnter: function () {
            gsap.to('.sc-future .sticky-bottom', {
                autoAlpha: 1,
                visibility: 'visible',
            });
        },
        onLeaveBack: function () {
            gsap.to('.sc-future .sticky-bottom', {
                autoAlpha: 0,
                visibility: 'hidden',
            });
        },
        onLeave: function () {
            gsap.to('.sc-future .sticky-bottom', {
                duration: 0.1,
                autoAlpha: 0,
                visibility: 'hidden',
            });
        },
        onEnterBack: function () {
            gsap.to('.sc-future .sticky-bottom', {
                autoAlpha: 1,
                visibility: 'visible',
            });
        },
    },
});

const cardSlideItem3 = gsap.utils.toArray('.sc-future .slide-item');
// console.log(cardSlideItem);
cardSlideItem3.forEach((item, i) => {
    futureTl.to(item, {
        scrollTrigger: {
            trigger: item,
            start: `${i * 50}% 50%`,
            delay: 1 * i,
            // markers: true,
            onEnter: function () {
                $(item).addClass('active');
            },
        },
    });
});
const futureW1 = $('.sc-future .slide-tit').outerWidth();
const futureW2 = $('.sc-future .slide-wrap').outerWidth();
const futureW3 = $('.sc-future .future-desc').outerWidth();
const futureBoxW = futureW1 + futureW2 + futureW3 + 100 - $(window).width();
futureTl.to('.sc-future .slide-box', {
    x: function () {
        return -futureBoxW;
    },
});

let futureT2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-future',
        start: '20% top',
        end: '50% 100%',
        scrub: 0,
        // ease: 'linear',
        // invalidateOnRefresh: true,
        // markers: true,
    },
});
futureT2.to(
    '.sc-future .arrow-title span:nth-child(1)',
    {
        autoAlpha: 0,
    },
    'a',
);
futureT2.to(
    '.sc-future .arrow-title span:nth-child(2)',
    {
        autoAlpha: 1,
    },
    'a',
);

/* sc-creator */
let creatorTl = gsap.timeline();
creatorTl.to('.sc-creator .txt-box', { autoAlpha: 1 });
creatorTl.to('.sc-creator .scroll-box', { autoAlpha: 1 }, '-=.5');
creatorTl.to('.sc-creator .txt-box', { delay: 0.5, autoAlpha: 0 }, 'c');
creatorTl.to('.sc-creator .scroll-box', { delay: 0.5, autoAlpha: 0 }, 'c');

ScrollTrigger.create({
    animation: creatorTl,
    trigger: '.sc-creator',
    start: '0% 0%',
    end: '100% 100%',
    scrub: 1,
    // markers: true,
});

/* sc-use */
let useTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-use',
        start: 'top top',
        end: '100% 100%',
        // pin: true,
        // anticipatePin: 1,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true,
    },
});
const cardSlideItem4 = gsap.utils.toArray('.sc-use .slide-item');
cardSlideItem4.forEach((item, i) => {
    useTl.to(item, {
        scrollTrigger: {
            trigger: item,
            start: `${i * 50}% 50%`,
            delay: 1 * i,
            // markers: true,
            onEnter: function () {
                $(item).addClass('active');
            },
        },
    });
});
const useW1 = $('.sc-use .slide-tit').outerWidth();
const useW2 = $('.sc-use .slide-wrap').outerWidth();
const useW3 = $('.sc-use .use-desc').outerWidth();
const useBoxW = useW1 + useW2 + useW3 + 100 - $(window).width();
useTl.to('.sc-use .slide-box', {
    x: function () {
        return -useBoxW;
    },
});
