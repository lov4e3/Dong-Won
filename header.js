$(function () {

    $('.smenu').css({
        display: 'none'
    });

    $('.lnbWrap>ul>li').hover(function () {
        $(this).children('.smenu').stop().slideDown();
    }, function () {
        $(this).children('.smenu').stop().slideUp();
    });
})
