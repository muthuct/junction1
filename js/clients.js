$(function(){
    setTimeout(setActive, 500);
});

function setActive() {
    $("#clients-menu-item").addClass('active'); //To highlight active menu item
    $("#clients-menu-item").removeClass('hvr-shutter-out-vertical');//To remove hover effect on active menu item
}