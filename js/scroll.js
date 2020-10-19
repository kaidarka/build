$("#header").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".header").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
    $("#header__menu, #header__burger").removeClass('active');
});
$("#projects").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".projects").offset().top -= 100 // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
    $("#header__menu, #header__burger").removeClass('active');
});
$("#mission").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".mission").offset().top -= 100 // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
    $("#header__menu, #header__burger").removeClass('active');
});
$("#profit").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".profit").offset().top -= 100 // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
    $("#header__menu, #header__burger").removeClass('active');
});
$("#contacts").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".contacts").offset().top -= 100 // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
    $("#header__menu, #header__burger").removeClass('active');
});
$(function() {
    $(window).scroll(function(){
        if($(this).scrollTop()>50){
            $('#navigation').addClass('fixed');
        }
        else if ($(this).scrollTop()<140){
            $('#navigation').removeClass('fixed');
        }
    });
});
