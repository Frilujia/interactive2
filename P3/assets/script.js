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
		$(this).css('margin-left', -650)
		$('.pstable').css('opacity',1)
	})




	$("#Gymnastik").click(function(){
		$(this).css('margin-left', -200)
		$('.gytable').css('opacity',1)
	})




	$("#reader").click(function(){
		$(this).css('margin-left', -200)
		$('.readertable').css('opacity',1)
	})




	$("#ella").click(function(){
		$(this).css('margin-left', -200)
		$('.ellatable').css('opacity',1)
	})




	$("#ta").click(function(){
		$(this).css('margin-left', -220)
		$('.tatable').css('opacity',1)
	})




	$("#self").click(function(){
		$(this).css('margin-left', -240)
		$('.selftable').css('opacity',1)
	})




});