let slideIndex = 1;
let totalSlides = 3;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    console.log('click:', n)
    for (let i = 1; i <= totalSlides; i++){
        let el = document.getElementById(`slide-${i}`)
        el.classList.remove('active')
        if (i == n) {
            el.classList.add('active')
        } 
    }
}