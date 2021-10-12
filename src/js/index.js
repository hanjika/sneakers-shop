import { SNEAKER } from './data';
import { imageToLeft, imageToRight, changeImage, displayLightbox } from './slider';

/* Slider buttons */

document.querySelector(".left-btn").addEventListener("click", () => {
    imageToLeft();
});

document.querySelector('.main-photo').addEventListener('click', displayLightbox);

const thumbnails = document.querySelectorAll('.thumbnail');
for (const thumbnail of thumbnails) {
    thumbnail.addEventListener('click', changeImage);
}

/* Lightbox */

const lightbox = document.querySelector('.lightbox');

const btnArea = document.createElement('div');
btnArea.setAttribute('id', 'lightbox-btn-area');

const closeBtn = document.createElement('button');
closeBtn.setAttribute('id', 'close-lightbox-btn');
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

const closeBtnImg

const leftArrowBtn = document.createElement('button');
leftArrowBtn.classList.add('lightbox-left-btn');

const leftBtnImage = document.createElement('img');
leftBtnImage.setAttribute('src', require('../images/icon-previous.svg'));

const rightArrowBtn = document.createElement('button');
rightArrowBtn.classList.add('lightbox-right-btn');

const rightBtnImage = document.createElement('img');
rightBtnImage.setAttribute('src', require('../images/icon-previous.svg'));

const sliderSection = document.querySelector('.slider').cloneNode(true);

btnArea.appendChild(closeBtn);
lightbox.appendChild(btnArea);
lightbox.appendChild(sliderSection);