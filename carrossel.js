const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const imagens = document.querySelector('.imagens');
const totalImages = document.querySelectorAll('.imagem').length;

let currentIndex = 0;

function updateCarrossel() {
    imagens.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showNextImage() {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updateCarrossel();
}

function showPrevImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1; 
    }
    updateCarrossel();
}
nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

updateCarrossel();
