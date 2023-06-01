$(function () {

    // 로고 클릭시 콘텐츠 최상단 위치
    $(".logo").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 400); // 0.4초
    });

    // 화살표 클릭시 콘텐츠 최상단 위치
    $(".btn_top").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 400); // 0.4초
    });
    // 화살표 버튼, 스크롤 500픽셀 도달시 나타남
        // .scroll() - 이벤트 메서드인데, 스크롤바가 이동할때마다 이벤트 발생
        // .scrollTop() - 브라우저에 스크롤바가 수직/수평으로 이동한 위치값을 불러오거나 변경할 때 사용
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".btn_top").fadeIn();
        } else {
            $(".btn_top").fadeOut();
        }
    });
    // 각 메뉴 클릭시 애니메이션으로 해당 콘텐츠에 위치시킴
    // .eq() : 지정한 변수만 선택




});