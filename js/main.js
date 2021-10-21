$(document).ready(function() {
    // process bar
    console.log(CONFIG);
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function init(){
    $('#title').text(CONFIG.title)
    $('#desc').text(CONFIG.desc)
    $('#yes').text(CONFIG.btnYes)
    $('#no').text(CONFIG.btnNo)
}

function firstQuestion(){
    Swal.fire({
        title: CONFIG.introTitle,
        text: CONFIG.introDesc,
        imageUrl: CONFIG.lookMeLink,
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("'+CONFIG.iputBgLink+'")',
        imageAlt: 'Custom image',
        confirmButtonText: CONFIG.btnIntro
      }).click(function(){
         var audio = new Audio(CONFIG.duckLink);
         audio.play();
      })
}

})

