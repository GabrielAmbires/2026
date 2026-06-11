const carouselImages = document.querySelectorAll('.carousel-image');
let currentSlide = 0;

let autoSlideTimer = null;

const atualizarSlideAtivo = (index) => {
  carouselImages.forEach((image, imageIndex) => {
    if (imageIndex === index) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
};

const avancarSlide = () => {
  currentSlide += 1;
  if (currentSlide >= carouselImages.length) currentSlide = 0;
  atualizarSlideAtivo(currentSlide);
};

const retrocederSlide = () => {
  currentSlide -= 1;
  if (currentSlide < 0) currentSlide = carouselImages.length - 1;
  atualizarSlideAtivo(currentSlide);
};

const iniciarAutoDeslizamento = () => {
  if (autoSlideTimer !== null) clearInterval(autoSlideTimer);
  autoSlideTimer = setInterval(avancarSlide, 2000);
};

const pararAutoDeslizamento = () => {
  if (autoSlideTimer !== null) {
    clearInterval(autoSlideTimer);
    autoSlideTimer = null;
  }
};

// form handling removed (cadastro section deleted)


const carouselWindow = document.querySelector('.carousel-window');
if (carouselWindow) {
  carouselWindow.addEventListener('mouseenter', pararAutoDeslizamento);
  carouselWindow.addEventListener('mouseleave', iniciarAutoDeslizamento);
}

// FAQ Accordion
const faqButtons = document.querySelectorAll('.faq-button');
faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const faqItem = button.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Fechar todos os itens
    faqButtons.forEach((otherButton) => {
      const otherItem = otherButton.closest('.faq-item');
      otherItem.classList.remove('active');
    });
    
    // Abrir o item clicado (se não estava ativo)
    if (!isActive) {
      faqItem.classList.add('active');
    }
  });
});

atualizarSlideAtivo(currentSlide);
iniciarAutoDeslizamento();
