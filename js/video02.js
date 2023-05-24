$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/IbdvEbBZe58',
        containment: '#main_visual',
        // 재생 할 위치
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
        // 스크롤 내리면 재생멈춤
    });

    $('#convideo').YTPlayer({
        videoURL: 'https://youtu.be/IbdvEbBZe58',
        containment: '#bgm1',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('#convideo2').YTPlayer({
        videoURL: 'https://youtu.be/IbdvEbBZe58',
        containment: '#bgm2',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('#convideo3').YTPlayer({
        videoURL: 'https://youtu.be/IbdvEbBZe58',
        containment: '#bgm3',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('#main_visual .pause').on('click', function () {
        $('#bgndVideo').YTPPause();
    });

    $('#main_visual .play').on('click', function () {
        $('#bgndVideo').YTPPlay();
    });
})