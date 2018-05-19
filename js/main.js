  $(document).ready(function(){
    $('.button-collapse').sideNav();

    //gets max element size, deals with compatibility issues
    var body = document.body,
    var html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    $('.ppolicy').css("height",$('.ppolicytxt').height() + 0.1*(height));

});
