// index.js

$(function () {
    
    //1. GNB
    $('.menu-toggle').click(function () {
        $('nav').animate({
            left: 0
        }, 600);
    });

    $('a.close').click(function (e) {
        e.preventDefault();

        $('nav').animate({
            left: '-90%'
        }, 600);
    });


    //2. MD's PICK - LoadMore
    //초기설정
    $('.md-box').hide().slice(0,2).show();
    
    $('a#More').click(function(e){
        e.preventDefault();
        
        $('.md-box:hidden').slice(0,2).slideDown(600);
        
        var btnTop = $('#More').offset().top - 120;
        
        $('html,body').animate({
            scrollTop: btnTop
        }, 1500, function(){
            if($('.md-box:hidden').length === 0) $('#More').fadeOut(600);
        });
        
        //if($('.md-box:hidden').length === 0) $('#More').fadeOut(600);
    });
    
    /*
    var mdTop = $('.md-pick').offset().top;
    console.log("md-pick TOP값: "+mdTop);
    */
    
    
    //3. 신제품 슬라이드
    var slider = $('.slider');
    
    //초기설정
    $('.slider>.box:last').insertBefore($('.slider>.box:first'));
    slider.css('margin-left', '-100%');
    
    
    //슬라이딩 함수 만들기
    function move () {
        slider.animate({
            marginLeft: '-200%'
        }, 800, function(){
            $('.slider>.box:first').insertAfter('.slider>.box:last');
            slider.css('margin-left', '-100%');
        });
        
        var bseq = $('.slider').find('.box').eq(2).attr('data-seq');
        console.log(bseq);
        
        //블릿 변경
        chgB(bseq);
    }
    
    var auto = setInterval(function(){
        move()
    }, 3000);
    
    
    //블릿 변경함수
    var chgB = function(n){
        $('#new-pager li').eq(n).addClass('on').siblings().removeClass('on');
    };
    
    
    
    
    
});














