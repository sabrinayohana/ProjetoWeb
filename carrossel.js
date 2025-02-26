// carrossel.js

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const imagens = document.querySelector('.imagens');
const totalImages = document.querySelectorAll('.imagem').length;

let currentIndex = 0;

function updateCarrossel() {
    // Atualiza a posição do carrossel
    imagens.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showNextImage() {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volta à primeira imagem
    }
    updateCarrossel();
}

function showPrevImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1; // Vai para a última imagem
    }
    updateCarrossel();
}

// Adiciona evento para os botões de navegação
nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

// Atualiza o carrossel ao carregar a página
updateCarrossel();
