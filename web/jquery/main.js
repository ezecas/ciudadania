$(document).ready(function(){
    $('.menu li:has(p)').click(function(e){
        e.preventDefault();

        if ($(this).hasClass('activo')){
            $(this).removeClass('activo')
            $(this).children('p').slideUp();
        }
        else{
            $('.menu li p').slideUp();
            $('.menu li').removeClass('activo');
            $(this).addClass('activo');
            $(this).children('p').slideDown();
        }
    });

    $('.btn-menu').click(function(){
        $('.contenedor-menu .menu').slideToggle();
    });

    $(window).resize(function(){
        if($(document).width() > 450){
            $('.contenedor-menu .menu').css({'display':'block'})
        }
        if($(document).width() < 450){
            $('.contenedor-menu .menu').css({'display':'none'})
            $('.menu li p').slideUp();
            $('.menu li').removeClass('activo');
        }
        
    });
});