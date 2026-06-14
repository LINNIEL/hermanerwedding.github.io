// ======================
// LIGHTBOX GALLERY
// ======================

const galleryImages = document.querySelectorAll('.gallery_grid img');

const lightbox = document.getElementById('lightbox');

const lightboxImg = document.getElementById('lightboxImg');

const closeLightbox = document.getElementById('closeLightbox');

const nextBtn = document.getElementById('nextBtn');

const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;

// OPEN IMAGE
galleryImages.forEach((img, index) => {

    img.addEventListener('click', () => {

        currentIndex = index;

        showImage();

        lightbox.classList.add('show');

    });

});

// SHOW IMAGE
function showImage(){

    lightboxImg.src = galleryImages[currentIndex].src;

}

// CLOSE
closeLightbox.addEventListener('click', () => {

    lightbox.classList.remove('show');

});

// NEXT
nextBtn.addEventListener('click', () => {

    currentIndex++;

    if(currentIndex >= galleryImages.length){

        currentIndex = 0;

    }

    showImage();

});

// PREV
prevBtn.addEventListener('click', () => {

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = galleryImages.length - 1;

    }

    showImage();

});

// ======================
// SWIPE MOBILE
// ======================

let startX = 0;

lightbox.addEventListener('touchstart', (e) => {

    startX = e.touches[0].clientX;

});

lightbox.addEventListener('touchend', (e) => {

    let endX = e.changedTouches[0].clientX;

    // SWIPE LEFT
    if(startX - endX > 50){

        currentIndex++;

        if(currentIndex >= galleryImages.length){

            currentIndex = 0;

        }

        showImage();
    }

    // SWIPE RIGHT
    if(endX - startX > 50){

        currentIndex--;

        if(currentIndex < 0){

            currentIndex = galleryImages.length - 1;

        }

        showImage();
    }

});