$(document).ready(function(){
    
    var Color; 

    $('.box').click(function(){
        $(this).css('background', Color);
    });  

    $('#Red').click(function(){
        Color = ' #B30000';
    });

    $('#Yellow').click(function(){
        Color = '#E5B001';
    });


    $('#Blue').click(function(){
        Color = '#354387';
    });


    function myFunction() {
        $('body').css('background', 'blue');
    //document.body.style.backgroundColor = "red";
    }
    
});