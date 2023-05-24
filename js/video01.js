$(function () {

    // 정지재생 버튼 하나로 만들기
    let btn = true;
    $('.ctr').on('click', function () {
        $(this).toggleClass('on');
        if (btn) {
            $('.main_visual video').trigger('pause');
        } else {
            $('.main_visual video').trigger('play');
        }
        btn = !btn;
        console.log(btn);
    })

    // 정지버튼, 재생버튼 따로 만들기
    $('.case01 .pause').on('click', function () {
        $('.case01 video').trigger('pause');
    });

    $('.case01 .play').on('click', function () {
        $('.case01 video').trigger('play');
    });

})