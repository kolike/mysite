function slider() {
    const slides = document.querySelectorAll('.offer__slide'),
        slider = document.querySelector('.offer__slider'),
        dots = [],
        slideBtnPrev = document.querySelector('.offer__slider-prev'),
        slideBtnNext = document.querySelector('.offer__slider-next'),
        slideId = document.querySelector('#current');
    let slideIndex = 1;

    slideId.textContent = `0${slideIndex}`;
    showSlides(slideIndex);
    slider.style.position = 'relative';

    const indicators = document.createElement('ol');
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        indicators.append(dot);
        if (i === 0) {
            dot.style.opacity = 1;
        }
        dots.push(dot);
    }

    slideBtnNext.addEventListener('click', () => {
        slideIndex++;
        showSlides(slideIndex);
        getDotOpactiy();

    });
    slideBtnPrev.addEventListener('click', () => {
        slideIndex--;
        showSlides(slideIndex);
        getDotOpactiy();
    });

    dots.forEach((item) => {
        item.addEventListener('click', () => {
            slideIndex = item.getAttribute('data-slide-to');
            showSlides(slideIndex);
            getDotOpactiy();
        });

    });

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        } else if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'block';

        if (slides.length < 10) {
            slideId.textContent = `0${slideIndex}`;
        } else {
            slideId.textContent = slides.length;
        }
    }

    function getDotOpactiy() {
        dots.forEach((item) => {
            item.style.opacity = 0.5;
        });
        dots[slideIndex - 1].style.opacity = 1;
    }
}

module.exports = slider;