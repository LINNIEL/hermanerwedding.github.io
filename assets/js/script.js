// ======================
// GENERATE NAMA TAMU
// ======================

const params = new URLSearchParams(window.location.search);

const guest = params.get("to");

const guestName = document.getElementById("guestName");

if(guest){

    guestName.innerText = decodeURIComponent(guest);

}else{

    guestName.innerText = "Tamu Undangan";

}

// ======================
// OPEN INVITATION
// ======================

const openBtn = document.getElementById("openInvitation");

const coverPage = document.getElementById("coverPage");

const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", function(){

    // Swipe cover
    coverPage.classList.add("open");

    // Play music
    music.play();

});

// ======================
// AUTO SLIDER PAUSE
// ======================

const sliderTrack = document.querySelector('.slider_track');

sliderTrack.addEventListener('mouseenter', () => {

    sliderTrack.style.animationPlayState = 'paused';

});

sliderTrack.addEventListener('mouseleave', () => {

    sliderTrack.style.animationPlayState = 'running';

});