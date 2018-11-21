$( document ).ready(function() {

$("#artist").hover(function(){
 $("#bio").addClass("show");
 $(".name").addClass("hide");
 // alert("The paragraph was clicked.");
});

$("#bio").hover(function(){
 $("#bio").removeClass("show");
 $(".name").removeClass("hide");
 // alert("The paragraph was clicked.");
});



});