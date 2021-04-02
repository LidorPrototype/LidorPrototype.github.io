$(document).ready(function(){
    var checker = 0;
    function myFunction() {
        var x1 = document.getElementById("snackbar");
        var x2 = document.getElementById("snackbar2");
        setTimeout(function(){ x1.className = "show"; }, 1000);
        setTimeout(function(){ x2.className = "show"; }, 3000);
        setTimeout(function(){ x1.className = x1.className.replace("show", "bye"); }, 10000);
        setTimeout(function(){ x2.className = x1.className.replace("show", "bye"); }, 10500);
    }
    myFunction();
    
     $("#coffee-hover").hover(function(){
//         $(this).parent().parent().parent().parent().parent().css("background","url('images/coffee.gif') no-repeat center");
         $(this).parent().parent().parent().parent().parent().css("background","url('images/Coffee/coffee3.jpg') no-repeat center");
         $(this).parent().parent().parent().parent().parent().css("background-size","100% 100%");
     });
     $("#coffee-hover").mouseleave(function(){
         $(this).parent().parent().parent().parent().parent().css("background","white");
     });
    
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
    var strs = ['Developer', 'Software Engineering Student', 'Programmer', 'Freelancer', 'Beginner Designer'];
    var typed = new Typed('.typing', {
        strings: strs,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed('.typing-2', {
        strings: strs,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    // rubberBand Effect
    $(".band-hover").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
      $(this).removeClass("rubberBand")  
    })
    $(".band-hover").hover(function(){
      $(this).addClass("rubberBand");        
    })
    
    // Collapsible area
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
    
    // Projects gridview area
    var $grid = $('.projects-grid').isotope({
      itemSelector: '.projects-grid-item',
      columnWidth: '.projects-grid-sizer',
      percentPosition: true
    });
    $('.projects-filter-nav').on('click', '.projects-filter', function(){
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    $('.projects-filter-nav').each(function(i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', '.projects-filter', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
      });
    });
    $('#projects-collapse').trigger("click");
    // Tooltip
    var tooltip = document.querySelectorAll('.tooltip-span');
    document.addEventListener('mousemove', fn, false);
    function fn(e) {
        for (var i=tooltip.length; i--;) {
            tooltip[i].style.left = e.pageX + 'px';
            tooltip[i].style.top = e.pageY + 'px';
        }
    }

    
});

















