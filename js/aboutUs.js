$(function(){
    setTimeout(setActive, 500);
});

function setActive() {
    $("#about-us-menu-item").addClass('active'); //To highlight active home page
    $("#about-us-menu-item").removeClass('hvr-shutter-out-vertical');//To remove hover effect on active menu item
}