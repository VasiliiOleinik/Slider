window.addEventListener("DOMContentLoaded", () => {
    "use scrict";

    let settings = {
        dots: true, // Точки
        arrows: false, // Стрелки
        title: true, // Заголовок
        tileText: 'Title text', // Текст заголовка
        autoplay: true, // Автопролистывание
        autoplayDuration: 3000, //  Скорость автопролистывания
        animation: "fade" // Тип анимации: linear, ease, ease-in, ease-in-out, ease-out
    };

    let slideIndex = 1, // текущий слайд
        slides = document.querySelectorAll('.slider-item'),
        slidesImg = document.querySelectorAll('.slider-item img'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll(".dot"),
        title = document.querySelector('.slider-title'),
        slideElemWidth,
        slideWidth = {},
        slideLength = {},
        click = new Event("click");

    if (settings.dots == false) {
        dotsWrap.remove();
    }
    if (settings.arrows == false) {
        prev.remove();
        next.remove();
    }
    if (settings.title == false) {
        title.remove();
    }
    if (settings.autoplay == true) {
        autoplay();
    }
    title.textContent = settings.tileText;

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach((item) => item.style.display = 'none');
        slideLength.length = slides.length;
        dots.forEach((item) => item.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'block';
        slideElemWidth = slidesImg[slideIndex - 1].getBoundingClientRect();
        slideWidth.width = slideElemWidth.width;
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener("click", () => {
        plusSlides(-1);
    });
    next.addEventListener("click", () => {
        plusSlides(1);
    });

    function autoplay() {
        setInterval(() => {
            next.dispatchEvent(click);
        }, settings.autoplayDuration);
    }

    slides.forEach((item) => {
        if (settings.animation === "fade") {
            item.className = " ";
            item.className = "fade slider-item";
        }
        if (settings.animation === "linear") {
            item.className = " ";
            item.className = "linear slider-item";
        }
        if (settings.animation === "ease") {
            item.className = " ";
            item.className = "ease slider-item";
        }
        if (settings.animation === "ease-in") {
            item.className = " ";
            item.className = "ease-in slider-item";
        }
        if (settings.animation === "ease-in-out") {
            item.className = " ";
            item.className = "ease-in-out slider-item";
        }
        if (settings.animation === "ease-out") {
            item.className = " ";
            item.className = "ease-out slider-item";
        }
    });

    dotsWrap.addEventListener("click", function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });

});