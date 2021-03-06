import { SNEAKER } from './data';
import { imageToLeft, imageToRight, changeImageWithThumbnail, displayLightbox } from './slider';
import { openNavMenu, closeNavMenu } from './nav'
import { toggleShoppingCart, openShoppingCart, increaseQuantity, decreaseQuantity, addToCart } from './shopping-cart'

/* Slider buttons */

document.querySelector(".left-btn").addEventListener('click', imageToLeft);
document.querySelector(".right-btn").addEventListener('click', imageToRight);

/* Desktop Features */

if (window.innerWidth >= 700) {
    document.querySelector('.main-photo').addEventListener('click', displayLightbox);

    const thumbnails = document.querySelectorAll('.thumbnail');
    for (const thumbnail of thumbnails) {
        thumbnail.addEventListener('click', changeImageWithThumbnail);
    }

    /* Lightbox */

    const lightboxCloseBtn = document.querySelector('.lightbox-close-btn');
    lightboxCloseBtn.addEventListener('click', () => {
        document.querySelector('.lightbox').style.display = 'none';
    });  

    const lightboxThumbnails = document.querySelectorAll('.lightbox-thumbnail');
    for (const lbThumbnail of lightboxThumbnails) {
        lbThumbnail.addEventListener('click', changeImageWithThumbnail);
    }

    document.querySelector(".lightbox-left-btn").addEventListener('click', imageToLeft);
    document.querySelector(".lightbox-right-btn").addEventListener('click', imageToRight);
}

window.addEventListener('resize', resize);

function resize() {

    if (window.innerWidth >= 700) {
        document.querySelector('.main-photo').addEventListener('click', displayLightbox);

        const thumbnails = document.querySelectorAll('.thumbnail');
        for (const thumbnail of thumbnails) {
            thumbnail.addEventListener('click', changeImageWithThumbnail);
        }

        /* Lightbox */

        const lightboxCloseBtn = document.querySelector('.lightbox-close-btn');
        lightboxCloseBtn.addEventListener('click', () => {
            document.querySelector('.lightbox').style.display = 'none';
        });  

        const lightboxThumbnails = document.querySelectorAll('.lightbox-thumbnail');
        for (const lbThumbnail of lightboxThumbnails) {
            lbThumbnail.addEventListener('click', changeImageWithThumbnail);
        }

        document.querySelector(".lightbox-left-btn").addEventListener('click', imageToLeft);
        document.querySelector(".lightbox-right-btn").addEventListener('click', imageToRight);
    } else {
        document.querySelector('.main-photo').removeEventListener('click', displayLightbox);
    }
}

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


/* Add to Cart */
const quantity = document.querySelector('.quantity')
const increaseQuantityBtn =  document.querySelector('.plus')
increaseQuantityBtn.addEventListener('click', () => {
    quantity.textContent =  increaseQuantity(SNEAKER)

})

const decreaseQuantityBtn =  document.querySelector('.minus')
decreaseQuantityBtn.addEventListener('click', () => {
    quantity.textContent =  decreaseQuantity(SNEAKER)
})

const addToCartBtn = document.querySelector('.add-to-cart-btn')
addToCartBtn.addEventListener('click', () => {
    addToCart(SNEAKER)
    openShoppingCart(cart)
})