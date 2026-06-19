
/* ===================================== */
/* LOCK SCROLL */
/* ===================================== */

document.body.style.overflow = "hidden";

/* ===================================== */
/* AMBIL NAMA TAMU */
/* ===================================== */

const params = new URLSearchParams(window.location.search);

const nama = params.get("to");

if (nama) {

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

        // Hitung ulang semua posisi elemen AOS
        AOS.refreshHard();

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

