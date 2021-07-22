$(function () {
    var click_btn = 0; //슬라이더 광클 막기
    var bigImgW = $('.bigImg-wrap li').width();
    //alert(bigImgW);

    $('.bigImg-wrap li:last').prependTo('.bigImg-wrap');

    $('.bigImg-wrap').css({
        marginLeft: -bigImgW
    });

    $('a.btnR').click(function (e) {
        e.preventDefault();

        if (click_btn === 1) return false;
        click_btn = 1;

        $(this).siblings('.bigImg-wrap').stop().animate({
            marginLeft: '-=' + bigImgW + 'px'
        }, 600, function () {
            $(this).children('li:first').appendTo('.bigImg-wrap');
            $(this).css({
                marginLeft: -bigImgW
            });

            click_btn = 0;
        });
    }); //btnR click()

    $('a.btnL').click(function (e) {
        e.preventDefault();
        
        if (click_btn === 1) return false;
        click_btn = 1;

        $(this).siblings('.bigImg-wrap').stop().animate({
            marginLeft: '+=' + bigImgW + 'px'
        }, 600, function () {
            $(this).children('li:last').prependTo('.bigImg-wrap');
            $(this).css({
                marginLeft: -bigImgW
            });

            click_btn = 0;
        });
    }); //btnL click()
    
    /* 클릭한 썸네일 사진으로 변경하기 */
    $('.thums a').click(function(e){
        e.preventDefault();
        
        //클릭한 썸네일의 href값 구하기
        var pAttr = $(this).attr('href');
        //console.log('href값: '+pAttr);
        
        //클릭한 썸네일의 class값 구하기
        var click_this = $(this).attr('class');
        //console.log('선택한 a태그의 값: ' + click_this);
        
        $('img.'+click_this).css({
            transition: 'all 8s'
        }).attr('src', pAttr);
        
    });
    
}); //jQuery
var fnum = 0; //이동 픽셀수
function moveImg() {
    fnum++;
    
    var mW = $('.bigImg-wrap li').width(); //li하나의 크기
    
    if(fnum > mW){
        $('.bigImg-wrap').append($('.bigImg-wrap li').first()).css('left',0);
        fnum = 0; //이동하는 값 초기화!
    }else{
        $('.bigImg-wrap').css({
            left: -fnum + 'px'
        });
    }
} //moveImg()






