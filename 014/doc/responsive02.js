$(function(){
/*-------------------------------------------------------------------------------*/
$('#top_banner i').on('click', function(){
    $('#top_banner').slideUp(500);
});


$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:false,
    pauseOnFocus:false,
    fade:true,
    speed:1000,
});




$('.pr_slider').slick({
    arrows:false,
    slidesToShow:4, 
    responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            autoplay:true,
          }
        },


      ]
});


$('#link select').on('change', function(){
    var lnk = $(this).val();
    if(lnk) window.open(lnk);
});


$('.mopen').on('click', function(){
    $('nav').toggleClass('on');
    $(this).toggleClass('on');
});








/*-------------------------------------------------------------------------------*/
});