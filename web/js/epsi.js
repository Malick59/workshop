/* CAROUSEL IMAGE */

$('.carousel').carousel({
    interval: 10000,
    pause: "false",
    keyboard: true
});
$(document).keydown(function (e) {
    if (e.keyCode === 37 || e.keyCode === 81) {
// Previous
        $(".carousel-control.left").click();
        return false;
    }
    if (e.keyCode === 39 || e.keyCode === 68) {
// Next
        $(".carousel-control.right").click();
        return false;
    }
});
$('.carousel').bcSwipe({threshold: 50});
