const slides = document.querySelectorAll('.slide-description');
const sliderImg = document.querySelector('.middle-section-slider-img');
let currentSlide = 0;
document.addEventListener("DOMContentLoaded", function () {
    autoChangeSlide();
    showSlide(currentSlide);
});

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });

    const imagePath = `./assets/img/students/${index + 1}.png`;
    sliderImg.classList.remove('carousel');
    void sliderImg.offsetWidth;
    sliderImg.classList.add('carousel');

    sliderImg.style.backgroundImage = `url(${imagePath})`;
}

function autoChangeSlide() {
    setInterval(() => {
        changeSlide(1);
    }, 5000);
}

function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function selectSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}
