//preloader
window.addEventListener('load', () => {
		const preload = document.querySelector('.preload');
		setTimeout( function() {
            preload.classList.add('preload-finish');
        }, 0 );
});

//image on click fill screen
$('img[data-enlargeable]').addClass('img-enlargeable').click(function(){
    var src = $(this).attr('src');
    var modal;
    function removeModal(){ modal.remove(); $('body').off('keyup.modal-close'); }
    modal = $('<div>').css({
        background: 'RGBA(0,0,0,.5) url('+src+') no-repeat center',
        backgroundSize: 'contain',
        width:'100%', height:'80%',
        position:'fixed',
        zIndex:'10000',
        top:'10%', left:'0',
        cursor: 'zoom-out'
    }).click(function(){
        removeModal();
    }).appendTo('body');
    //handling ESC
    $('body').on('keyup.modal-close', function(e){
      if(e.key==='Escape'){ removeModal(); } 
    });
});

//Changes images between black and white and colored
function newfunction() {
var imageSources = ["images/american-fork-pic.jpg","images/american-fork-pic-b&w.jpg"]
    var buttons = document.getElementsByClassName("change-image")[0];
    var index = 0;

      buttons.addEventListener('click', function() {
        if (index === imageSources.length) {
          index = 0;
        }
            
        document.getElementById("american-fork").src = imageSources[index];
        index++;
    });
}
    //changes hidden valley middle
 var imageSources1 = ["images/work-section/hidden-valley.jpeg","images/work-section/hidden-valley-black-white.jpg"]
    var buttons = document.getElementsByClassName("change-image")[0];
    var index = 0;
    
    buttons.addEventListener('click', function() {
      if (index === imageSources1.length) {
        index = 0;
      }
         
     document.getElementById("hvms").src = imageSources1[index];
     index++;
 });
