var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var slides = $$('.mySlide')
var captionText = $('.caption')
var imageTest = $$('.image-demo')

var slideIndex = 1;

showSlides(slideIndex)

imageTest.forEach((item, index) => {
    item.addEventListener('click', function() {
        showSlides(slideIndex = index + 1)
    })
})

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function showSlides(n) {
    if (n > slides.length) {slideIndex = 1}

    if (n < 1) {slideIndex = slides.length}

    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    imageTest.forEach(image => {
        image.className = image.className.replace(' active', '');
    });

    slides[slideIndex -1].style.display = 'block';
    imageTest[slideIndex -1].className += ' active';
    captionText.innerHTML = imageTest[slideIndex -1].alt
}
