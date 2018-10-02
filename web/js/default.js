function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);         
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            });          
        });
}

$(document).ready(function(){
    $('#epsi').each(function() {
        animationHover(this, 'zoomIn');
    });
});