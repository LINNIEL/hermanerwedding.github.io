
/* ===================================== */
/* IMAGE DATA */
/* ===================================== */

const galleryImages = document.querySelectorAll(
    ".foto img"
);

const lightbox = document.getElementById(
    "lightbox"
);

const lightboxImage = document.getElementById(
    "lightboxImage"
);

let currentIndex = 0;

/* ===================================== */
/* OPEN */
/* ===================================== */

function openGallery(index){

    currentIndex = index;

    const fullImage =
        galleryImages[index].dataset.full;

    lightboxImage.src = fullImage;

    lightbox.classList.add("active");

}

/* ===================================== */
/* CLOSE */
/* ===================================== */

function closeGallery(){

    lightbox.classList.remove("active");

}

/* ===================================== */
/* NEXT */
/* ===================================== */

function nextImage(){

    currentIndex++;

    if(currentIndex >= galleryImages.length){

        currentIndex = 0;

    }

    lightboxImage.src =
        galleryImages[currentIndex].dataset.full;

}

/* ===================================== */
/* PREV */
/* ===================================== */

function prevImage(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex =
            galleryImages.length - 1;

    }

    lightboxImage.src =
        galleryImages[currentIndex].dataset.full;

}

/* ===================================== */
/* SWIPE MOBILE */
/* ===================================== */

let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener(
    "touchstart",
    function(e){

        touchStartX =
            e.changedTouches[0].screenX;

    }
);

lightbox.addEventListener(
    "touchend",
    function(e){

        touchEndX =
            e.changedTouches[0].screenX;

        handleSwipe();

    }
);

function handleSwipe(){

    if(touchEndX < touchStartX - 50){

        nextImage();

    }

    if(touchEndX > touchStartX + 50){

        prevImage();

    }

}
