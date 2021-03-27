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
    
    // rubberBand Effect
    $(".band-hover").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
      $(this).removeClass("rubberBand")  
    })
    $(".band-hover").hover(function(){
      $(this).addClass("rubberBand");        
    })
    
    
    
    
    
    
//    var coll = document.getElementsByClassName("collapsible");
    var cals = document.getElementsByClassName("card-collapsible");
    var cons = document.getElementsByClassName("cc-content");
    for (var i = 0; i < cals.length; i++) {
      cals[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content, other1, other2, other3;
        if(this.id === "0"){
            content = cons[0];
            other1 = cons[1];
            other2 = cons[2];
            other3 = cons[3];
        }else if(this.id === "1"){
            content = cons[1];
            other1 = cons[0];
            other2 = cons[2];
            other3 = cons[3];
        }else if(this.id === "2"){
            content = cons[2];
            other1 = cons[0];
            other2 = cons[1];
            other3 = cons[3];
        }else if(this.id === "3"){
            content = cons[3];
            other1 = cons[0];
            other2 = cons[1];
            other3 = cons[2];
        }
        if (content.style.maxHeight){
          content.style.maxHeight = null;
          content.style.opacity = null;
          // content.style.display = "none";
        } else {
          other1.style.maxHeight = null;
          other2.style.maxHeight = null;
          other3.style.maxHeight = null;
          other1.style.opacity = null;
          other2.style.opacity = null;
          other3.style.opacity = null;
          // other1.style.display = "none";
          // other2.style.display = "none";
          // content.style.display = "block";
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.opacity = 1;
        } 
      });
    }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});


function copyEmailToClipboard() {
    var copyText = "ivanlidor98@gmail.com";
    document.execCommand("copy");
    alert("Copied to clipboard!");
}






























