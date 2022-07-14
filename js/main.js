(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]

THEPAW TESTIMONIAL SLIDER JS
THEPAW SWIPER SLIDER JS

-------------------------------------------------------------------*/

/*--------------------------------------------------------------
CUSTOM PRE DEFINE FUNCTION
------------------------------------------------------------*/
/* is_exist() */
jQuery.fn.is_exist = function(){
  return this.length;
}


$(function(){

  $(".menu-bar").on("click", function () {
    $(".offcanves-menu, .offcanvas-overlay").addClass("active");
});
$(".close, .offcanvas-overlay").on("click", function () {
    $(".offcanves-menu, .offcanvas-overlay").removeClass("active");
});

// date picker

$('#rangestart').calendar({
  type: 'date',
  endCalendar: $('#rangeend')
});
$('#rangeend').calendar({
  type: 'date',
  startCalendar: $('#rangestart')
});


	

});/*End document ready*/


$(window).on("resize", function(){


}); // end window resize


$(window).on("load" ,function(){

}); // End window LODE




})(jQuery);






