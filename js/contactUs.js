
$(function(){
    setTimeout(setActive, 500);
});

function setActive() {
    $("#contact-us-menu-item").addClass('active'); //To highlight active menu item
    $("#contact-us-menu-item").removeClass('hvr-shutter-out-vertical');//To remove hover effect on active menu item
}