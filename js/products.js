
$(function(){
    setTimeout(setActive, 500);
});

function setActive() {
    $("#products-menu-item").addClass('active'); //To highlight active menu item
    $("#products-menu-item").removeClass('hvr-shutter-out-vertical');//To remove hover effect on active menu item
}