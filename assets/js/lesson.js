

//Tab 1 - Lesson 1
$(document).ready(function(){
$("#pic1").click(function(){
$("#voc1").slideToggle("slow");
});
});
$(document).ready(function(){
$("#pic2").click(function(){
$("#voc2").slideToggle("slow");
});
});
$(document).ready(function(){
$("#pic3").click(function(){
$("#voc3").slideToggle("slow");
});
});
$(document).ready(function(){
$("#pic4").click(function(){
$("#voc4").slideToggle("slow");
});
});
$(document).ready(function(){
$("#pic5").click(function(){
$("#voc5").slideToggle("slow");
});
});
$(document).ready(function(){
$("#pic6").click(function(){
$("#voc6").slideToggle("slow");
});
});
$(document).ready(function(){
$("#pic7").click(function(){
$("#voc7").slideToggle("slow");
});
});
// Tab3 - Lesson1
$(document).ready(function(){
$("#reset").click(function () {
$('input:radio[name=optradio]').attr('checked',false);
});
$("#result").click(function () {
$('input:radio[name=optradio]')[0].checked = true;
$('input:radio[name=optradio]')[2].checked = true;
$('input:radio[name=optradio]')[5].checked = true;
$('input:radio[name=optradio]')[6].checked = true;
$('input:radio[name=optradio]')[9].checked = true;
});
$("#check").click(function(){
result=0;
if ($('input:radio[name=optradio]')[0].checked){
result +=1;
}
if ($('input:radio[name=optradio]')[2].checked){
result +=1;
}
if ($('input:radio[name=optradio]')[5].checked){
result +=1;
}
if ($('input:radio[name=optradio]')[6].checked){
result +=1;
}
if ($('input:radio[name=optradio]')[9].checked){
result +=1;
}
if (result == 5){
swal("Good job!", result+"/5", "success")
}
else {
sweetAlert("Oops...", result+"/5", "error");
}
});
});

//tab 2 - Lesson1
$(document).ready(function(){
$("#q1").click(function(){

  var curSrc = $(this).attr('src');
  if ( curSrc === 'assets/img/question.png' ) {
      $(this).attr('src', 'assets/img/unit1/knock-at.jpg');
  }
  else $(this).attr('src', 'assets/img/question.png');

    });
    });
$(document).ready(function(){
$("#q2").click(function(){

  var curSrc = $(this).attr('src');
  if ( curSrc === 'assets/img/question.png' ) {
      $(this).attr('src', 'assets/img/unit1/rubber.jpg');
  }
  else $(this).attr('src', 'assets/img/question.png');

    });
    });
$(document).ready(function(){
$("#q3").click(function(){

  var curSrc = $(this).attr('src');
  if ( curSrc === 'assets/img/question.png' ) {
      $(this).attr('src', 'assets/img/unit1/calculator.png');
  }
  else $(this).attr('src', 'assets/img/question.png');

    });
    });
$(document).ready(function(){
$("#q4").click(function(){

  var curSrc = $(this).attr('src');
  if ( curSrc === 'assets/img/question.png' ) {
      $(this).attr('src', 'assets/img/unit1/pencil-sharpener.jpg');
  }
  else $(this).attr('src', 'assets/img/question.png');

    });
    });
$(document).ready(function(){
$("#q5").click(function(){

  var curSrc = $(this).attr('src');
  if ( curSrc === 'assets/img/question.png' ) {
      $(this).attr('src', 'assets/img/unit1/compass.jpg');
  }
  else $(this).attr('src', 'assets/img/question.png');

    });
    });
$(document).ready(function(){
$("#q6").click(function(){

  var curSrc = $(this).attr('src');
  if ( curSrc === 'assets/img/question.png' ) {
      $(this).attr('src', 'assets/img/testimonial-1.png');
  }
  else $(this).attr('src', 'assets/img/question.png');

    });
    });
$(document).ready(function(){
$("#q7").click(function(){

  var curSrc = $(this).attr('src');
  if ( curSrc === 'assets/img/question.png' ) {
      $(this).attr('src', 'assets/img/testimonial-1.png');
  }
  else $(this).attr('src', 'assets/img/question.png');

    });
    });
$(document).ready(function(){
$("#btn-hide").click(function(){

$("#q1").attr('src', 'assets/img/question.png');
$("#q2").attr('src', 'assets/img/question.png');
$("#q3").attr('src', 'assets/img/question.png');
$("#q4").attr('src', 'assets/img/question.png');
$("#q5").attr('src', 'assets/img/question.png');
$("#q6").attr('src', 'assets/img/question.png');
$("#q7").attr('src', 'assets/img/question.png');
    });
    });
//tab 4 -lesson 1
$(document).ready(function(){
$("#pic8").click(function(){
$( "#voc8" ).toggle( "slide" );
});
});
$(document).ready(function(){
$("#voc8").click(function(){
$( "#voc8-1" ).toggle( "slide" );
});
});
$(document).ready(function(){
$("#pic9").click(function(){
$( "#voc9" ).toggle( "slide" );
});
});
$(document).ready(function(){
$("#voc9").click(function(){
$( "#voc9-1" ).toggle( "slide" );
});
});
$(document).ready(function(){
$("#pic10").click(function(){
$( "#voc10" ).toggle( "slide" );
});
});
$(document).ready(function(){
$("#voc10").click(function(){
$( "#voc10-1" ).toggle( "slide" );
});
});
$(document).ready(function(){
$("#pic11").click(function(){
$( "#voc11" ).toggle( "slide" );
});
});
$(document).ready(function(){
$("#voc11").click(function(){
$( "#voc11-1" ).toggle( "slide" );
});
});
//tab 5 - lesson 1
