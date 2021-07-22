$(function () {
    /* 클릭한 썸네일 사진으로 변경하기 */
    $('.thums a').click(function (e) {
        e.preventDefault();

        //클릭한 썸네일의 href값 구하기
        var pAttr = $(this).attr('href');
        //console.log('href값: '+pAttr);

        //클릭한 썸네일의 class값 구하기
        var click_this = $(this).attr('class');
        //console.log('선택한 a태그의 값: ' + click_this);

        $('img.' + click_this).css({
            transition: 'all 8s'
        }).attr('src', pAttr);

    });

}); //jQuery
