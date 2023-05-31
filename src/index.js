import './pages/index.scss';

import { Slider } from './components/Slider.js';
import PressSlider from './components/PressSlider.js';

const sliderImages = ['./images/slider1.png', './images/slider2.png', './images/slider3.png'];
const sliderImageElement = document.querySelector('.slider__image');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

const slider = new Slider(sliderImages, sliderImageElement, leftButton, rightButton);
slider.init();

const pressSlider = new PressSlider();
pressSlider.initialize();





const factsSection = document.querySelector('.description');
const gallerySection = document.querySelector('.slider');
const pressSection = document.querySelector('.press');

const factsButton = document.getElementById('facts-btn');
const galleryButton = document.getElementById('gallery-btn');
const pressButton = document.getElementById('press-btn');
const headerButton = document.querySelector('.header__button');

factsButton.addEventListener('click', () => {
  factsSection.scrollIntoView({ behavior: "smooth"});
});

galleryButton.addEventListener('click', () => {
  gallerySection.scrollIntoView({ behavior: "smooth"});
});

pressButton.addEventListener('click', () => {
  pressSection.scrollIntoView({ behavior: "smooth"});
});

headerButton.addEventListener('click', () => {
  factsSection.scrollIntoView({ behavior: "smooth"});
})


const subscribeForm = document.querySelector('.footer__form');

subscribeForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  evt.submitter.textContent = 'Готово!';
});
