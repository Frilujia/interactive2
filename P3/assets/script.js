// $( document ).ready(function() {

// $("#PortraitSchniewind").click(function(){
//  $(".pstable").addClass("show");
 // $(".name").addClass("hide");
 // alert("The paragraph was clicked.");
// });

// $("#bio").click(function(){
//  $(".pstable").removeClass("show");
 // $(".name").removeClass("hide");
 // alert("The paragraph was clicked.");
// });



// });

$( document ).ready(function() {
	$("#PortraitSchniewind").click(function(){
		$(this).css('margin-left', -200)
		$('.pstable').css('opacity',1)
	})


});