import { SNEAKER } from './data';
import { imageToLeft, imageToRight, changeImage, displayLightbox } from './slider';
import { openNavMenu, closeNavMenu } from './nav'
import { toggleShoppingCart } from './shopping-cart'

/* Slider buttons */

document.querySelector(".left-btn").addEventListener('click', imageToLeft);

document.querySelector(".right-btn").addEventListener('click', imageToRight);

document.querySelector('.main-photo').addEventListener('click', displayLightbox);

const thumbnails = document.querySelectorAll('.thumbnail');
for (const thumbnail of thumbnails) {
    thumbnail.addEventListener('click', changeImage);
}

/* Lightbox */

const lightboxCloseBtn = document.querySelector('.lightbox-close-btn');
lightboxCloseBtn.addEventListener('click', () => {
    document.querySelector('.lightbox').style.display = 'none';
});  

const lightboxThumbnails = document.querySelectorAll('.lightbox-thumbnail');
for (const lbThumbnail of lightboxThumbnails) {
    lbThumbnail.addEventListener('click', changeImage);
}

document.querySelector(".lightbox-left-btn").addEventListener('click', imageToLeft);

document.querySelector(".lightbox-right-btn").addEventListener('click', imageToRight);

/*  Nav */
const navMobile =  document.querySelector('.navigation-menu')
const menuBtn =  document.querySelector('.menu-btn')
const closeMenuBtn = document.querySelector('.close-menu-btn')

menuBtn.addEventListener('click', () => openNavMenu(navMobile))
closeMenuBtn.addEventListener('click', () => closeNavMenu(navMobile))

/* Cart */
const cart = document.querySelector('.cart')
const cartBtn =  document.querySelector('.shopping-cart-btn')

cartBtn.addEventListener('click', () => toggleShoppingCart(cart))
