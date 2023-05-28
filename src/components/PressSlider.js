class PressSlider {
  constructor() {
    this.sliderTextElement = document.querySelector('.press__slider-text');
    this.firstButton = document.querySelector('.press__button:nth-child(1)');
    this.secondButton = document.querySelector('.press__button:nth-child(2)');
    this.sliderLink = document.getElementById('link');

    this.initialize();
  }

  initialize() {
    this.firstButton.addEventListener('click', this.goBackToFirstSlideWithAnimation.bind(this));
    this.secondButton.addEventListener('click', this.switchToSecondSlideWithAnimation.bind(this));

    this.firstButton.classList.add('active');
    this.secondButton.classList.remove('active');

    setInterval(() => {
      if (this.sliderTextElement.innerHTML.includes('Engadget')) {
        this.switchToSecondSlideWithAnimation();
      } else {
        this.goBackToFirstSlideWithAnimation();
      }
    }, 5000);
  }

  updateSlideWithAnimation(text, isActiveButton) {
    this.sliderTextElement.classList.add('fade-out');

    setTimeout(() => {
      this.sliderTextElement.innerHTML = text;
      this.sliderTextElement.classList.remove('fade-out');

      this.firstButton.classList.toggle('active', !isActiveButton);
      this.secondButton.classList.toggle('active', isActiveButton);
    }, 500);
  }

  switchToSecondSlideWithAnimation() {
    this.updateSlideWithAnimation('<span class="press__slider-span">Drive.ru:</span> Вэн Volkswagen e-Bulli скрестил классику с современной техникой.', true);
    this.firstButton.addEventListener('click', this.goBackToFirstSlideWithAnimation.bind(this));
    this.sliderLink.href = 'https://www.drive.ru/news/volkswagen/5e7447bdec05c4b251000010.html';
  }

  goBackToFirstSlideWithAnimation() {
    this.updateSlideWithAnimation('<span class="press__slider-span">Engadget:</span> VW’s e-BULLI concept shows how your classic van can become an EV.', false);
    this.sliderLink.href = 'https://www.engadget.com/2020-03-20-vw-unveils-e-bulli-t1-electric-conversion.html';
    this.firstButton.removeEventListener('click', this.goBackToFirstSlideWithAnimation.bind(this));
  }
}

export default PressSlider;