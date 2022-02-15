var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var modal = $('.modal-image')
var slidesImage = $$('.image-demo');
var imageModal = $('.image-modal');
var captionText = $('.caption-text');
var closeModal = $('.close')


var slideIndex = 1;

slidesImage.forEach((image, index) => {
    image.addEventListener('click', function() {
        showModal(slideIndex = index + 1)
    })
});

function plusSlides(n) {
    showModal(slideIndex += n)
}

function showModal(n) {
    modal.style.display = 'block';
    if (n > slidesImage.length) {slideIndex = 1}
    if (n < 1 ) {slideIndex = slidesImage.length}

    imageModal.src =  slidesImage[slideIndex -1].src;
    // imageModal.style.scale = 1;
    captionText.innerHTML = slidesImage[slideIndex -1].alt;
}

closeModal.addEventListener('click', function() {
    modal.style.display = 'none'
})


