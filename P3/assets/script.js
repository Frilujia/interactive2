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
		$(this).toggleClass('goleftps')
		$('.pstable').toggleClass('goopacity')
	})







	$("#Gymnastik").click(function(){
		$(this).toggleClass('goleft')
		$('.gytable').toggleClass('goopacity')
		
	})







	$("#reader").click(function(){
		$(this).toggleClass('goleft')
		$('.readertable').toggleClass('goopacity')
	})







	$("#ella").click(function(){
		$(this).toggleClass('goleft')
		$('.ellatable').toggleClass('goopacity')
	})







	$("#ta").click(function(){
		$(this).toggleClass('goleftta')
		$('.tatable').toggleClass('goopacity')
	})







	$("#self").click(function(){
		$(this).toggleClass('goleftself')
		$('.selftable').toggleClass('goopacity')
	})




});