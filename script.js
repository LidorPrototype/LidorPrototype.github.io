var modalReff;
var modalReffCont;
var modalContent;
var modal;

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

    $(window).scroll(function(){
        if(this.scrollY > 150){
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
    var strs = ['Software Engineering Student', 'Developer', 'Programmer', 'Freelancer', 'Beginner Designer'];
    var typed = new Typed('.typing', {
        strings: strs,
        typeSpeed: 100,
        backSpeed: 55,
        loop: true
    });
    var typed = new Typed('.typing-2', {
        strings: strs,
        typeSpeed: 100,
        backSpeed: 55,
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
        } else {
          other1.style.maxHeight = null;
          other2.style.maxHeight = null;
          other3.style.maxHeight = null;
          other1.style.opacity = null;
          other2.style.opacity = null;
          other3.style.opacity = null;
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.opacity = 1;
        } 
      });
    }
    // Collapsible area github link
    var cals_github = document.getElementsByClassName("card-collapsible-github");
    cals_github[0].addEventListener("click", function(){
        window.open("https://github.com/LidorPrototype/Online-Courses/blob/master/CoursesList.md", "_blank");
    });

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
    // For projects onclick go to outside the ajax block to function "displayProjects(value)"
    modalReff = document.querySelector("#modal-1");
    modalReffCont = document.querySelector("#slanted-div-projects");
    modalContent = document.querySelector("#modal-content");
    modal = createModal(modalReff, [45, 45, 
                                    55, 45, 
                                    55, 55, 
                                    45, 55]);

    // Tooltip
    var tooltip = document.querySelectorAll('.tooltip-span');
    document.addEventListener('mousemove', fn, false);
    function fn(e) {
        for (var i=tooltip.length; i--;) {
            tooltip[i].style.left = e.pageX + 'px';
            tooltip[i].style.top = e.pageY + 'px';
        }
    }

/*    // Flip Hover       --->>> Made it with CSS at the end lol
//    $("#flip-hover").hover(function(){
//        $(this).css("background","url('images/Coffee/coffee3.jpg') no-repeat center");
//        $(this).css("background-size","100% 100%");
//        $(this).css("color","green");
//        $(this).css("font-weight","800");
//        animation.playSegments([0,180], true);
//    });
//    $("#flip-hover").mouseleave(function(){
//        $(this).css("background","white");
//        $(this).css("color","black");
//        $(this).css("font-weight","500");
//        animation.goToAndStop(0, true);
//    });*/
    // Flip contact form script
    function initFlip(){
      var toggleLinks = document.querySelectorAll('.contact .contact-content .right .form__swap-link');
      var formCard = document.querySelector('.contact .contact-content .right .form-card');
      var shadow = document.querySelector('.contact .contact-content .right .shadow');
      toggleLinks.forEach(function(link){
          link.addEventListener('click', function(){
            formCard.classList.toggle('form-card--flipped');
            shadow.classList.add('shadow--flipping'); 
            setTimeout(function(){
              shadow.classList.remove('shadow--flipping');
            }, 1000); //must match .form-card transition  
          });
      });
    }
    initFlip();
    
});

function displayProjects(project){
    modalContent.innerHTML = "";
    switch(project){
        case '1':
            createModalProject1(modalContent);
            break;
        case '2':
            createModalProject2(modalContent);
            break;
        case '3':
            createModalProject3(modalContent);
            break;
        case '4':
            createModalProject4(modalContent);
            break;
        case '5':
            createModalProject5(modalContent);
            break;
        case '6':
            createModalProject6(modalContent);
            break;
        case '7':
            createModalProject7(modalContent);
            break;
        case '8':
            createModalProject8(modalContent);
            break;
        case '9':
            createModalProject9(modalContent);
            break;
        case '10':
            createModalProject10(modalContent);
            break;
        case '11':
            createModalProject11(modalContent);
            break;
        case '12':
            createModalProject12(modalContent);
            break;
        case '13':
            createModalProject13(modalContent);
            break;
        case '14':
            createModalProject14(modalContent);
            break;
        case '15':
            createModalProject15(modalContent);
            break;
        case '16':
            createModalProject16(modalContent);
            break;
    }
    document.querySelector('#projects-nav').click();
    modal.open();
}
function createModal(container, _points) {
  var content = container.querySelector("#modal-content");
  var dialog = container.querySelector("#modal-dialog");
  var polygon = container.querySelector("#modal-polygon");
  var svg = container.querySelector("#modal-svg");
  var point1 = createPoint(_points[0], _points[1]);
  var point2 = createPoint(_points[2], _points[3]);
  var point3 = createPoint(_points[4], _points[5]);
  var point4 = createPoint(_points[6], _points[7]);
  var animation = new TimelineMax({    
      onReverseComplete: onReverseComplete,
      onStart: onStart,
      paused: true
    })     
    .to(point1, 0.3, {
      x: 15,
      y: 30,
      ease: Power4.easeIn
    }, 0)
    .to(point4, 0.3, {
      x: 5,
      y: 80,
      ease: Power2.easeIn
    }, "-=0.1")
    .to(point1, 0.3, {
      x: 0,
      y: 0,
      ease: Power3.easeIn
    })
    .to(point2, 0.3, {
      x: 100,
      y: 0,
      ease: Power2.easeIn
    }, "-=0.2")
    .to(point3, 0.3, {
      x: 100,
      y: 100,
      ease: Power2.easeIn
    })
    .to(point4, 0.3, {
      x: 0,
      y: 100,
      ease: Power2.easeIn
    }, "-=0.1")  
    .to(container, 1, {
      autoAlpha: 1
    }, 0)  
    .to(content, 1, {
      autoAlpha: 1
    });
  var modal = {
    animation: animation,
    container: container,
    content: content,
    dialog: dialog,    
    isOpen: false,
    open: open,
    close: close   
  };
  modalReffCont.removeChild(container);
  function onClick() {
    if (modal.isOpen) {
      close();
    }
  }
  function onStart() {
    modalReffCont.appendChild(container);
    container.addEventListener("click", onClick);
  }
  function onReverseComplete() {
    container.removeEventListener("click", onClick);
    modalReffCont.removeChild(container);
  }
  function open() {
    modal.isOpen = true;
    animation.play().timeScale(1);
  }
  function close() {
    modal.isOpen = false;
    animation.reverse().timeScale(2);
  }
  function createPoint(x, y) {
    var point = polygon.points.appendItem(svg.createSVGPoint());
    point.x = x || 0;
    point.y = y || 0;
    return point;
  }
  return modal;
}
function createModalProject1(modalContainer){
    // Image - img tag
    var img = document.createElement('img');
    img.src = 'images/Projects/L-ES.png';
    img.setAttribute('width', '100%');
    img.setAttribute('height', '225px');
    img.style.borderBottom = "1px solid #595959";
    // Title - h2 tag with text element
    var h2 = document.createElement('h2');
    var h2Text = document.createTextNode("L-ES Portfolio -This Website");
    h2.appendChild(h2Text);
    // Text - p tag with text element
    var p = document.createElement('p');
    var pText1 = document.createTextNode("This one page website is an online portfolio of Lidor E.S (Me), it's implemented using HTML, CSS and JavaScript (with and without JQuery).");
    var pText2 = document.createTextNode("You can find my skills and projects, you can also read about me in order to get to know me better, read and look at all the online courses I completed.");
    var pText3 = document.createTextNode("And at the bottom there are many ways for you to get in touch me with.");
    p.appendChild(pText1);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText2);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText3);
    // Link - a tag
    var a = document.createElement('a');
    var link = document.createTextNode("Link to this website GitHub repository!");
    a.appendChild(link);
    a.target = "_blank";
    a.href = "https://github.com/LidorPrototype/LidorPrototype.github.io";
    
    modalContainer.appendChild(img);
    modalContainer.appendChild(h2);
    modalContainer.appendChild(p);
//    modalContainer.appendChild(document.createElement("br"));
    modalContainer.appendChild(a);
}        //  L-ES Portfolio -This Website
function createModalProject2(modalContainer){
    // Image - img tag
    var img = document.createElement('img');
    img.src = 'images/Projects/chess.jpeg';
    img.setAttribute('width', '100%');
    img.setAttribute('height', '225px');
    img.style.borderBottom = "1px solid #595959";
    // Title - h2 tag with text element
    var h2 = document.createElement('h2');
    var h2Text = document.createTextNode("Chess Game");
    h2.appendChild(h2Text);
    // Text - p tag with text element
    var p = document.createElement('p');
    var pText1 = document.createTextNode("This is an implantation to the famous Chess game, it's you vs the computer.");
    var pText2 = document.createTextNode("This implantation is a graphical chess engine that also uses pruning in order to increase speed and perforamnces");
    var pText3 = document.createTextNode("Chess is a recreational and competitive board game played between two players, in this project it will be the user versus the computer.");
    p.appendChild(pText1);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText2);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText3);
    // Link - a tag
    var a = document.createElement('a');
    var link = document.createTextNode("Link to this project GitHub repository!");
    a.appendChild(link);
    a.target = "_blank";
    a.href = "https://github.com/LidorPrototype/ChessGameIssue1";
    
    modalContainer.appendChild(img);
    modalContainer.appendChild(h2);
    modalContainer.appendChild(p);
//    modalContainer.appendChild(document.createElement("br"));
    modalContainer.appendChild(a);
}        //  Chess Game
function createModalProject3(modalContainer){
    // Image - img tag
    var img = document.createElement('img');
    img.src = 'images/Projects/passwordkit.png';
    img.setAttribute('width', '100%');
    img.setAttribute('height', '225px');
    img.style.borderBottom = "1px solid #595959";
    // Title - h2 tag with text element
    var h2 = document.createElement('h2');
    var h2Text = document.createTextNode("PasswordKit");
    h2.appendChild(h2Text);
    // Text - p tag with text element
    var p = document.createElement('p');
    var pText1 = document.createTextNode("It's a mobile application for android using Java, this app is a password manager.");
    var pText2 = document.createTextNode("You can store your passwords and usernames, generate new passwords and back it all up to your google drive account.");
    var pText3 = document.createTextNode("It encrypts your data using my own algrithm and on the result of my algorithm it uses Sha-1 and/or Sha-256, everything is then stored on your smartphone locally using SharedPreferences and Sqlite database");
    p.appendChild(pText1);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText2);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText3);
    // Link - a tag
    var a = document.createElement('a');
    var link = document.createTextNode("Google Play link!");
    a.appendChild(link);
    a.target = "_blank";
    a.href = "https://play.google.com/store/apps/details?id=com.LnY.passwordkit";
    
    modalContainer.appendChild(img);
    modalContainer.appendChild(h2);
    modalContainer.appendChild(p);
//    modalContainer.appendChild(document.createElement("br"));
    modalContainer.appendChild(a);
}        //  PasswordKit
function createModalProject4(modalContainer){
    // Image - img tag
    var img = document.createElement('img');
    img.src = 'images/Projects/chatbot-va-black.png';
    img.setAttribute('width', '100%');
    img.setAttribute('height', '225px');
    img.style.borderBottom = "1px solid #595959";
    // Title - h2 tag with text element
    var h2 = document.createElement('h2');
    var h2Text = document.createTextNode("Chatbot & Virtual Assistant");
    h2.appendChild(h2Text);
    // Text - p tag with text element
    var p = document.createElement('p');
    var pText1 = document.createTextNode("Here you will find a collection of implementations of virtual assistants implemented in Python.");
    var pText2 = document.createTextNode("Chatbots are intelligent enough to sense the context of the conversation and execute the right bot flow. However, chatbots cannot find answers or perform a set of activities on their own.");
    var pText3 = document.createTextNode("On the other hand, a virtual assistant can crawl through existing resources and offer assistance for a wide range of requests.");
    p.appendChild(pText1);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText2);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText3);
    // Link - a tag
    var a = document.createElement('a');
    var link = document.createTextNode("Link to this project GitHub repository!");
    a.appendChild(link);
    a.target = "_blank";
    a.href = "https://github.com/LidorPrototype/Chatbot-Virtual-Assistant";
    
    modalContainer.appendChild(img);
    modalContainer.appendChild(h2);
    modalContainer.appendChild(p);
//    modalContainer.appendChild(document.createElement("br"));
    modalContainer.appendChild(a);
}        //  Chatbot & Virtual Asistant
function createModalProject5(modalContainer){
    // Image - img tag
    var img = document.createElement('img');
    img.src = 'images/Projects/AllCalculator.png';
    img.setAttribute('width', '100%');
    img.setAttribute('height', '225px');
    img.style.borderBottom = "1px solid #595959";
    // Title - h2 tag with text element
    var h2 = document.createElement('h2');
    var h2Text = document.createTextNode("AllCalculator");
    h2.appendChild(h2Text);
    // Text - p tag with text element
    var p = document.createElement('p');
    var pText1 = document.createTextNode("This is a calculator with 3 options, it's in the Flutter language.");
    var pText2 = document.createTextNode("You can calculate anything you want using the limited scientific calculator, you can also calculate a tip and bill using the tip calculator option, and the third option is a currency converted which is limited to our donators only, you can donate 3/5/10 NIS any time you want and get the currency converter permanently.");
    p.appendChild(pText1);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText2);
    // Link - a tag
    var a = document.createElement('a');
    var link = document.createTextNode("Google Play link!");
    a.appendChild(link);
    a.target = "_blank";
    a.href = "https://play.google.com/store/apps/details?id=com.lidorfirstflutter.tip_calculator_flutter";
    
    modalContainer.appendChild(img);
    modalContainer.appendChild(h2);
    modalContainer.appendChild(p);
//    modalContainer.appendChild(document.createElement("br"));
    modalContainer.appendChild(a);
}        //  AllCalculator
function createModalProject6(modalContainer){
    // Image - img tag
    var img = document.createElement('img');
    img.src = 'images/Projects/snake-game.png';
    img.setAttribute('width', '100%');
    img.setAttribute('height', '225px');
    img.style.borderBottom = "1px solid #595959";
    // Title - h2 tag with text element
    var h2 = document.createElement('h2');
    var h2Text = document.createTextNode("Snake Games");
    h2.appendChild(h2Text);
    // Text - p tag with text element
    var p = document.createElement('p');
    var pText1 = document.createTextNode("This is a collection of the famous Snake game, it comes in Java, Python and JavaScript.");
    var pText2 = document.createTextNode("Snake is a video game that originated during the late 1970s in arcades becoming something of a classic.");
    var pText3 = document.createTextNode("The player controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up food, trying to avoid hitting its own tail or the edges of the playing area.");
    var pText4 = document.createTextNode("The game available in Java, JavaScript, Python.");
    p.appendChild(pText1);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText2);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText3);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText4);
    // Link - a tag
    var a = document.createElement('a');
    var link = document.createTextNode("Link to this project GitHub repository!");
    a.appendChild(link);
    a.target = "_blank";
    a.href = "https://github.com/LidorPrototype/SnakeGamesCollection";
    
    modalContainer.appendChild(img);
    modalContainer.appendChild(h2);
    modalContainer.appendChild(p);
//    modalContainer.appendChild(document.createElement("br"));
    modalContainer.appendChild(a);
}        //  Snake Games
function createModalProject7(modalContainer){
    // Image - img tag
    var img = document.createElement('img');
    img.src = 'images/Projects/Cubethon-transparent.png';
    img.setAttribute('width', '100%');
    img.setAttribute('height', '225px');
    img.style.borderBottom = "1px solid #595959";
    // Title - h2 tag with text element
    var h2 = document.createElement('h2');
    var h2Text = document.createTextNode("CUBETHON");
    h2.appendChild(h2Text);
    // Text - p tag with text element
    var p = document.createElement('p');
    var pText1 = document.createTextNode("This is a simple game in C# of a red block that trying to avoid collision with other obstacles.");
    var pText2 = document.createTextNode("The game is devided into level, each level contains more and more obstacles, the player speed is increasing, different surface frictions and more.");
    var pText3 = document.createTextNode("This game is suitable for Desktop and Mobile.");
    p.appendChild(pText1);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText2);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText3);
    // Link - a tag
    var a = document.createElement('a');
    var link = document.createTextNode("Link to this project GitHub repository!");
    a.appendChild(link);
    a.target = "_blank";
    a.href = "https://github.com/LidorPrototype/CUBETHON";
    
    modalContainer.appendChild(img);
    modalContainer.appendChild(h2);
    modalContainer.appendChild(p);
//    modalContainer.appendChild(document.createElement("br"));
    modalContainer.appendChild(a);
}        //  CUBETHON
function createModalProject8(modalContainer){
    // Image - img tag
    var img = document.createElement('img');
    img.src = 'images/Projects/Stickr.png';
    img.setAttribute('width', '100%');
    img.setAttribute('height', '225px');
    img.style.borderBottom = "1px solid #595959";
    // Title - h2 tag with text element
    var h2 = document.createElement('h2');
    var h2Text = document.createTextNode("Stickr");
    h2.appendChild(h2Text);
    // Text - p tag with text element
    var p = document.createElement('p');
    var pText1 = document.createTextNode("This is a sticker application in Java for whatsapp, sticker designer is Kiril G.");
    var pText2 = document.createTextNode("It comes with only stickers in the hebrew language for now, it contain some ads and it allows you to add those stickers to your whatsapp freely, only for the featured pack you need to watch a short ad.");
    var pText3 = document.createTextNode("It's connected to Firebase and gets from it the statistics (release date, likes, downloads) as well as which pack is the featured one and also the most updated app version which allow the user to know when there is an update and whether the update is a must or not base on a FireBase fields.");
    p.appendChild(pText1);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText2);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText3);
    // Link - a tag
    var a = document.createElement('a');
    var link = document.createTextNode("Google Play link!");
    a.appendChild(link);
    a.target = "_blank";
    a.href = "https://play.google.com/store/apps/details?id=com.l_es.kiril_stickers";
    
    modalContainer.appendChild(img);
    modalContainer.appendChild(h2);
    modalContainer.appendChild(p);
    modalContainer.appendChild(a);
}        //  Stickr
function createModalProject9(modalContainer){
    // Image - img tag
    var img = document.createElement('img');
    img.src = 'images/Projects/falling-blocks.png';
    img.setAttribute('width', '100%');
    img.setAttribute('height', '225px');
    img.style.borderBottom = "1px solid #595959";
    // Title - h2 tag with text element
    var h2 = document.createElement('h2');
    var h2Text = document.createTextNode("FallingBlocks");
    h2.appendChild(h2Text);
    // Text - p tag with text element
    var p = document.createElement('p');
    var pText1 = document.createTextNode("This is a Falling Blocks implementation in Unity using C#.");
    var pText2 = document.createTextNode("Falling Blocks is a game where you ( the player ) need to move from side to side in order to avoid collision with the blocks that are falling from the top of the screen ( and top of the sides ), the blocks are coming in random direstions, shapes and sizes and the more you progress in the game the faster the blocks will fall.");
    p.appendChild(pText1);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText2);
    // Link - a tag
    var a = document.createElement('a');
    var link = document.createTextNode("Link to this project GitHub repository!");
    a.appendChild(link);
    a.target = "_blank";
    a.href = "https://github.com/LidorPrototype/FallingBlocks";
    
    modalContainer.appendChild(img);
    modalContainer.appendChild(h2);
    modalContainer.appendChild(p);
//    modalContainer.appendChild(document.createElement("br"));
    modalContainer.appendChild(a);
}        //  FallingBlocks
function createModalProject10(modalContainer){
    // Image - img tag
    var img = document.createElement('img');
    img.src = 'images/Projects/tic-tac-toe.png';
    img.setAttribute('width', '100%');
    img.setAttribute('height', '225px');
    img.style.borderBottom = "1px solid #595959";
    // Title - h2 tag with text element
    var h2 = document.createElement('h2');
    var h2Text = document.createTextNode("TicTacToesCollection");
    h2.appendChild(h2Text);
    // Text - p tag with text element
    var p = document.createElement('p');
    var pText1 = document.createTextNode("This is the famous game Tic Tac Toe / noughts and crosses. There are Xs and Os, the players take turns marking the spaces in a 3×3 grid. The first player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner. You can play against the computer or against your friend. The computer looks for the quickest way to win in the least moves.");
    var pText2 = document.createTextNode("The game available in Java, JavaScript, C++, C#, Python.");
    p.appendChild(pText1);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText2);
    // Link - a tag
    var a = document.createElement('a');
    var link = document.createTextNode("Link to this project GitHub repository!");
    a.appendChild(link);
    a.target = "_blank";
    a.href = "https://github.com/LidorPrototype/TicTacToesCollection";
    
    modalContainer.appendChild(img);
    modalContainer.appendChild(h2);
    modalContainer.appendChild(p);
//    modalContainer.appendChild(document.createElement("br"));
    modalContainer.appendChild(a);
}       //  TicTacToesCollection
function createModalProject11(modalContainer){
    // Image - img tag
    var img = document.createElement('img');
    img.src = 'images/Projects/GenericHashTable.png';
    img.setAttribute('width', '100%');
    img.setAttribute('height', '225px');
    img.style.borderBottom = "1px solid #595959";
    // Title - h2 tag with text element
    var h2 = document.createElement('h2');
    var h2Text = document.createTextNode("GenericHashtable");
    h2.appendChild(h2Text);
    // Text - p tag with text element
    var p = document.createElement('p');
    var pText1 = document.createTextNode("HashTables are data structures that support these three operations:");
    var pText2 = document.createTextNode("1. Adding an element");
    var pText3 = document.createTextNode("2. Removing an element");
    var pText4 = document.createTextNode("3. Searching for an element");
    var pText5 = document.createTextNode("The HashTable implemented by using an array that at each index of the array, there is a pointer to a linked list. The HashTable is support int and strings.");
    p.appendChild(pText1);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText2);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText3);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText4);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText5);
    // Link - a tag
    var a = document.createElement('a');
    var link = document.createTextNode("Link to this project GitHub repository!");
    a.appendChild(link);
    a.target = "_blank";
    a.href = "https://github.com/LidorPrototype/GenericHashtable";
    
    modalContainer.appendChild(img);
    modalContainer.appendChild(h2);
    modalContainer.appendChild(p);
    modalContainer.appendChild(a);
}       //  GenericHashtable
function createModalProject12(modalContainer){
    // Image - img tag
    var img = document.createElement('img');
    img.src = 'images/Projects/http-client-transparent.png';
    img.setAttribute('width', '100%');
    img.setAttribute('height', '225px');
    img.style.borderBottom = "1px solid #595959";
    // Title - h2 tag with text element
    var h2 = document.createElement('h2');
    var h2Text = document.createTextNode("HTTP Client");
    h2.appendChild(h2Text);
    // Text - p tag with text element
    var p = document.createElement('p');
    var pText1 = document.createTextNode("An HTTP client that constructs an HTTP request based on user’s command line input, sends the request to a Web server, receives the reply from the server, and displays the reply message on screen. (support only IPv4 connections).");
    var pText2 = document.createTextNode("For Example: './client -p some-text -r 2 tel=03-5952830 age=26 http://www.ptsv2.com/t/client-ex' The Request would be:");
    var pText3 = document.createTextNode("POST /t/ex2?tel=02-6655443&age=23 HTTP/1.0");
    var pText4 = document.createTextNode("Host: www.ptsv2.com \\n Content-length:6");
    var pText5 = document.createTextNode("some-text");
    p.appendChild(pText1);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText2);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText3);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText4);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText5);
    // Link - a tag
    var a = document.createElement('a');
    var link = document.createTextNode("Link to this project GitHub repository!");
    a.appendChild(link);
    a.target = "_blank";
    a.href = "https://github.com/LidorPrototype/HTTP-Client";
    
    modalContainer.appendChild(img);
    modalContainer.appendChild(h2);
    modalContainer.appendChild(p);
    modalContainer.appendChild(a);
}       //  HTTP Client
function createModalProject13(modalContainer){
    // Image - img tag
    var img = document.createElement('img');
    img.src = 'images/Projects/TowerDefense.png';
    img.setAttribute('width', '100%');
    img.setAttribute('height', '225px');
    img.style.borderBottom = "1px solid #595959";
    // Title - h2 tag with text element
    var h2 = document.createElement('h2');
    var h2Text = document.createTextNode("Tower Defense");
    h2.appendChild(h2Text);
    // Text - p tag with text element
    var p = document.createElement('p');
    var pText1 = document.createTextNode("This is a Tower Defense implementation in Unity using C#.");
    var pText2 = document.createTextNode("Tower defense (TD) is a subgenre of strategy video game where the goal is to defend a player's territories or possessions by obstructing the enemy attackers or by stopping enemies from reaching the exits, usually achieved by placing defensive structures on or along their path of attack.");
    p.appendChild(pText1);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText2);
    // Link - a tag
    var a = document.createElement('a');
    var link = document.createTextNode("Link to this project GitHub repository!");
    a.appendChild(link);
    a.target = "_blank";
    a.href = "https://github.com/LidorPrototype/TowerDefense_Issue-1";
    
    modalContainer.appendChild(img);
    modalContainer.appendChild(h2);
    modalContainer.appendChild(p);
//    modalContainer.appendChild(document.createElement("br"));
    modalContainer.appendChild(a);
}       //  Tower Defense
function createModalProject14(modalContainer){
    // Image - img tag
    var img = document.createElement('img');
    img.src = 'images/Projects/disk-memory-managment.gif';
    img.setAttribute('width', '100%');
    img.setAttribute('height', '225px');
    img.style.borderBottom = "1px solid #595959";
    // Title - h2 tag with text element
    var h2 = document.createElement('h2');
    var h2Text = document.createTextNode("Disk Memory Managment");
    h2.appendChild(h2Text);
    // Text - p tag with text element
    var p = document.createElement('p');
    var pText = document.createTextNode("Its a simultion of disk memory mengment , how the disk create files open them reads form them, delete and write... for each file we have inode (a structure) that points to blocks on disk and there will be the file data.");
    p.appendChild(pText);
    // Link - a tag
    var a = document.createElement('a');
    var link = document.createTextNode("Link to this project GitHub repository!");
    a.appendChild(link);
    a.target = "_blank";
    a.href = "https://github.com/LidorPrototype/Disk-Memory-Managment";
    
    modalContainer.appendChild(img);
    modalContainer.appendChild(h2);
    modalContainer.appendChild(p);
//    modalContainer.appendChild(document.createElement("br"));
    modalContainer.appendChild(a);
}       //  Disk Memory Managment
function createModalProject15(modalContainer){
    // Image - img tag
    var img = document.createElement('img');
    img.src = 'images/Projects/MusicianFinder.png';
    img.setAttribute('width', '100%');
    img.setAttribute('height', '225px');
    img.style.borderBottom = "1px solid #595959";
    // Title - h2 tag with text element
    var h2 = document.createElement('h2');
    var h2Text = document.createTextNode("MusicianFinder");
    h2.appendChild(h2Text);
    // Text - p tag with text element
    var p = document.createElement('p');
    var pText1 = document.createTextNode(
        "This app is in Java, it will help musicians find other musicians or bands to play music with. Users can chat with other people, upload posts and connect with other people in their area. We did extensive use with FireBase (authentication, real-time database). It was created with friends, as a team."
    );
    var pText2 = document.createTextNode("The app is not currently maintained.");
    p.appendChild(pText1);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText2);
    // Link - a tag
    var a = document.createElement('a');
    var link = document.createTextNode("Link to this project GitHub repository!");
    a.appendChild(link);
    a.target = "_blank";
    a.href = "https://github.com/LidorPrototype/MusicianFinder";
    
    modalContainer.appendChild(img);
    modalContainer.appendChild(h2);
    modalContainer.appendChild(p);
//    modalContainer.appendChild(document.createElement("br"));
    modalContainer.appendChild(a);
}       //  MusicianFinder
function createModalProject16(modalContainer){
    // Image - img tag
    var img = document.createElement('img');
    img.src = 'images/Projects/http-server.jpg';
    img.setAttribute('width', '100%');
    img.setAttribute('height', '225px');
    img.style.borderBottom = "1px solid #595959";
    // Title - h2 tag with text element
    var h2 = document.createElement('h2');
    var h2Text = document.createTextNode("HTTP Server");
    h2.appendChild(h2Text);
    // Text - p tag with text element
    var p = document.createElement('p');
    var pText1 = document.createTextNode("HTTP server that: Constructs an HTTP response based on client's request and Sends the response to the client");
    var pText2 = document.createTextNode("The server creates the pool of threads in advanced and each time it needs a thread to handle a client connection, it take one from the pool or enqueue the request if there is no available thread in the pool.");
    var pText3 = document.createTextNode("There is always one socket where the server listens to connections and for each client connection request, the server opens another socket. and let a therad handle it.");
    p.appendChild(pText1);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText2);
    p.appendChild(document.createElement("br"));
    p.appendChild(pText3);
    // Link - a tag
    var a = document.createElement('a');
    var link = document.createTextNode("Link to this project GitHub repository!");
    a.appendChild(link);
    a.target = "_blank";
    a.href = "https://github.com/LidorPrototype/HTTP-Server";
    
    modalContainer.appendChild(img);
    modalContainer.appendChild(h2);
    modalContainer.appendChild(p);
    modalContainer.appendChild(a);
}       //  HTTP Server























