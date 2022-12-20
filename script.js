const boom = new Audio('sounds/boom.wav')
const clap = new Audio('sounds/clap.wav')
const hihat = new Audio('sounds/hihat.wav')
const kick = new Audio('sounds/kick.wav')
const openhat = new Audio('sounds/openhat.wav')
const ride = new Audio('sounds/ride.wav')
const snare = new Audio('sounds/snare.wav')
const tink = new Audio('sounds/tink.wav')
const tom = new Audio('sounds/tom.wav')



/*
document.addEventListener("keypress",function (p){
    if(p.key === "g") {
        boom.play()
    }
    if(p.key=== "a" ){
        clap.play()
    }
    if(p.key === "s"){
        hihat.play()
    }
    if(p.key === "d") {
        kick.play
    }
    if(p.key === "f") {
        openhat.play()
    }
    if(p.key === "h") {
        ride.play()
    }
    if (p.key === "j") {
        snare.play()
    }
    if(p.key === 'k') {
        tom.play
    }
    if (p.key ==='l') {
        tink.play()
    }
})*/

$('body').keydown(function (event) {
  if(event.wich === 65) {
      $('.key(data-key = 65)').addClass('playing');
      clap.play()
  }
    if(event.wich === 83) {
        $('.key(data-key = 83)').addClass('playing');
        hihat.play()
    }
    if(event.wich === 68) {
        $('.key(data-key = 68)').addClass('playing');
        kick.play()
    }
    if(event.wich === 70) {
        $('.key(data-key = 70)').addClass('playing');
        openhat.play()
    }
    if(event.wich === 71) {
        $('.key(data-key = 71)').addClass('playing');
        boom.play()
    }
    if(event.wich === 72) {
        $('.key(data-key = 72)').addClass('playing');
        ride.play()
    }
    if(event.wich === 74) {
        $('.key(data-key = 74)').addClass('playing');
        snare.play()
    }
    if(event.wich === 75) {
        $('.key(data-key = 75)').addClass('playing');
        tom.play()
    }
    if(event.wich === 76) {
        $('.key(data-key = 76)').addClass('playing');
        tink.play()
    }
})