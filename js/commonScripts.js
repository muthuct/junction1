$.get("../templates/headlinks.html", function(data){
    $("head").append(data);
});

$.get("../templates/navbar.html", function(data){
    $("header").append(data);
});

$.get("../templates/footer.html", function(data){
    $("footer").append(data);
});
/*
function setActive(currentActiveItem) {
    console.log(currentActiveItem);
    currentActiveItem = "\'"+currentActiveItem+"\'";
    console.log(document.getElementById(currentActiveItem).innerHTML);
    $(currentActiveItem).addClass('active'); //To highlight active menu item
    $(currentActiveItem).removeClass('hvr-shutter-out-vertical');//To remove hover effect on active menu item
}*/