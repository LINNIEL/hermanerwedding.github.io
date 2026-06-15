
/* ===================================== */
/* LOCK SCROLL */
/* ===================================== */

document.body.style.overflow = "hidden";

/* ===================================== */
/* AMBIL NAMA TAMU */
/* ===================================== */

const params = new URLSearchParams(window.location.search);

let nama = params.get("to");

if(nama){

    nama = decodeURIComponent(
        nama.replace(/\+/g, " ")
    );

    document.getElementById("nama_tamu").innerText = nama;

}

/* ===================================== */
/* ELEMENT */
/* ===================================== */

const bukaBtn = document.getElementById("bukaUndangan");

const cover = document.getElementById("cover");

const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");

/* ===================================== */
/* BUKA UNDANGAN */
/* ===================================== */

bukaBtn.addEventListener("click", function(){

    cover.classList.add("open");

    document.body.style.overflow = "auto";

    music.play();

    setTimeout(() => {

        cover.style.display = "none";

    }, 1200);

});

/* ===================================== */
/* MUSIC CONTROL */
/* ===================================== */

musicBtn.addEventListener("click", function(){

    if(music.paused){

        music.play();

        musicBtn.innerHTML = "⏸";

    }else{

        music.pause();

        musicBtn.innerHTML = "▶";

    }

});

