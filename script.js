const boom = new Audio('sounds/boom.wav')
const clap = new Audio('sounds/clap.wav')
const hihat = new Audio('sounds/hihat.wav')
const kick = new Audio('sounds/kick.wav')
const openhat = new Audio('sounds/openhat.wav')
const ride = new Audio('sounds/ride.wav')
const snare = new Audio('sounds/snare.wav')
const tink = new Audio('sounds/tink.wav')
const tom = new Audio('sounds/tom.wav')


$('body').keydown(function (event){
  if(event.which === 65) {
      $('.key[data-key = 65]').addClass('playing');
      clap.play()
  }
    if(event.which === 83) {
        $('.key[data-key = 83]').addClass('playing');
        hihat.play()
    }
    if(event.which === 68) {
        $('.key[data-key = 68]').addClass('playing');
        kick.play()
    }
    if(event.which === 70) {
        $('.key[data-key = 70]').addClass('playing');
        openhat.play()
    }
    if(event.which === 71) {
        $('.key[data-key = 71]').addClass('playing');
        boom.play()
    }
    if(event.which === 72) {
        $('.key[data-key = 72]').addClass('playing');
        ride.play()
    }
    if(event.which === 74) {
        $('.key(data-key = 74]').addClass('playing');
        snare.play()
    }
    if(event.which === 75) {
        $('.key[data-key = 75]').addClass('playing');
        tom.play()
    }
    if(event.which === 76) {
        $('.key[data-key = 76]').addClass('playing');
        tink.play()
    }
})