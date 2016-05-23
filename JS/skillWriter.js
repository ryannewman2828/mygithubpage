$(document).ready(init);

function init(){
    $("button").click(press);
}

function press(){
    $(this).toggleClass("pressed");
    var classType = this.id;
    $("." + classType).slideToggle('slow');
}