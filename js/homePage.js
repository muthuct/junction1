
$(function(){
    setTimeout(setActive, 500);
});

function setActive() {
    $("#home-menu-item").addClass('active'); //To highlight active home page
    $("#home-menu-item").removeClass('hvr-shutter-out-vertical');//To remove hover effect on active menu item
}