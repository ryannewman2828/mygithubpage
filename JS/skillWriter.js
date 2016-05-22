$(document).ready(init);

function init(){
   $("button").click(press);
}

function press(){
    $(this).toggleClass("active");
    var classType = this.id;
    $("." + classType).slideToggle('slow');
}