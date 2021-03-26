$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show"); 
        }else{
            $('.scroll-up-btn').removeClass("show"); 
        }
    });
    
    //  slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    }); 
    
    //  toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        var src = ($('.menu-btn img').attr('src') === 'images/menu_btn_white.png')
            ? 'images/menu_btn_white_close.png'
            : 'images/menu_btn_white.png';
         $('.menu-btn img').attr('src', src);
    })
    
    //  typing animation script
    var typed = new Typed('.typing', {
        strings: ['Developer', 'Programmer', 'Freelancer', 'Software Engineering Student'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed('.typing-2', {
        strings: ['Developer', 'Programmer', 'Freelancer', 'Software Engineering Student'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    // owl script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
        
    });
    
});
































