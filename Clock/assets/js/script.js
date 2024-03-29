$(document).ready(function(){

    // add a zero to times below 10
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    // set up time getting function
    function getTime(){
        // get the date
    	var d = new Date();
        
        // get hours, minutes, and seconds
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());
        
        // update the clock's text
        // $('#clock').html(h + ":" + m + ":" + s);

        var hourpercent = h*4;

        var minutepercent = m*1.5;

        var secondpercent = s*1.667;


        $('#rectangleh').css('height', '100'-hourpercent+'vh');
        $('#rectanglem').css('height', '100'-minutepercent+'vh');
        $('#rectangles').css('height', '100'-secondpercent+'vh');

        // rotate clock based on the minute
        // $('#clock').css('transform', 'rotate('+ s * 6 +'deg');

        // detect a specific time
        // if(m == 00){
        // 	$('body').addClass('noon');
        // } else {
        // 	$('body').removeClass('noon');
        // }
    }

    // call getTime every 1 second
    setInterval(function() {
      getTime();
    }, 1000);


});