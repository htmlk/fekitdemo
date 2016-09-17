/**
 * Created by Administrator on 2016/9/16.
 */
$(document).ready(function() {
    $(".slideInner").slide({
        slideContainer: $('.slideInner a'),
        effect: 'easeInOutBack',
        autoRunTime: 5000,
        slideSpeed: 1000,
        nav: true,
        autoRun: true,
        prevBtn: $('a.prev'),
        nextBtn: $('a.next')
    });
});