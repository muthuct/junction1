$(function(){
    setTimeout(setActive, 500);
});

function setActive() {
    $("#clients-menu-item").addClass('active'); //To highlight active menu item
    $("#clients-menu-item").removeClass('hvr-shutter-out-vertical');//To remove hover effect on active menu item
}

$("document").ready(function() {
    var texts = [" We are happy about the service given by New Junction 1. Especially, I have to mention the wonderful service Mr.Venkat is rendering.  All the best for an extraordinary future.", " It is always a pleasure to work with highly professional and competitive enterprises like New Junction 1."," New Junction 1 is ... efficient, timely delivery, great execution. Thank You.", "The best product and service even if the work is assigned at the last minute."];

    var authors = ["Frozen Thoughts<br><span>R.Sridar</span><br><span>Administration</span>","Odyssey India Ltd<br><span>Jayant Chandouk</span><br><span>Head of Visual Merchandising</span>", "Landmark Limited<br><span>Lijin Thomas Varghese</span><br><span>Marketing Head</span>", "G.R.T Grand Days<br><span>Sathish<span><br><span>Restaurant Manager</span>"];

    var i = 0;
    var j = 0;
    (function runIt() {
        i++;
        $('#quotes').fadeOut(5000, function() {
            $('#quotes').html(texts[i % texts.length]);
            $('#quotes').fadeIn(5000, function() {
                runIt()
            });
        });
    }());

    (function runAuthor() {
        j++;
        $('#feedback-client').fadeOut(5000, function() {
            $('#feedback-client').html(authors[j % texts.length]);
            $('#feedback-client').fadeIn(5000, function() {
                runAuthor()
            });
        });
    }());
});

$("document").ready(function() {
    var k=0;
    var clientImage = "<div id='client-img' class='col-xs-4 col-sm-3 col-md-2 text-center'><img src='http://via.placeholder.com/150x150' class='img-thumbnail'></div>";
    for(k=0 ; k < 24 ; k++) {
        $("#client-pictures").append(clientImage);
    }
});


