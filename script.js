const boom = new Audio('sounds/boom.wav')
const clap = new Audio('sounds/clap.wav')
const hihat = new Audio('sounds/hihat.wav')
const kick = new Audio('sounds/kick.wav')
const openhat = new Audio('sounds/openhat.wav')
const ride = new Audio('sounds/ride.wav')
const snare = new Audio('sounds/snare.wav')
const tink = new Audio('sounds/tink.wav')
const tom = new Audio('sounds/tom.wav')



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
})