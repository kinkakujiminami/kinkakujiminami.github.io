    let currentIndex = 0;
    const testImgs = document.querySelectorAll('.testimg');

    function showSlide(index) {
        testImgs[currentIndex].classList.remove('active');
        currentIndex = (index + testImgs.length) % testImgs.length;
        testImgs[currentIndex].classList.add('active');
    }

    function showNext() {
        showSlide(currentIndex + 1);
    }

    function showPrev() {
        showSlide(currentIndex - 1);
    }
