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
    var audio = new Audio(CONFIG.swishLink);
    audio.play();
    $('.content').hide();
    Swal.fire({
        title: CONFIG.introTitle,
        text: CONFIG.introDesc,
        imageUrl: CONFIG.lookMeLink,
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("'+CONFIG.iputBgLink+'")',
        imageAlt: 'Custom image',
        confirmButtonText: CONFIG.btnIntro
      }).then(function(){
        $('.content').show(200);
      })
}


init()

// show popup
$('#yes').click(function() {
    var audio = new Audio(CONFIG.duckLink);
    audio.play();
    Swal.fire({
        title: CONFIG.question,
        html: true,
        width: 900,
        padding: '3em',
        html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder='Whyyy'>",
        background: '#fff url("'+CONFIG.iputBgLink+'")',
        backdrop: `
              rgba(0,0,123,0.4)
              
              left top
              no-repeat
            `,
        confirmButtonColor: '#3085d6',
        confirmButtonColor: '#fe8a71',
        confirmButtonText: CONFIG.btnReply
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                width: 900,
                confirmButtonText: CONFIG.btnAccept,
                background: '#fff url("'+CONFIG.iputBgLink+'")',
                title: CONFIG.mess,
                text: CONFIG.messDesc,
                confirmButtonColor: '#83d0c9',
                onClose: () => {
                    window.location = CONFIG.messLink;
                  }
            })
        }
    })
})

