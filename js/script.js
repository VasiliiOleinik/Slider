window.addEventListener("DOMContentLoaded", () => {
    "use scrict";

    let settings = {
        dots: true,
        arrows: true,
        title: true,
        tileText: '1111111111111',
        autoplay: true,
        autoplayDuration: 3000
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
        slideWidth = {};


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
        let click = new Event("click");
        setInterval(() => {
            next.dispatchEvent(click);
        }, settings.autoplayDuration);
    }

    dotsWrap.addEventListener("click", function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });


});

/*
- Вертикальное пролистывание
- анимация



const transition = this.state.active * - 100/this.state.slides.length

		return {
			width: (this.state.slides.length * 100) + '%',
			transform: `translateX(${transition}%)`
		}
*/