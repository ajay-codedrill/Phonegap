$(function(){
$( "#pageone" ).on( "swipeleft", proceedtoapp );
$( "#pageone" ).on( "swiperight", proceedtoapp );
 
  
function proceedtoapp( event ){
window.location.href="app.html";
// $.mobile.changePage("app.html" , {   reloadPage : true, transition: "slide"});
} 


$( "body>[data-role='panel']" ).panel();
});

