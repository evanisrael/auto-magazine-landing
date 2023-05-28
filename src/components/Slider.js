export class Slider {
  constructor(images, imageElement, leftButton, rightButton) {
    this.images = images;
    this.imageElement = imageElement;
    this.leftButton = leftButton;
    this.rightButton = rightButton;
    this.currentImageIndex = 0;
    this.timer = null;
  }

  changeImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.imageElement.src = this.images[this.currentImageIndex];
  }

  startSlider() {
    this.timer = setInterval(() => {
      this.changeImage();
    }, 5000);
  }

  stopSlider() {
    clearInterval(this.timer);
  }

  init() {
    this.leftButton.addEventListener('click', () => {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
      this.imageElement.src = this.images[this.currentImageIndex];
    });

    this.rightButton.addEventListener('click', () => {
      this.changeImage();
    });

    this.startSlider();
  }
}