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