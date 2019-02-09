$(function() {
    $(window).scroll(function () {
        if($(this).scrollTop()>10){
            $('nav').addClass('background')
            $('.header .menu li a').css('color', 'white')
        } else {
            $('nav').removeClass('background')
            $('.header .menu li a').css('color', 'black')
        }
    })
})

let i = 0;
let index = 0;
let interval = null;
let words = ['Coding Enthusiast ','Product Analyst ','Competetive Gamer ','Mediocre Guitar Player '];
function typeWriter() {
    let txt = words[i].substring(0,index + 1);
    const element = document.getElementById("typewriter");
    element.innerHTML = txt;
    index++;
    if (txt === words[i]){
        clearInterval(interval);
        if (i === words.length - 1){
            i = 0;
        } else {
            i++;
        }
        index = 0;
        setTimeout(function (){
            element.innerHTML="";
            interval = setInterval(typeWriter,100);
        },1500);
    }
}

interval = setInterval(typeWriter,50);


