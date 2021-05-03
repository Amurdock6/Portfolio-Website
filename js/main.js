//preloader
window.addEventListener('load', () => {
		const preload = document.querySelector('.preload');
		setTimeout( function() {
            preload.classList.add('preload-finish');
        }, 0 );
});

//makes the visit me svg visable on hover over work section images
$("#riv").mouseover(function(){
  $("#svg-1 svg").css("opacity", "1");
});
$("#riv").mouseout(function(){
  $("#svg-1 svg").css("opacity", "0");
});

$("#hvms").mouseover(function(){
  $("#svg-2 svg").css("opacity", "1");
});
$("#hvms").mouseout(function(){
  $("#svg-2 svg").css("opacity", "0");
});

$("#box-3").mouseover(function(){
  $("#svg-3 svg").css("opacity", "1");
});
$("#box-3").mouseout(function(){
  $("#svg-3 svg").css("opacity", "0");
});

$("#instapy").mouseover(function(){
  $("#svg-4 svg").css("opacity", "1");
});
$("#instapy").mouseout(function(){
  $("#svg-4 svg").css("opacity", "0");
});


//image on click fill screen
$('img[data-enlargeable]').addClass('img-enlargeable img-background').click(function(){
    var src = $(this).attr('src');
    var modal;
    var background;
    function removeModal(){ modal.remove(); $('body').off('keyup.modal-close'); }
    modal = $('<div>').css({
        background: 'RGBA(0,0,0,0) url('+src+') no-repeat center',
        backgroundSize: 'contain',
        width:'100%', height:'80%',
        position:'fixed',
        zIndex:'10000',
        top:'10%', left:'0',
        cursor: 'zoom-out'
    }).click(function(){
        removeModal(),removeBackground();
    }).appendTo('body');
    //handling ESC
    $('body').on('keyup.modal-close', function(e){
      if(e.key==='Escape'){ removeModal(); }
    });

    function removeBackground(){ background.remove(); $('body').off('keyup.background-close'); }
    background = $('<div>').css({
      background: 'RGBA(0,0,0,.5)',
      backgroundSize: 'contain',
      width:'100%', height:'100%',
      position:'fixed',
      zIndex:'9000',
      top:'0', left:'0',
      cursor: 'zoom-out'
  }).click(function(){
  }).appendTo('body');  
  //handling ESC
  $('body').on('keyup.background-close', function(e){
    if(e.key==='Escape'){ removeBackground(); }
  });
});


//change images color
var imageSources = ["images/american-fork-pic.jpg","images/american-fork-pic-b&w.jpg"]
var buttons = document.getElementsByClassName("change-image")[0];

var imageSources11 = ["images/porsche.jpg","images/porsche-mono.jpg"]
var buttons = document.getElementsByClassName("change-image")[0];

//work section
var imageSources1 = ["images/work-section/hidden-valley.jpeg","images/work-section/hidden-valley-black-white.jpg"]
var buttons = document.getElementsByClassName("change-image")[0];
var imageSources2 = ["images/work-section/rhs-auto-color.jpg","images/work-section/rhs_auto.jpg"]
var buttons = document.getElementsByClassName("change-image")[0];
var imageSources3 = ["images/work-section/axis.png","images/work-section/axis-black-white.png"]
var buttons = document.getElementsByClassName("change-image")[0];
var imageSources4 = ["images/work-section/instapy-colored.png","images/work-section/instapy.png"]
var buttons = document.getElementsByClassName("change-image")[0];

//enlargable certificates
var imageSources5 = ["images/certificates/photoshop-certificate.png","images/certificates/photoshop-certificate-black-white.png"]
var buttons = document.getElementsByClassName("change-image")[0];
var imageSources6 = ["images/certificates/illustrator-certificate.png","images/certificates/illustrator-certificate-black-white.png"]
var buttons = document.getElementsByClassName("change-image")[0];
var imageSources7 = ["images/certificates/secriuty-fundamentals-certificate.png","images/certificates/secriuty-fundamentals-certificate-black-white.png"]
var buttons = document.getElementsByClassName("change-image")[0];
var imageSources8 = ["images/certificates/js-certificate.png","images/certificates/js-certificate-black-white.png"]
var buttons = document.getElementsByClassName("change-image")[0];
var imageSources9 = ["images/certificates/html5-certificate.png","images/certificates/html5-certificate-black-white.png"]
var buttons = document.getElementsByClassName("change-image")[0];
var imageSources10 = ["images/certificates/html-and-css-certificate.png","images/certificates/html-and-css-certificate-black-white.png"]
var buttons = document.getElementsByClassName("change-image")[0];

var index = 0;
var indexOne = 0;
var indexTwo = 0;
var indexThree = 0;
var indexFour = 0;
var indexFive = 0;
var indexSix = 0;
var indexSeven = 0;
var indexEight = 0;
var indexNine = 0;
var indexTen = 0;
var indexEleven = 0;

buttons.addEventListener('click', function() {
  if (index === imageSources1.length) {
    index = 0;
  }
     
   document.getElementById("hvms").src = imageSources1[index];
   index++;
   if (indexOne === imageSources.length) {
      indexOne = 0;
    }
        
    document.getElementById("american-fork").src = imageSources[indexOne];
    indexOne++;
    if (indexTwo === imageSources2.length) {
      indexTwo = 0;
  }

    document.getElementById("riv").src = imageSources2[indexTwo];
    indexTwo++;
    if (indexThree === imageSources3.length) {
      indexThree = 0;
    }

    document.getElementById("box-3").src = imageSources3[indexThree];
    indexThree++;
    if (indexFour === imageSources4.length) {
      indexFour = 0;
    }

    document.getElementById("instapy").src = imageSources4[indexFour];
    indexFour++;
    if (indexFive === imageSources5.length) {
      indexFive = 0;
    }

    document.getElementById("photoshop-enlarge").src = imageSources5[indexFive];
    indexFive++;
    if (indexSix === imageSources6.length) {
      indexSix = 0;
    }

    document.getElementById("illustrator-enlarge").src = imageSources6[indexSix];
    indexSix++;
    if (indexSeven === imageSources7.length) {
      indexSeven = 0;
    }

    document.getElementById("secriuty-enlarge").src = imageSources7[indexSeven];
    indexSeven++;
    if (indexEight === imageSources8.length) {
      indexEight = 0;
    }

    document.getElementById("js-enlarge").src = imageSources8[indexEight];
    indexEight++;
    if (indexNine === imageSources9.length) {
      indexNine = 0;
    }

    document.getElementById("html5-enlarge").src = imageSources9[indexNine];
    indexNine++;
    if (indexTen === imageSources10.length) {
      indexTen = 0;
    }

    document.getElementById("html-css-enlarge").src = imageSources10[indexTen];
    indexTen++;
    if (indexEleven === imageSources11.length){
      indexEleven = 0;
    }

    document.getElementById("porsche-pic").src= imageSources11[indexEleven];
    indexEleven++;
});

//changes certificates color
$('.checkbox').click(function(){
  const button = $(this).parent('#button');

if($(button).find('.checkbox').is(':checked') ) {
  $("#secriuty").css({"background-image": "url('images/certificates/secriuty-fundamentals-certificate.png"}), 
  $("#js").css({"background-image": "url('images/certificates/js-certificate.png"}),
  $("#html5").css({"background-image": "url('images/certificates/html5-certificate.png"}),
  $("#html-css").css({"background-image": "url('images/certificates/html-and-css-certificate.png"}),
  $("#photoshop").css({"background-image": "url('images/certificates/photoshop-certificate.png"}),
  $("#illustrator").css({"background-image": "url('images/certificates/illustrator-certificate.png"})
} else {
  $(".secriuty").css({"background-image": "url('images/certificates/secriuty-fundamentals-certificate-black-white.png"}), 
  $(".js").css({"background-image": "url('images/certificates/js-certificate-black-white.png"}),
  $(".html5").css({"background-image": "url('images/certificates/html5-certificate-black-white.png"}),
  $(".html-css").css({"background-image": "url('images/certificates/html-and-css-certificate-black-white.png"}),
  $(".photoshop").css({"background-image": "url('images/certificates/photoshop-certificate-black-white.png"}),
  $(".illustrator").css({"background-image": "url('images/certificates/illustrator-certificate-black-white.png"})
}

});
