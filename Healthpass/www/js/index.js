$(function(){
$( "#pageone" ).on( "swipeleft", proceedtoapp );
$( "#pageone" ).on( "swiperight", proceedtoapp );
function proceedtoapp( event ){
window.location.href="app.html";
// $.mobile.changePage("app.html" , {   reloadPage : true, transition: "slide"});
} 
$( "body>[data-role='panel']" ).panel();
});

$( document ).on( "pageinit", function() {
    $( document ).on( "swiperight", function( e ) {
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
			if ($.mobile.activePage.is("#pagetwo"))
			{
			return;
			}
             if ( e.type === "swiperight" ) {
                $( "#leftpanel1" ).panel( "open" );
            }
        }
    });	
});