document.getElementById('nama').innerHTML = 'Abdil Tegar Arifin';

$('#nim').html('20190140086');

$(function(){
    console.log("Hello");
});

//hide
$('#hide').on("click",function(){
    $('#nama').hide();
});

//show
$('#show').on("click",function(){
    $('#nama').show();
});

//toggle
$('#toggle').on("click",function(){
    $('#nama').toggle();
});

//fade in
$('#fadeIn').on("click",function(){
    $('#tanggal').fadeIn();
});

//fade out
$('#fadeOut').on("click",function(){
    $('#tanggal').fadeOut();
});

//fade toggle
$('#fadeToggle').on("click",function(){
    $('#tanggal').fadeToggle();
});

//slide up
$('#slideUp').on("click",function(){
    $('#img').slideUp();
});

//slide down
$('#slideDown').on("click",function(){
    $('#img').slideDown();
});

//slide toggle
$('#slideToggle').on("click",function(){
    $('#img').slideToggle();
});



